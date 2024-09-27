"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-hot-toast";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AppointmentManager() {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    date: "",
    time: "",
    reason: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch appointments from the database
  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/appointment`);
        if (!response.ok) throw new Error("Failed to fetch appointments");
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []); // Fetch appointments on component mount

  // Save new appointment to the database
  const handleSaveAppointment = async (appointment) => {
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      });
      if (!response.ok) throw new Error("Failed to save appointment");
      const newAppointment = await response.json();
      setAppointments((prev) => [...prev, newAppointment]); // Add new appointment to the list
      toast.success("Appointment scheduled successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Delete an appointment from the database
  const handleDeleteAppointment = async (id) => {
    try {
      const response = await fetch(`/api/appointment/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete appointment");
      setAppointments((prev) => prev.filter((a) => a._id !== id)); // Assuming _id is the identifier
      toast.success("Appointment deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !newAppointment.date ||
      !newAppointment.time ||
      !newAppointment.reason
    ) {
      toast.error("All fields are required.");
      return;
    }
    await handleSaveAppointment(newAppointment);
    setNewAppointment({ date: "", time: "", reason: "" }); // Reset form
  };

  return (
    <div className="space-y-4">
      <Card className="bg-white shadow-md">
        <CardHeader className="bg-teal-600 text-white">
          <CardTitle>My Appointments</CardTitle>
          <CardDescription className="text-teal-100">
            Manage your upcoming appointments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={newAppointment.date}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      date: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">
                  Time
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={newAppointment.time}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      time: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="reason" className="text-right">
                  Reason
                </Label>
                <Input
                  id="reason"
                  value={newAppointment.reason}
                  onChange={(e) =>
                    setNewAppointment({
                      ...newAppointment,
                      reason: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <Button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              Schedule Appointment
            </Button>
          </form>

          {/* Render Appointments List */}
          <ul className="mt-4">
            {appointments.map((appointment) => (
              <li
                key={appointment._id} // Use _id as the identifier
                className="flex justify-between items-center border-b py-2"
              >
                <span>{`${appointment.date} ${appointment.time} - ${appointment.reason}`}</span>
                <Button
                  onClick={() => handleDeleteAppointment(appointment._id)} // Ensure you're using the same identifier here
                  className="text-red-600"
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
