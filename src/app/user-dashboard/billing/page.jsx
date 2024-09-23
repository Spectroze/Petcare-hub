"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PawPrint, DollarSign } from "lucide-react";

const petServices = [
  { id: "grooming", name: "Pet Grooming", price: 1000 },
  { id: "sitting", name: "Pet Sitting", price: 500, perDay: true },
  { id: "veterinary", name: "Pet Veterinary Care", price: 1500 },
  { id: "training", name: "Pet Training", price: 1000 },
];

export default function Component() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("gcash");
  const [sittingDays, setSittingDays] = useState(1);

  const totalCost = selectedServices.reduce((total, serviceId) => {
    const service = petServices.find((s) => s.id === serviceId);
    if (service) {
      return (
        total + (service.perDay ? service.price * sittingDays : service.price)
      );
    }
    return total;
  }, 0);

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = () => {
    console.log("Payment submitted:", {
      selectedServices,
      paymentMethod,
      totalCost,
    });
    // Here you would typically send this data to your backend
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <PawPrint className="h-6 w-6" />
          Petcare Billing System
        </CardTitle>
        <CardDescription>
          Select services and payment method for your pet care needs.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Available Services</h3>
          {petServices.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={() => handleServiceToggle(service.id)}
              />
              <Label htmlFor={service.id} className="flex-1">
                {service.name}
              </Label>
              <span className="text-muted-foreground">
                ₱{service.price}
                {service.perDay ? " per day" : ""}
              </span>
            </div>
          ))}
        </div>
        {selectedServices.includes("sitting") && (
          <div className="space-y-2">
            <Label htmlFor="sitting-days">Number of days for Pet Sitting</Label>
            <input
              id="sitting-days"
              type="number"
              min="1"
              value={sittingDays}
              onChange={(e) =>
                setSittingDays(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-full p-2 border rounded"
            />
          </div>
        )}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Payment Method</h3>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gcash" id="gcash" />
              <Label htmlFor="gcash">GCash</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash">Cash</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="text-xl font-semibold flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Total Cost: ₱{totalCost}
        </div>
        <Button onClick={handleSubmit} className="w-full">
          Submit Payment
        </Button>
      </CardFooter>
    </Card>
  );
}
