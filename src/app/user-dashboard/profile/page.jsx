"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Pet Street, Pet City, PC 12345",
  });

  const handleEdit = () => setIsEditing((prev) => !prev);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Update your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isEditing ? (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <label className="block mb-2 text-sm font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <label className="block mb-2 text-sm font-medium">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Name</h3>
                <p className="text-sm text-muted-foreground">{profile.name}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">{profile.email}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">{profile.phone}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">
                  {profile.address}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {isEditing ? (
          <Button className="w-full" onClick={handleSave}>
            Save Changes
          </Button>
        ) : (
          <Button className="w-full" onClick={handleEdit}>
            Edit Profile
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
