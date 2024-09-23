"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleAppointmentClick = () => {
    router.push("/appointment");
  };

  return (
    <section
      className="relative h-screen bg-gradient-to-b from-[#4A90E2] to-[#7ED321] flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">PetCare Hub</h1>
        <p className="text-xl md:text-2xl mb-8">
          A Platform for Pet Sitting and Veterinary Services
        </p>
        <button
          className="bg-[#F5A623] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#E09600] transition-colors"
          onClick={handleAppointmentClick}
        >
          Get Started
        </button>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/home.jpg"
          className="absolute inset-0 w-full h-full object-cover text-white opacity-50"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-24 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)",
        }}
      />
    </section>
  );
}
