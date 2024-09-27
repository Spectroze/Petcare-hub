"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { FaStar } from "react-icons/fa";

export default function Feedback() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback and Reviews</CardTitle>
        <CardDescription>
          Share your experiences and read others' reviews
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Your Recent Reviews</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaStar className="h-5 w-5 text-yellow-400" />
                <FaStar className="h-5 w-5 text-yellow-400" />
                <FaStar className="h-5 w-5 text-yellow-400" />
                <FaStar className="h-5 w-5 text-yellow-400" />
                <FaStar className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">
                  Happy Paws Veterinary Clinic
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Great service and caring staff. Highly recommended!
              </p>
            </div>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Pending Reviews</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Fluffy's Grooming Salon
                </span>
                <Button variant="outline" size="sm">
                  Leave Review
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Paw Perfect Training Center
                </span>
                <Button variant="outline" size="sm">
                  Leave Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
