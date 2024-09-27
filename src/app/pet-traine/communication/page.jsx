import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Communication() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {["John Doe", "Jane Smith", "Mike Johnson"].map((name, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg bg-muted"
              >
                <Avatar>
                  <AvatarImage
                    src={`/placeholder-user-${index + 1}.jpg`}
                    alt={name}
                  />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-medium">{name}</h4>
                  <p className="text-sm text-muted-foreground">
                    Last message: 2 hours ago
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Feedback Forms</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full">Submit Training Session Feedback</Button>
            <Button className="w-full" variant="outline">
              View Previous Feedback
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
