import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password, userType } = await request.json();

    await connect();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: "Email is already in use" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      userType,
    });

    await newUser.save();

    return new NextResponse(JSON.stringify({ message: "User is registered" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error saving user:", err);
    return new NextResponse(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
