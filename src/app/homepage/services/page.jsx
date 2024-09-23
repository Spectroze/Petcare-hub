import React from "react";
import Image from "next/image";
import { FaHeart, FaStethoscope, FaPaw, FaCut } from "react-icons/fa"; // Added FaCut for grooming

export default function Services() {
  const services = [
    {
      title: "Pet Sitting",
      icon: FaHeart,
      color: "#F5A623",
      image: "/pet-sitting.jpg?height=300&width=400",
    },
    {
      title: "Veterinary Care",
      icon: FaStethoscope,
      color: "#4A90E2",
      image: "/pet-veterinary.jpg?height=300&width=400",
    },
    {
      title: "Pet Training",
      icon: FaPaw,
      color: "#7ED321",
      image: "/pet-traning.jpg?height=300&width=400",
    },
    {
      title: "Pet Grooming",
      icon: FaCut,
      color: "#9B59B6", // Added a new color for variety
      image: "/pet-groominng.jpg?height=300&width=400",
    },
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#4A90E2]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden group perspective"
            >
              <div className="absolute inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white [backface-visibility:hidden]"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon size={48} className="mb-4" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
