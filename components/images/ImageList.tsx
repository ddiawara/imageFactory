"use client";

import { useState } from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { NewImageDialog } from "./NewImageDialog";

const mockImages = [
  {
    id: "1",
    name: "RHEL-8.5-Base",
    family: "RHEL",
    version: "8.5",
    status: "available",
    lastBuild: "2024-03-20",
  },
  {
    id: "2",
    name: "Ubuntu-22.04-LTS",
    family: "Ubuntu",
    version: "22.04",
    status: "building",
    lastBuild: "2024-03-19",
  },
  // Add more mock data as needed
];

export function ImageList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [osFilter, setOsFilter] = useState("all");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Input
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[300px]"
          />
          <Select value={osFilter} onValueChange={setOsFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by OS" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All OS</SelectItem>
              <SelectItem value="rhel">RHEL</SelectItem>
              <SelectItem value="ubuntu">Ubuntu</SelectItem>
              <SelectItem value="centos">CentOS</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <NewImageDialog />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Family</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Build</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockImages.map((image) => (
            <TableRow key={image.id}>
              <TableCell>{image.name}</TableCell>
              <TableCell>{image.family}</TableCell>
              <TableCell>{image.version}</TableCell>
              <TableCell>
                <Badge
                  variant={image.status === "available" ? "default" : "secondary"}
                >
                  {image.status}
                </Badge>
              </TableCell>
              <TableCell>{image.lastBuild}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Build</Button>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}