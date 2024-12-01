"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockScheduledJobs = [
  {
    id: "1",
    imageName: "RHEL-8.5-Base",
    scheduledDate: "2024-03-25",
    status: "pending",
    type: "build",
  },
  {
    id: "2",
    imageName: "Ubuntu-22.04-LTS",
    scheduledDate: "2024-03-26",
    status: "scheduled",
    type: "provision",
  },
];

export function JobScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Schedule New Job</h3>
        <div className="space-y-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <Button className="w-full">Schedule Job</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Scheduled Jobs</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockScheduledJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job.imageName}</TableCell>
                <TableCell>{job.scheduledDate}</TableCell>
                <TableCell>
                  <Badge variant="outline">{job.type}</Badge>
                </TableCell>
                <TableCell>
                  <Badge>{job.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}