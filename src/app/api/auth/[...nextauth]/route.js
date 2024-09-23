// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect(); // Ensure DB connection

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("User not found");
        }

        // Check if password matches
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        // Return user object if authentication is successful
        return user;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    // JWT callback to add userType to the token
    async jwt({ token, user }) {
      if (user) {
        token.userType = user.userType; // Attach userType to the JWT token
      }
      return token;
    },
    // Session callback to add userType to the session
    async session({ session, token }) {
      session.user.userType = token.userType; // Attach userType to the session
      return session;
    },
    // Sign-in callback to handle userType logic
    async signIn({ user, account }) {
      if (account?.provider === "credentials") {
        return true;
      }

      if (account?.provider === "github") {
        await connect(); // Ensure DB connection
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
              userType: "user", // Default GitHub users to regular 'user'
            });
            await newUser.save();
          }
          return true;
        } catch (err) {
          console.error("Error during GitHub user sign-in:", err);
          return false;
        }
      }
      return false;
    },
  },

  // Redirect users to the login page if they need to sign in
  pages: {
    signIn: "/login",
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
