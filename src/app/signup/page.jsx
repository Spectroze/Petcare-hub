"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PawPrint, Check, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");
  const [validations, setValidations] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    special: false,
  });
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      toast.success("Already authenticated, redirecting...");
      router.replace("/user-dashboard");
    }
  }, [sessionStatus, router]);

  useEffect(() => {
    setValidations({
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleLogInClick = () => {
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      toast.error("Email is invalid");
      return;
    }

    if (!isFormValid) {
      setError("Password is invalid");
      toast.error("Password does not meet the requirements");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          userType,
        }),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success(result.message);

        if (result.userType === "pet-admin") {
          router.push("/admin");
        } else if (result.userType === "pet-owner") {
          router.push("/");
        } else if (
          result.userType === "pet-boarding" ||
          result.userType === "pet-training"
        ) {
          router.push("/pet-traine");
        } else {
          router.push("/");
        }
      } else {
        setError(result.message);
        toast.error(result.message);
      }
    } catch (error) {
      setError("Error, try again");
      toast.error("Error, please try again");
      console.log(error);
    }
  };

  const ValidationItem = ({ isValid, text }) => (
    <div
      className={`flex items-center ${
        isValid ? "text-green-500" : "text-red-500"
      }`}
    >
      {isValid ? <Check size={16} /> : <X size={16} />}
      <span className="ml-2 text-sm">{text}</span>
    </div>
  );

  const isFormValid = Object.values(validations).every(Boolean);

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-500">
      <div className="m-auto bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex">
        <div className="w-1/2 p-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex flex-col justify-center items-center">
          <div className="bg-white rounded-full p-5 mb-8 shadow-lg">
            <PawPrint className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to Pet-Care
          </h1>
          <p className="text-blue-100 text-center max-w-xs mx-auto">
            Your trusted partner in pet health and happiness. Join us to access
            premium pet care services and expert advice.
          </p>
        </div>
        <div className="w-1/2 p-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Create your account
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                placeholder="username"
              />
            </div>
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
                placeholder="email"
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
                className={`mt-1 w-full border-2 focus:ring-blue-500 ${
                  password
                    ? isFormValid
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="password"
              />
              <div className="mt-2 space-y-1">
                <ValidationItem
                  isValid={validations.length}
                  text="At least 8 characters"
                />
                <ValidationItem
                  isValid={validations.lowercase}
                  text="Contains one lowercase letter"
                />
                <ValidationItem
                  isValid={validations.uppercase}
                  text="Contains one uppercase letter"
                />
                <ValidationItem
                  isValid={validations.number}
                  text="Contains one number"
                />
                <ValidationItem
                  isValid={validations.special}
                  text="Contains one special character (@, #, $, etc.)"
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="userType"
                className="text-sm font-medium text-gray-700"
              >
                I am a:
              </Label>
              <Select
                onValueChange={(value) => setUserType(value)}
                value={userType}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pet-owner">Pet Owner</SelectItem>
                  <SelectItem value="pet-grooming">
                    Pet Grooming Service
                  </SelectItem>
                  <SelectItem value="pet-training">
                    Pet Training Service
                  </SelectItem>
                  <SelectItem value="pet-boarding">
                    Pet Boarding Service
                  </SelectItem>
                  <SelectItem value="pet-admin">Pet Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button
              type="submit"
              disabled={!isFormValid}
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Create Account
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              onClick={handleLogInClick}
              className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
