"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Mail,
  Send,
  Paperclip,
  Trash,
  Star,
  Search,
  Archive,
  Bookmark,
  X,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
const mockMessages = [
  {
    id: 1,
    from: "Admin",
    role: "admin",
    subject: "Welcome to Pet Care",
    content:
      "Welcome to our pet care service! We're here to help you with all your pet needs.",
    date: "2023-06-01",
    isRead: false,
    isBookmarked: false,
  },
  {
    id: 2,
    from: "John Doe",
    role: "pet-owner",
    subject: "Question about vaccination",
    content:
      "Hi, I have a question about my dog's vaccination schedule. Can you help?",
    date: "2023-05-28",
    isRead: true,
    isBookmarked: false,
  },
  {
    id: 3,
    from: "Admin",
    role: "admin",
    subject: "Vaccination Information",
    content:
      "Here's the information about our vaccination schedules and procedures...",
    date: "2023-05-25",
    isRead: true,
    isBookmarked: false,
  },
  {
    id: 4,
    from: "Jane Smith",
    role: "pet-owner",
    subject: "Appointment Request",
    content:
      "I'd like to schedule an appointment for my cat's annual check-up.",
    date: "2023-06-02",
    isRead: false,
    isBookmarked: false,
  },
  {
    id: 5,
    from: "Admin",
    role: "admin",
    subject: "Appointment Confirmation",
    content: "Your appointment has been scheduled for June 10th at 2:00 PM.",
    date: "2023-05-30",
    isRead: true,
    isBookmarked: false,
  },
];

const mockNotifications = [
  {
    id: 1,
    content: "New message from Admin about welcome information",
    date: "2023-06-01",
    relatedMessageId: 1,
  },
  {
    id: 2,
    content: "Reminder: Pet vaccination information available",
    date: "2023-05-30",
    relatedMessageId: 3,
  },
  {
    id: 3,
    content: "Your appointment request has been processed",
    date: "2023-06-04",
    relatedMessageId: 5,
  },
  {
    id: 4,
    content: "New message from Admin about appointment confirmation",
    date: "2023-05-30",
    relatedMessageId: 5,
  },
];

export default function Message() {
  const [messages, setMessages] = useState(mockMessages);
  const [archivedMessages, setArchivedMessages] = useState([]);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [userRole, setUserRole] = useState("pet-owner");
  const [activeTab, setActiveTab] = useState("inbox");
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleArchiveMessage = (id) => {
    const messageToArchive = messages.find((message) => message.id === id);
    if (messageToArchive) {
      setArchivedMessages([...archivedMessages, messageToArchive]);
      setMessages(messages.filter((message) => message.id !== id));
      setSelectedMessage(null);
    }
  };

  const handleUnarchiveMessage = (id) => {
    const messageToUnarchive = archivedMessages.find(
      (message) => message.id === id
    );
    if (messageToUnarchive) {
      setMessages([...messages, messageToUnarchive]);
      setArchivedMessages(
        archivedMessages.filter((message) => message.id !== id)
      );
      setSelectedMessage(null);
    }
  };

  const handleBookmarkMessage = (id) => {
    const updatedMessages = messages.map((message) =>
      message.id === id
        ? { ...message, isBookmarked: !message.isBookmarked }
        : message
    );
    setMessages(updatedMessages);
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage({
        ...selectedMessage,
        isBookmarked: !selectedMessage.isBookmarked,
      });
    }
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    console.log("Message sent");
  };

  const filteredMessages = (
    activeTab === "inbox" ? messages : archivedMessages
  ).filter(
    (message) =>
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.from.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  return (
    <Card className="w-full max-w-6xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl">
      <CardHeader className="bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200">
        <CardTitle className="text-3xl font-bold text-blue-800">
          Pet Care Message Center
        </CardTitle>
        <CardDescription className="text-lg text-blue-600">
          Manage your pet care communications efficiently
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="inbox" className="text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Inbox
            </TabsTrigger>
            <TabsTrigger value="archived" className="text-lg">
              <Archive className="w-5 h-5 mr-2" />
              Archived
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-lg">
              <Bell className="w-5 h-5 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="compose" className="text-lg">
              <Send className="w-5 h-5 mr-2" />
              Compose
            </TabsTrigger>
          </TabsList>
          <TabsContent value="inbox">
            <MessageList
              messages={filteredMessages}
              selectedMessage={selectedMessage}
              setSelectedMessage={setSelectedMessage}
              handleArchiveMessage={handleArchiveMessage}
              handleBookmarkMessage={handleBookmarkMessage}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              isArchived={false}
            />
          </TabsContent>
          <TabsContent value="archived">
            <MessageList
              messages={filteredMessages}
              selectedMessage={selectedMessage}
              setSelectedMessage={setSelectedMessage}
              handleArchiveMessage={handleUnarchiveMessage}
              handleBookmarkMessage={handleBookmarkMessage}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              isArchived={true}
            />
          </TabsContent>
          <TabsContent value="notifications">
            <Card>
              <CardContent className="p-6">
                <ScrollArea className="h-[600px] pr-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Bell className="h-6 w-6 text-blue-500" />
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-800">{notification.content}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {notification.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="compose">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSendMessage} className="space-y-6">
                  <div>
                    <label
                      htmlFor="recipients"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      To:
                    </label>
                    <Select>
                      <SelectTrigger id="recipients">
                        <SelectValue placeholder="Select recipient" />
                      </SelectTrigger>
                      <SelectContent>
                        {userRole === "admin" ? (
                          <SelectItem value="pet-owner">Pet Owner</SelectItem>
                        ) : (
                          <SelectItem value="admin">Admin</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject:
                    </label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message:
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here"
                      rows={8}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <Button variant="outline">
                      <Paperclip className="h-4 w-4 mr-2" />
                      Attach File
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
      <NotificationModal
        notification={selectedNotification}
        onClose={() => setSelectedNotification(null)}
      />
    </Card>
  );
}

function MessageList({
  messages,
  selectedMessage,
  setSelectedMessage,
  handleArchiveMessage,
  handleBookmarkMessage,
  searchTerm,
  setSearchTerm,
  isArchived,
}) {
  return (
    <div className="grid grid-cols-5 gap-6">
      <div className="col-span-2 bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            icon={<Search className="w-4 h-4 text-gray-500" />}
          />
        </div>
        <ScrollArea className="h-[600px] pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-3 mb-2 cursor-pointer rounded-md transition-colors duration-200 ${
                message.isRead
                  ? "bg-gray-100 hover:bg-gray-200"
                  : "bg-blue-100 hover:bg-blue-200"
              } ${
                selectedMessage?.id === message.id
                  ? "border-l-4 border-blue-500"
                  : ""
              }`}
              onClick={() => setSelectedMessage(message)}
            >
              <div className="font-bold text-blue-800">{message.from}</div>
              <div className="text-sm text-gray-600 truncate">
                {message.subject}
              </div>
              <div className="text-xs text-gray-500 mt-1">{message.date}</div>
              {message.isBookmarked && (
                <Bookmark className="h-4 w-4 text-yellow-500 inline-block ml-2" />
              )}
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="col-span-3 bg-white rounded-lg shadow-md p-6">
        {selectedMessage ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-800">
                {selectedMessage.subject}
              </h3>
              <div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleBookmarkMessage(selectedMessage.id)}
                  className="mr-2"
                >
                  <Bookmark
                    className={`h-4 w-4 ${
                      selectedMessage.isBookmarked
                        ? "text-yellow-500"
                        : "text-gray-500"
                    }`}
                  />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleArchiveMessage(selectedMessage.id)}
                >
                  {isArchived ? (
                    <Mail className="h-4 w-4 text-blue-500" />
                  ) : (
                    <Archive className="h-4 w-4 text-red-500" />
                  )}
                </Button>
              </div>
            </div>
            <p className="text-sm mb-2 text-gray-600">
              From:{" "}
              <span className="font-semibold">{selectedMessage.from}</span> (
              {selectedMessage.role})
            </p>
            <p className="text-sm mb-4 text-gray-600">
              Date:{" "}
              <span className="font-semibold">{selectedMessage.date}</span>
            </p>
            <ScrollArea className="h-[400px] pr-4">
              <p className="text-gray-800 leading-relaxed">
                {selectedMessage.content}
              </p>
            </ScrollArea>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <Mail className="w-16 h-16 mr-4 text-blue-300" />
            <p className="text-xl">Select a message to view</p>
          </div>
        )}
      </div>
    </div>
  );
}

function NotificationModal({ notification, onClose }) {
  if (!notification) return null;

  return (
    <Dialog open={!!notification} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notification</DialogTitle>
          <DialogDescription>
            <p className="text-sm text-gray-500">{notification.date}</p>
          </DialogDescription>
        </DialogHeader>
        <p>{notification.content}</p>
      </DialogContent>
    </Dialog>
  );
}
