"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  osFamily: z.string(),
  version: z.string(),
  name: z.string(),
  description: z.string(),
  enableHardening: z.boolean(),
  includeMonitoring: z.boolean(),
  customScripts: z.boolean(),
});

export function ImageBuilder() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      enableHardening: false,
      includeMonitoring: false,
      customScripts: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Build New Image</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="osFamily"
            render={({ field }) => (
              <FormItem>
                <FormLabel>OS Family</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select OS Family" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="rhel">RHEL</SelectItem>
                    <SelectItem value="ubuntu">Ubuntu</SelectItem>
                    <SelectItem value="centos">CentOS</SelectItem>
                    <SelectItem value="amazon">Amazon Linux</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="version"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Version</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 8.5" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter image name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter description" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <FormField
              control={form.control}
              name="enableHardening"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Enable Security Hardening</FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="includeMonitoring"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Include Monitoring Tools</FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customScripts"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Add Custom Scripts</FormLabel>
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            Build Image
          </Button>
        </form>
      </Form>
    </div>
  );
}