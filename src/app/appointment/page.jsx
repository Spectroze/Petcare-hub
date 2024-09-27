"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-hot-toast";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { PawPrint, User, Camera, Stethoscope } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Appointment() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [ownerPicture, setOwnerPicture] = useState(null);
  const [petPicture, setPetPicture] = useState(null);
  const router = useRouter();

  const handleOwnerPictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOwnerPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePetPictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Fetch submitted appointments
  const fetchSubmittedAppointments = async () => {
    try {
      const response = await fetch("/api/appointment");
      const data = await response.json();
      console.log("Submitted Appointments:", data);
      return data;
    } catch (error) {
      console.error("Error fetching submitted appointments:", error);
      toast.error("Failed to load submitted appointments.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!event.target.firstName.value || !event.target.email.value) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      petName: event.target.petName.value,
      breed: event.target.breed.value,
      species: event.target.species.value,
      age: event.target.age.value,
      allergies: event.target.allergies.value,
      medicalHistory: event.target.medicalHistory.value,
      emergencyName: event.target.emergencyName.value,
      emergencyContact: event.target.emergencyContact.value,
      consentGiven: consentGiven,
      ownerPicture: ownerPicture,
      petPicture: petPicture,
    };

    console.log("Form Data:", formData);

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorDetails = await res.json();
        console.error("Error uploading:", errorDetails);
        toast.error(`Error: ${errorDetails.error || "Unknown error"}`);
      } else {
        console.log("Upload successful");
        toast.success("Upload successful!");
        event.target.reset();
        setOwnerPicture(null);
        setPetPicture(null);
        setConsentGiven(false);
        router.push("/user-dashboard");

        // Fetch submitted appointments after successful submission
        await fetchSubmittedAppointments();
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold flex items-center justify-center">
          <PawPrint className="mr-2" />
          Pet Appointment Form
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center text-purple-700">
              <User className="mr-2" />
              Owner Information
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="Enter your first name"
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="ownerPicture"
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                <Camera className="mr-2" />
                Owner Picture
              </Label>
              <Input
                id="ownerPicture"
                type="file"
                accept="image/*"
                onChange={handleOwnerPictureChange}
                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
              {ownerPicture && (
                <div className="mt-2">
                  <img
                    src={ownerPicture}
                    alt="Owner preview"
                    className="w-32 h-32 object-cover rounded-full border-4 border-purple-300"
                  />
                </div>
              )}
            </div>
          </div>

          <Separator className="bg-purple-200" />

          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center text-pink-700">
              <PawPrint className="mr-2" />
              Pet Information
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="petName"
                  className="text-sm font-medium text-gray-700"
                >
                  Pet's Name
                </Label>
                <Input
                  id="petName"
                  placeholder="Enter your pet's name"
                  className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="breed"
                  className="text-sm font-medium text-gray-700"
                >
                  Breed
                </Label>
                <Input
                  id="breed"
                  placeholder="Enter your pet's breed"
                  className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="species"
                  className="text-sm font-medium text-gray-700"
                >
                  Species
                </Label>
                <Select>
                  <SelectTrigger
                    id="species"
                    className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                  >
                    <SelectValue placeholder="Select species" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">Dog</SelectItem>
                    <SelectItem value="cat">Cat</SelectItem>
                    <SelectItem value="bird">Bird</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="age"
                  className="text-sm font-medium text-gray-700"
                >
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your pet's age"
                  className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="petPicture"
                className="text-sm font-medium text-gray-700 flex items-center"
              >
                <Camera className="mr-2" />
                Pet Picture
              </Label>
              <Input
                id="petPicture"
                type="file"
                accept="image/*"
                onChange={handlePetPictureChange}
                className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
              />
              {petPicture && (
                <div className="mt-2">
                  <img
                    src={petPicture}
                    alt="Pet preview"
                    className="w-32 h-32 object-cover rounded-full border-4 border-pink-300"
                  />
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="allergies"
                className="text-sm font-medium text-gray-700"
              >
                Allergies
              </Label>
              <Textarea
                id="allergies"
                placeholder="Any allergies your pet has?"
                className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="medicalHistory"
                className="text-sm font-medium text-gray-700"
              >
                Medical History
              </Label>
              <Textarea
                id="medicalHistory"
                placeholder="Any previous medical history?"
                className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
          </div>

          <Separator className="bg-purple-200" />

          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center text-purple-700">
              <Stethoscope className="mr-2" />
              Emergency Contact
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="emergencyName"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </Label>
                <Input
                  id="emergencyName"
                  placeholder="Enter emergency contact's name"
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="emergencyContact"
                  className="text-sm font-medium text-gray-700"
                >
                  Contact Number
                </Label>
                <Input
                  id="emergencyContact"
                  type="tel"
                  placeholder="Enter emergency contact's number"
                  className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <Checkbox
              id="consent"
              checked={consentGiven}
              onChange={(e) => setConsentGiven(e.target.checked)}
              className="h-4 w-4 text-purple-500 border-gray-300 rounded focus:ring-purple-500"
            />
            <Label htmlFor="consent" className="ml-2 text-sm text-gray-700">
              I give consent for my pet's information to be processed.
            </Label>
          </div>

          <div className="mt-6">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Submit Appointment
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
