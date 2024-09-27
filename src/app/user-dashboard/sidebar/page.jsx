import React from "react";
import Sidebar from "./Sidebar"; // Adjust import accordingly
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("overview"); // You can set a default section if needed

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>{/* Overview content here */}</CardContent>
          </Card>
        );
      case "appointments":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Appointments</CardTitle>
            </CardHeader>
            <CardContent>{/* Appointments content here */}</CardContent>
          </Card>
        );
      case "profile":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>{/* Profile content here */}</CardContent>
          </Card>
        );
      case "health":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Health Records</CardTitle>
            </CardHeader>
            <CardContent>{/* Health Records content here */}</CardContent>
          </Card>
        );
      case "care-plans":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Care Plans</CardTitle>
            </CardHeader>
            <CardContent>{/* Care Plans content here */}</CardContent>
          </Card>
        );
      case "settings":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>{/* Settings content here */}</CardContent>
          </Card>
        );
      default:
        return <div>Select a section to view content.</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 bg-white border-b">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-bold">Petcare Dashboard</h1>
          </div>
          <Button>Add New Pet</Button>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          {renderContent()}

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Message Center</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Dr. Smith (Vet)</span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Grooming Salon</span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Pet Sitter</span>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">New Message</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Premium Plan</span>
                    <span className="text-sm text-muted-foreground">
                      $19.99/month
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Next billing date
                    </span>
                    <span className="text-sm text-muted-foreground">
                      August 1, 2023
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Manage Subscription</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" /> Pet Insurance
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" /> Community Forum
                  </Button>
                  <Button variant="outline" className="w-full">
                    <DollarSign className="mr-2 h-4 w-4" /> Donate
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Settings className="mr-2 h-4 w-4" /> Help Center
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
