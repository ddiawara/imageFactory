"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { showToast } from "@/lib/utils/toast";

export function KpiTemplateDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    schema: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating new template:", formData);
    showToast.success("Template created successfully!");
    setOpen(false);
    setFormData({ name: "", description: "", type: "", schema: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>New Template</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create Data Source Template</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Template Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter template name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="build">Build</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter template description"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="schema">Data Schema (JSON)</Label>
            <Textarea
              id="schema"
              value={formData.schema}
              onChange={(e) => setFormData({ ...formData, schema: e.target.value })}
              placeholder='{
  "metrics": {
    "buildTime": "number",
    "successRate": "percentage",
    "resourceUsage": "object"
  }
}'
              className="font-mono h-[200px]"
              required
            />
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Template</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}