"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Users,
  Clipboard,
  Calendar,
  Scissors,
  FileText,
  Bell,
  DollarSign,
  MessageSquare,
  PieChart,
} from "lucide-react";

export default function PetcareAdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const sidebarItems = [
    { id: "overview", icon: BarChart, label: "Overview" },
    { id: "users", icon: Users, label: "User Management" },
    { id: "pets", icon: Clipboard, label: "Pet Management" },
    { id: "appointments", icon: Calendar, label: "Appointments" },
    { id: "services", icon: Scissors, label: "Services" },
    { id: "content", icon: FileText, label: "Content" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "financial", icon: DollarSign, label: "Financial" },
    { id: "feedback", icon: MessageSquare, label: "Feedback" },
    { id: "analytics", icon: PieChart, label: "Analytics" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-primary">Petcare Admin</h1>
        </div>
        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        <Tabs value={activeTab} className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Pets
                  </CardTitle>
                  <Clipboard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5,678</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Appointments
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Site Activity
                  </CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12.5%</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <h2 className="text-2xl font-bold">User Management</h2>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input placeholder="Search users..." />
                <Button>Search</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Pet Owner</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="pets" className="space-y-4">
            <h2 className="text-2xl font-bold">Pet Management</h2>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input placeholder="Search pets..." />
                <Button>Search</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Breed</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Max</TableCell>
                    <TableCell>Labrador</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2">
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit Records
                      </Button>
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-4">
            <h2 className="text-2xl font-bold">Appointment Scheduling</h2>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input type="date" />
                <Button>View Appointments</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Pet</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>09:00 AM</TableCell>
                    <TableCell>Max</TableCell>
                    <TableCell>Grooming</TableCell>
                    <TableCell>Confirmed</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2">
                        Reschedule
                      </Button>
                      <Button variant="destructive" size="sm">
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <h2 className="text-2xl font-bold">Service Management</h2>
            <div className="space-y-4">
              <Button>Add New Service</Button>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Grooming</TableCell>
                    <TableCell>$50</TableCell>
                    <TableCell>1 hour</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <h2 className="text-2xl font-bold">Content Management</h2>
            <div className="space-y-4">
              <Button>Create New Post</Button>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>10 Tips for Pet Care</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell>2023-06-01</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <h2 className="text-2xl font-bold">Notifications and Alerts</h2>
            <div className="space-y-4">
              <Button>Create New Notification</Button>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Appointment Reminder</TableCell>
                    <TableCell>Your appointment is tomorrow</TableCell>
                    <TableCell>All users with appointments</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="mr-2">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-4">
            <h2 className="text-2xl font-bold">Financial Management</h2>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input type="month" />
                <Button>Generate Report</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-06-01</TableCell>
                    <TableCell>Grooming</TableCell>
                    <TableCell>$50</TableCell>
                    <TableCell>Paid</TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            <h2 className="text-2xl font-bold">Feedback and Support</h2>
            <div className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Question about services</TableCell>
                    <TableCell>2023-06-01</TableCell>
                    <TableCell>Open</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Respond
                      </Button>
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <h2 className="text-2xl font-bold">Reporting and Analytics</h2>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>User Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">78%</div>
                    <p className="text-xs text-muted-foreground">
                      +2.5% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Appointment Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">152</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Grooming</div>
                    <p className="text-xs text-muted-foreground">
                      32% of all appointments
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
