"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  PawPrint,
  User,
  Camera,
  Stethoscope,
  PhoneCall,
  FileText,
} from "lucide-react";

export default function Appointment() {
  const [consentGiven, setConsentGiven] = useState(false);
  const [ownerPicture, setOwnerPicture] = useState(null);
  const [petPicture, setPetPicture] = useState(null);

  const handleOwnerPictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setOwnerPicture(URL.createObjectURL(file));
    }
  };

  const handlePetPictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPetPicture(URL.createObjectURL(file));
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
        </div>

        <Separator className="bg-purple-200" />

        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center text-purple-700">
            <Stethoscope className="mr-2" />
            Services Required
          </h3>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Select required services
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="petSitting"
                  className="text-purple-500 focus:ring-purple-500"
                />
                <Label htmlFor="petSitting" className="text-sm text-gray-700">
                  Pet Sitting
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="grooming"
                  className="text-purple-500 focus:ring-purple-500"
                />
                <Label htmlFor="grooming" className="text-sm text-gray-700">
                  Grooming
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="veterinaryServices"
                  className="text-purple-500 focus:ring-purple-500"
                />
                <Label
                  htmlFor="veterinaryServices"
                  className="text-sm text-gray-700"
                >
                  Veterinary Services
                </Label>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-purple-200" />

        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center text-pink-700">
            <FileText className="mr-2" />
            Health Information
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="allergies"
                className="text-sm font-medium text-gray-700"
              >
                Known Allergies
              </Label>
              <Input
                id="allergies"
                placeholder="Enter any known allergies"
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
                placeholder="Enter relevant medical history"
                className="border-pink-200 focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
          </div>
        </div>

        <Separator className="bg-purple-200" />

        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center text-purple-700">
            <PhoneCall className="mr-2" />
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
                placeholder="Enter emergency contact name"
                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
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
                placeholder="Enter emergency contact number"
                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>

        <Separator className="bg-purple-200" />

        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center text-purple-700">
            <FileText className="mr-2" />
            Consent to Treatment
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="consent"
                onCheckedChange={(checked) => setConsentGiven(checked)}
                className="text-purple-500 focus:ring-purple-500"
              />
              <Label htmlFor="consent" className="text-sm text-gray-700">
                I hereby authorize the veterinarian to examine and treat my pet.
                I understand that I am financially responsible for all charges
                related to the treatment.
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-lg">
        <Button
          className="w-full bg-white text-purple-700 hover:bg-purple-100 transition-colors duration-200"
          disabled={!consentGiven}
        >
          Submit Form
        </Button>
      </CardFooter>
    </Card>
  );
}
