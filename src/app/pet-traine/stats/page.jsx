import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Zap, Award } from "lucide-react";

export default function Stats() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <Progress value={75} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Attendance Rate</span>
                <span className="text-sm font-medium">90%</span>
              </div>
              <Progress value={90} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Client Satisfaction</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <Progress value={85} />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Zap className="h-6 w-6 text-yellow-500" />
              <div>
                <p className="font-medium">100 Training Sessions Completed</p>
                <p className="text-sm text-muted-foreground">
                  Achieved on June 15, 2023
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="h-6 w-6 text-blue-500" />
              <div>
                <p className="font-medium">Top Rated Trainer of the Month</p>
                <p className="text-sm text-muted-foreground">May 2023</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
