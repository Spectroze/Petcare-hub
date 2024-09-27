import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { User, Settings as SettingsIcon, Calendar, Dog } from "lucide-react";

export default function Setting() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full flex items-center justify-center space-x-2">
              <User className="h-5 w-5" />
              <span>Edit Profile</span>
            </Button>
            <Button
              className="w-full flex items-center justify-center space-x-2"
              variant="outline"
            >
              <SettingsIcon className="h-5 w-5" />
              <span>Notification Preferences</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Integrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Sync External Calendar</span>
            </Button>
            <Button
              className="w-full flex items-center justify-center space-x-2"
              variant="outline"
            >
              <Dog className="h-5 w-5" />
              <span>Connect Pet Tracking Device</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
