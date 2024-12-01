"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { showToast } from "@/lib/utils/toast";

export function NewImageDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    family: "",
    version: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically make an API call to create the image
    console.log("Creating new image:", formData);
    
    showToast.success("New image created successfully!");
    setOpen(false);
    setFormData({ name: "", family: "", version: "", description: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>New Image</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Image</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Image Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter image name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="family">OS Family</Label>
            <Select
              value={formData.family}
              onValueChange={(value) => setFormData({ ...formData, family: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select OS family" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rhel">RHEL</SelectItem>
                <SelectItem value="ubuntu">Ubuntu</SelectItem>
                <SelectItem value="centos">CentOS</SelectItem>
                <SelectItem value="amazon">Amazon Linux</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="version">Version</Label>
            <Input
              id="version"
              value={formData.version}
              onChange={(e) => setFormData({ ...formData, version: e.target.value })}
              placeholder="Enter version (e.g., 8.5)"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter image description"
            />
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Image</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}