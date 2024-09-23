import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    avatar: "/placeholder-user.jpg",
    quote:
      "PetCare Hub has been a game-changer for my pet sitting needs. The platform is easy to use, and the sitters are reliable and trustworthy.",
    rating: 5,
  },
  {
    name: "Jane Appleseed",
    avatar: "/placeholder-user.jpg",
    quote:
      "I've been using PetCare Hub for all my veterinary needs, and the service has been exceptional. The platform makes it easy to find and book appointments with trusted professionals.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    avatar: "/placeholder-user.jpg",
    quote:
      "I've been using PetCare Hub for both pet sitting and grooming services, and I'm consistently impressed by the quality of service and the care my pets receive.",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Hear from our satisfied customers about their experience with
            PetCare Hub.
          </p>
        </motion.div>
        <Carousel className="w-full max-w-2xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-lg">
                    <CardContent className="p-6 space-y-6">
                      <motion.div
                        className="flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Avatar className="h-20 w-20 border-4 border-primary shadow-lg">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={`${testimonial.name}'s Avatar`}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <blockquote className="text-lg font-medium italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Star className="h-6 w-6 text-yellow-500 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-primary font-semibold">
                        {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/50 hover:bg-background" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/50 hover:bg-background" />
        </Carousel>
      </div>
    </section>
  );
}
