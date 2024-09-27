"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell as NotificationIcon,
  Calendar as CalendarIcon,
  FileText as HealthIcon,
  Star as FeedbackIcon,
  Clipboard as CarePlanIcon,
  Settings as SettingsIcon,
  ChevronLeft,
  ChevronRight,
  Home,
  User,
  DollarSign,
  MessageSquare,
  Star,
  PlusCircle,
  Pencil,
  Trash2,
  Save,
  Menu,
} from "lucide-react";
import Profile from "../user-dashboard/profile/page";
import Records from "../user-dashboard/records/page";
import Notification from "../user-dashboard/notification/page";
import Feedback from "../user-dashboard/feedback/page";
import Setting from "../user-dashboard/setting/page";
import Message from "../user-dashboard/message/page";
import Billing from "../user-dashboard/billing/page";
import AppointmentManager from "../user-dashboard/appointment/page";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "react-hot-toast";

const PetCareDashboard = ({ session }) => {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2023-06-15", time: "10:00", reason: "Annual checkup" },
    { id: 2, date: "2023-06-20", time: "14:30", reason: "Vaccination" },
  ]);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [newAppointment, setNewAppointment] = useState({
    date: "",
    time: "",
    reason: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const nav = [
    { icon: Home, title: "Overview", id: "overview" },
    { icon: User, title: "Profile", id: "profile" },
    { icon: CalendarIcon, title: "Appointments", id: "appointment" },
    { icon: HealthIcon, title: "Records", id: "records" },
    { icon: NotificationIcon, title: "Notification", id: "notification" },
    { icon: FeedbackIcon, title: "Feedback", id: "feedback" },
    { icon: SettingsIcon, title: "Setting", id: "setting" },
    { icon: MessageSquare, title: "Message", id: "message" },
    { icon: DollarSign, title: "Billing", id: "billing" },
  ];

  const handleAppointmentRedirect = () => {
    setActiveSection("appointment");
  };

  const handleEditAppointment = (appointment) => {
    setEditingAppointment({ ...appointment });
  };

  const handleSaveAppointment = () => {
    if (editingAppointment) {
      setAppointments(
        appointments.map((app) =>
          app.id === editingAppointment.id ? editingAppointment : app
        )
      );
      setEditingAppointment(null);
      toast({
        title: "Appointment Updated",
        description: "Your appointment has been successfully updated.",
      });
    } else {
      const newId = Math.max(...appointments.map((app) => app.id), 0) + 1;
      setAppointments([...appointments, { ...newAppointment, id: newId }]);
      setNewAppointment({ date: "", time: "", reason: "" });
      setIsDialogOpen(false);
      toast({
        title: "Appointment Scheduled",
        description: "Your new appointment has been successfully scheduled.",
      });
    }
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(appointments.filter((app) => app.id !== id));
    toast({
      title: "Appointment Deleted",
      description: "Your appointment has been successfully deleted.",
      variant: "destructive",
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-teal-700 text-white ${
          sidebarOpen ? "w-64" : "w-20"
        } min-h-screen p-4 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* User Profile */}
          <div className="flex flex-col items-center space-y-2 mb-6">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src="/placeholder.svg?height=80&width=80"
                alt="User"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {sidebarOpen && (
              <div className="text-center">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-teal-200">Pet Parent</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            {nav.map(({ icon: Icon, title, id }) => (
              <Button
                key={id}
                variant={activeSection === id ? "secondary" : "ghost"}
                className={`w-full justify-start ${!sidebarOpen && "px-2"} ${
                  activeSection === id ? "bg-teal-600" : "hover:bg-teal-600"
                }`}
                onClick={() => setActiveSection(id)}
              >
                <Icon className={`h-5 w-5 ${sidebarOpen && "mr-2"}`} />
                {sidebarOpen && <span>{title}</span>}
              </Button>
            ))}
          </nav>

          {/* Sidebar Toggle */}
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="bg-teal-600 text-white hover:bg-teal-500"
            >
              {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {/* Toggle Button for Mobile */}
        <Button
          variant="outline"
          className="lg:hidden mb-4 bg-teal-500 text-white hover:bg-teal-600"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-4 w-4" />
        </Button>

        {/* Render content based on activeSection */}
        {activeSection === "overview" && (
          <div className="space-y-4">
            <Card className="bg-white shadow-md">
              <CardHeader className="bg-teal-600 text-white">
                <CardTitle>Overview</CardTitle>
                <CardDescription className="text-teal-100">
                  Quick snapshot of your pet care information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="bg-emerald-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-emerald-800">
                        Upcoming Appointments
                      </CardTitle>
                      <CalendarIcon className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-emerald-700">
                        {appointments.length}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-cyan-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-cyan-800">
                        Active Care Plans
                      </CardTitle>
                      <CarePlanIcon className="h-4 w-4 text-cyan-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-cyan-700">2</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-amber-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-amber-800">
                        Unread Messages
                      </CardTitle>
                      <MessageSquare className="h-4 w-4 text-amber-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-amber-700">5</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-fuchsia-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-fuchsia-800">
                        Pending Reviews
                      </CardTitle>
                      <Star className="h-4 w-4 text-fuchsia-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-fuchsia-700">
                        1
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="md:col-span-2 lg:col-span-4 bg-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-teal-600">
                        My Appointments
                      </CardTitle>
                      <PlusCircle className="h-4 w-4 text-teal-600" />
                    </CardHeader>
                    <CardContent>
                      <Button
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                        onClick={handleAppointmentRedirect}
                      >
                        Manage Appointments
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        {activeSection === "profile" && <Profile />}
        {activeSection === "appointment" && <AppointmentManager />}
        {activeSection === "records" && <Records />}
        {activeSection === "notification" && <Notification />}
        {activeSection === "feedback" && <Feedback />}
        {activeSection === "setting" && <Setting />}
        {activeSection === "message" && <Message />}
        {activeSection === "billing" && <Billing />}
      </main>
    </div>
  );
};

export default PetCareDashboard;
