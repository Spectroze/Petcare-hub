"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

import { CalendarIcon } from "react-icons";
export default function Appointment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appointments</CardTitle>
        <CardDescription>
          Schedule and manage your pet care appointments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
            <div>
              <h3 className="font-semibold">Veterinary Check-up</h3>
              <p className="text-sm text-muted-foreground">
                July 15, 2023 at 2:00 PM
              </p>
            </div>
            <Button variant="outline">Reschedule</Button>
          </div>
          <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
            <div>
              <h3 className="font-semibold">Grooming Session</h3>
              <p className="text-sm text-muted-foreground">
                July 22, 2023 at 10:00 AM
              </p>
            </div>
            <Button variant="outline">Reschedule</Button>
          </div>
          <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
            <div>
              <h3 className="font-semibold">Training Class</h3>
              <p className="text-sm text-muted-foreground">
                July 29, 2023 at 3:00 PM
              </p>
            </div>
            <Button variant="outline">Reschedule</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book New Appointment</Button>
      </CardFooter>
    </Card>
  );
}
