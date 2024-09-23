"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Facility360View Component
const Facility360View = ({ src }) => (
  <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
    <iframe
      src={src}
      width="100%"
      height="100%"
      frameBorder="0"
      allowFullScreen
      className="absolute inset-0"
      title="360 degree view of facility"
    ></iframe>
  </div>
);

const OurFacilities = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="mb-16" id="facilities">
      <h2 className="text-4xl font-bold mb-4 text-center text-primary">
        Our Facilities
      </h2>
      <p className="mb-4 text-center max-w-2xl mx-auto">
        Our modern 10,000 sq ft facility is designed with your pet's comfort and
        safety in mind. Explore our spaces through the interactive 360° views
        below.
      </p>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="indoor">Indoor Areas</TabsTrigger>
          <TabsTrigger value="outdoor">Outdoor Areas</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-4">
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Spacious, climate-controlled indoor play areas</li>
                <li>Secure outdoor play yards with shade structures</li>
                <li>Comfortable, private boarding suites</li>
                <li>State-of-the-art grooming salon</li>
                <li>
                  On-site veterinary clinic for routine and emergency care
                </li>
                <li>24/7 monitoring and security systems</li>
              </ul>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "/placeholder.svg?height=200&width=300",
                  "/placeholder.svg?height=200&width=300",
                  "/placeholder.svg?height=200&width=300",
                ].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Facility image ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="indoor">
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Indoor Play Areas and Boarding Suites
              </h3>
              <p className="mb-4">
                Experience our spacious indoor facilities, designed for your
                pet's comfort and enjoyment.
              </p>
              <Facility360View src="https://example.com/360-indoor-view" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="outdoor">
          <Card className="bg-white/80 backdrop-blur-sm shadow-md">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                Outdoor Play Yards
              </h3>
              <p className="mb-4">
                Explore our secure and fun outdoor play areas where pets can
                enjoy the fresh air and exercise.
              </p>
              <Facility360View src="https://example.com/360-outdoor-view" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default OurFacilities;
