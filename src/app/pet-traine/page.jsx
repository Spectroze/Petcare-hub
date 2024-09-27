"use client";

import React, { useState, useEffect } from "react";
import {
  Bell,
  Calendar,
  Dog,
  FileText,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  Settings,
  Menu,
  X,
  Users,
  Award,
  BarChart2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Import additional components
import Notifications from "../pet-traine/notification/page";
import Stats from "../pet-traine/stats/page";
import Schedule from "../pet-traine/schedule/page";
import Profiles from "../pet-traine/profile/page";
import Communication from "../pet-traine/communication/page";
import Setting from "../pet-traine/setting/page";

// Mock data for the chart
const chartData = [
  { name: "Jan", obedience: 65, agility: 40, socialization: 55 },
  { name: "Feb", obedience: 70, agility: 45, socialization: 60 },
  { name: "Mar", obedience: 75, agility: 50, socialization: 65 },
  { name: "Apr", obedience: 80, agility: 60, socialization: 70 },
  { name: "May", obedience: 85, agility: 65, socialization: 75 },
  { name: "Jun", obedience: 90, agility: 70, socialization: 80 },
];

const PetTraining = ({ session }) => {
  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      window.location.href = "/";
      toast.success("Successfully signed out.");
    } catch (error) {
      console.error("Failed to sign out:", error);
      toast.error("Failed to sign out. Please try again.");
    }
  };

  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "New",
      message: "Max has completed basic obedience training!",
    },
    {
      id: 2,
      type: "Reminder",
      message: "Training session with Bella tomorrow at 2 PM.",
    },
    {
      id: 3,
      type: "Alert",
      message: "Charlie missed his last two training sessions.",
    },
  ]);

  const nav = [
    { icon: LayoutDashboard, title: "Overview", id: "overview" },
    { icon: Bell, title: "Notifications", id: "notification" },
    { icon: PieChart, title: "Stats", id: "stats" },
    { icon: Calendar, title: "Schedule", id: "schedule" },
    { icon: FileText, title: "Profiles", id: "profile" },
    { icon: MessageSquare, title: "Communication", id: "communication" },
    { icon: Settings, title: "Settings", id: "setting" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredNavItems = nav.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSidebarContent = () => (
    <>
      <div className="flex items-center h-16 px-6 border-b">
        <Dog className="w-6 h-6 mr-2" />
        <span className="text-lg font-semibold">Pet Trainer Pro</span>
      </div>
      <div className="p-4">
        <Input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4"
        />
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {filteredNavItems.map((item) => (
            <li key={item.id}>
              <Button
                variant={activeSection === item.id ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar for desktop */}
      <aside
        className={`hidden md:block w-64 border-r bg-muted/40 ${
          sidebarOpen ? "" : "hidden"
        }`}
      >
        {renderSidebarContent()}
      </aside>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-background md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-end p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        {renderSidebarContent()}
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">Pet Trainee Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className="flex items-start p-3"
                    onClick={() => setActiveSection("notification")}
                  >
                    <Badge variant="secondary" className="mt-0.5 mr-2">
                      {notification.type}
                    </Badge>
                    <span className="text-sm">{notification.message}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setActiveSection("profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main content based on active section */}
        <div className="flex-1 overflow-auto p-4">
          {activeSection === "overview" && (
            <Card>
              <CardHeader>
                <CardTitle>Training Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="obedience"
                      stroke="#8884d8"
                    />
                    <Line type="monotone" dataKey="agility" stroke="#82ca9d" />
                    <Line
                      type="monotone"
                      dataKey="socialization"
                      stroke="#ffc658"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}
          {activeSection === "notification" && <Notifications />}
          {activeSection === "stats" && <Stats />}
          {activeSection === "schedule" && <Schedule />}
          {activeSection === "profile" && <Profiles />}
          {activeSection === "communication" && <Communication />}
          {activeSection === "setting" && <Setting />}
        </div>
      </main>
    </div>
  );
};

export default PetTraining;
