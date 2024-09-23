import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./UIComponents";

export default function overview() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Overview</CardTitle>
          <CardDescription>
            Get a quick overview of your pet's care status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Upcoming Appointments</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Veterinary Check-up - July 15, 2023</li>
                <li>Grooming Session - July 22, 2023</li>
                <li>Training Class - July 29, 2023</li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Recent Notifications</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Upcoming Vet Appointment - Tomorrow</li>
                <li>Medication Reminder - Today</li>
                <li>Vaccination Due - In 2 weeks</li>
              </ul>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Care Plans</h3>
              <p className="text-sm text-muted-foreground">
                Basic, Premium, and Custom Care Plans available
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
