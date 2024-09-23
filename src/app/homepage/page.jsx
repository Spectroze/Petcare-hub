"use client";
import React from "react";
import Home from "./home/page";
import Services from "./services/page";
import Contact from "./contact/page";
import Testimonial from "./testimonials/page";
import OurFacilities from "./facilities/page";

export default function landingpage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Home />
        <Services />
        <Contact />
        <Testimonial />
        <OurFacilities />
      </main>
    </div>
  );
}
