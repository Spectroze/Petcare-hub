"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { FiBell as Bell } from "react-icons/fi";

export default function Notification() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your alerts and reminders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Upcoming Vet Appointment</h3>
                <p className="text-sm text-muted-foreground">
                  Tomorrow at 2:00 PM
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Dismiss
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Medication Reminder</h3>
                <p className="text-sm text-muted-foreground">
                  Give heartworm prevention pill today
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Dismiss
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Vaccination Due</h3>
                <p className="text-sm text-muted-foreground">
                  Bordetella vaccination due in 2 weeks
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Dismiss
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
