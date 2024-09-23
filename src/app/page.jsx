"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PawPrint } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { data: session } = useSession();

  // If the user is already logged in, redirect based on userType
  if (session) {
    if (session.user.userType === "pet-admin") {
      router.push("/admin");
    } else {
      router.push("/homepage");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before new attempt

    const result = await signIn("credentials", {
      redirect: false, // Prevent auto-redirect
      email,
      password,
    });

    if (result.error) {
      setError("Invalid email or password");
    } else {
      // After successful login, check the userType for redirection
      const userType = session?.user?.userType;
      if (userType === "pet-admin") {
        router.push("/admin"); // Redirect admin users to admin dashboard
      } else {
        router.push("/homepage"); // Redirect regular users to homepage
      }
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSignUpClick = () => {
    router.push("/signup");
  };

  return (
    <div>
      <div className="flex h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-500">
        <div className="m-auto bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex">
          <div className="w-1/2 p-12">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Log in to your account
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  E-mail Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Log in
              </Button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                onClick={handleSignUpClick}
                className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
              >
                Sign up here
              </a>
            </p>
          </div>
          <div className="w-1/2 p-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex flex-col justify-center items-center">
            <div className="bg-white rounded-full p-5 mb-8 shadow-lg">
              <PawPrint className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-center">
              Welcome to Pet-Care
            </h1>
            <p className="text-blue-100 text-center max-w-xs mx-auto">
              Your trusted partner in pet health and happiness. Log in to access
              premium pet care services and expert advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
