import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Profiles() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pet Profiles</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px]">
          <div className="space-y-4">
            {["Max", "Bella", "Charlie", "Luna", "Rocky", "Daisy"].map(
              (pet, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-muted"
                >
                  <Avatar className="h-12 w-12">
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
                    <div className="flex items-center mt-1">
                      <Badge variant="secondary" className="mr-2">
                        Obedience
                      </Badge>
                      <Badge variant="secondary">Agility</Badge>
                    </div>
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
  );
}
