"use client";

import React from "react";
import {
  Bell,
  Calendar,
  ChevronDown,
  Dog,
  FileText,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  Settings,
  User,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function PetTraineeDashboard() {
  const [activeSection, setActiveSection] = React.useState("overview");

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Overview", value: "overview" },
    { icon: Bell, label: "Notifications", value: "notifications" },
    { icon: PieChart, label: "Quick Stats", value: "quickstats" },
    { icon: Dog, label: "Progress Tracking", value: "progress" },
    { icon: Calendar, label: "Schedule", value: "schedule" },
    { icon: FileText, label: "Pet Profiles", value: "profiles" },
    { icon: MessageSquare, label: "Communication", value: "communication" },
    { icon: Settings, label: "Settings", value: "settings" },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-muted/40">
        <div className="flex items-center h-16 px-6 border-b">
          <Dog className="w-6 h-6 mr-2" />
          <span className="text-lg font-semibold">Pet Trainer Pro</span>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.value}>
                <Button
                  variant={activeSection === item.value ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection(item.value)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-2xl font-bold">Pet Trainee Dashboard</h1>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </header>

        {/* Content Area */}
        <ScrollArea className="flex-1 p-6">
          {activeSection === "overview" && (
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Active Trainees:</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed Trainings:</span>
                    <span className="font-bold">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Upcoming Sessions:</span>
                    <span className="font-bold">8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Badge variant="secondary">New</Badge>
                      <p className="text-sm">
                        Max has completed basic obedience training!
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Badge variant="secondary">Reminder</Badge>
                      <p className="text-sm">
                        Training session with Bella tomorrow at 2 PM.
                      </p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Badge variant="secondary">Alert</Badge>
                      <p className="text-sm">
                        Charlie missed his last two training sessions.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          )}

          {activeSection === "quickstats" && (
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Overall Progress
                      </span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        Attendance Rate
                      </span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <Progress value={90} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "progress" && (
            <Card>
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Obedience</span>
                      <span className="text-sm font-medium">80%</span>
                    </div>
                    <Progress value={80} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Agility</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Socialization</span>
                      <span className="text-sm font-medium">70%</span>
                    </div>
                    <Progress value={70} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "schedule" && (
            <Card>
              <CardHeader>
                <CardTitle>Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span>Today, 2:00 PM</span>
                    </div>
                    <span className="text-sm font-medium">
                      Obedience Training with Max
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span>Tomorrow, 10:00 AM</span>
                    </div>
                    <span className="text-sm font-medium">
                      Agility Session with Bella
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <span>June 25, 3:30 PM</span>
                    </div>
                    <span className="text-sm font-medium">
                      Socialization Class
                    </span>
                  </div>
                </div>
                <Button className="w-full mt-4">View Full Calendar</Button>
              </CardContent>
            </Card>
          )}

          {activeSection === "profiles" && (
            <Card>
              <CardHeader>
                <CardTitle>Pet Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-4">
                    {["Max", "Bella", "Charlie", "Luna", "Rocky", "Daisy"].map(
                      (pet, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-2 rounded-lg hover:bg-accent"
                        >
                          <Avatar>
                            <AvatarImage
                              src={`/placeholder-pet-${index + 1}.jpg`}
                              alt={pet}
                            />
                            <AvatarFallback>{pet[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h4 className="font-medium">{pet}</h4>
                            <p className="text-sm text-muted-foreground">
                              Golden Retriever, 2 years old
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                        </div>
                      )
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          )}

          {activeSection === "communication" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["John Doe", "Jane Smith", "Mike Johnson"].map(
                      (name, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-2 rounded-lg hover:bg-accent"
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
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Feedback Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full">
                      Submit Training Session Feedback
                    </Button>
                    <Button className="w-full" variant="outline">
                      View Previous Feedback
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === "settings" && (
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
                      <Settings className="h-5 w-5" />
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
          )}
        </ScrollArea>
      </main>
    </div>
  );
}
