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

export default function Records() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Records</CardTitle>
        <CardDescription>Manage your pets' health information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Vaccinations</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Rabies - June 15, 2023</li>
              <li>Distemper - June 15, 2023</li>
              <li>Bordetella - January 10, 2023</li>
            </ul>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Medications</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Heartworm Prevention - Monthly</li>
              <li>Flea and Tick Prevention - Monthly</li>
            </ul>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Recent Treatments</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Dental Cleaning - May 5, 2023</li>
              <li>Allergy Test - April 12, 2023</li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add Health Record</Button>
      </CardFooter>
    </Card>
  );
}
