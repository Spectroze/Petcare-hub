import { useEffect, useState } from "react"; // Ensure useState and useEffect are imported
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [isClient, setIsClient] = useState(false); // State to check if it's client-side rendering

  // Ensure the component runs only on the client side
  useEffect(() => {
    setIsClient(true); // Set client-side flag after rendering
  }, []);

  if (!isClient) {
    return null; // Avoid rendering the component on the server
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PetCare</h3>
            <p className="mb-4">
              Providing loving care for your furry friends since 2010.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-secondary transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-secondary transition-colors">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#testimonial" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:underline">
                  Facilities
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Pet Boarding
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Grooming
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Veterinary Care
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Dog Walking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pet Training
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@petcare.com" className="hover:underline">
                  info@petcare.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>123 Pet Street, Pawsome City, PC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} PetCare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
