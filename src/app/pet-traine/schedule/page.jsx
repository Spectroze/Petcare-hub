import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function Schedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {["Today", "Tomorrow", "June 25"].map((day, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold">{day}</h3>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span>
                      {index === 0
                        ? "2:00 PM"
                        : index === 1
                        ? "10:00 AM"
                        : "3:30 PM"}
                    </span>
                  </div>
                  <span className="text-sm font-medium">
                    {index === 0
                      ? "Obedience Training with Max"
                      : index === 1
                      ? "Agility Session with Bella"
                      : "Socialization Class"}
                  </span>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4">View Full Calendar</Button>
      </CardContent>
    </Card>
  );
}
