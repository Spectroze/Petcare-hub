import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative h-screen bg-gradient-to-b from-[#4A90E2] to-[#7ED321] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/paw-pattern.png')] opacity-10 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto space-y-12 relative z-10"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help. Contact us
            today and let's make your pet care experience exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border-none">
            <CardContent className="flex flex-col items-center justify-center h-full p-6">
              <Mail className="w-10 h-10 text-yellow-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Email Us
              </h3>
              <p className="text-center text-white/80">info@petcarehub.com</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border-none">
            <CardContent className="flex flex-col items-center justify-center h-full p-6">
              <Phone className="w-10 h-10 text-green-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Call Us</h3>
              <p className="text-center text-white/80">+1 (555) 123-4567</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border-none">
            <CardContent className="flex flex-col items-center justify-center h-full p-6">
              <MapPin className="w-10 h-10 text-blue-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">
                Visit Us
              </h3>
              <p className="text-center text-white/80">
                123 Pet Street, Pawsome City, PC 12345
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-none">
          <CardContent className="p-8">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/20 border-none text-white placeholder-white/60"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/20 border-none text-white placeholder-white/60"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="sm:col-span-2"
              >
                <Textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white/20 border-none text-white placeholder-white/60"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="sm:col-span-2"
              >
                <Button
                  type="submit"
                  className="w-full text-lg py-6 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold transition-colors duration-300"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
