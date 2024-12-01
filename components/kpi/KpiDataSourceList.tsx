"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { KpiTemplateDialog } from "./KpiTemplateDialog";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const templates = [
  {
    id: 1,
    name: "AWS EC2 Build Metrics",
    description: "Template for collecting EC2 instance build metrics",
    type: "AWS",
    lastUpdated: "2024-03-20",
  },
  {
    id: 2,
    name: "Image Build Status",
    description: "Template for tracking image build status and duration",
    type: "Build",
    lastUpdated: "2024-03-19",
  },
  {
    id: 3,
    name: "Resource Utilization",
    description: "Template for monitoring resource usage during builds",
    type: "System",
    lastUpdated: "2024-03-18",
  },
];

export function KpiDataSourceList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-sm">
          <Input
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <KpiTemplateDialog />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTemplates.map((template, index) => (
              <motion.tr
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <TableCell className="font-medium">{template.name}</TableCell>
                <TableCell>{template.description}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{template.type}</Badge>
                </TableCell>
                <TableCell>{template.lastUpdated}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Use</Button>
                  </div>
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}