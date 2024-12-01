"use client";

import { Card } from "@/components/ui/card";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { ImageList } from "@/components/images/ImageList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageBuilder } from "@/components/builder/ImageBuilder";
import { JobScheduler } from "@/components/scheduler/JobScheduler";
import { ChatbotSupport } from "@/components/support/ChatbotSupport";
import { Header } from "@/components/layout/Header";
import { KpiDashboard } from "@/components/kpi/KpiDashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <div className="space-y-8">
          <Tabs defaultValue="dashboard" className="space-y-6">
            <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
              <TabsList className="grid w-full grid-cols-6 gap-4 p-1">
                <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="kpi" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  KPI & Templates
                </TabsTrigger>
                <TabsTrigger value="images" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Images
                </TabsTrigger>
                <TabsTrigger value="builder" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Builder
                </TabsTrigger>
                <TabsTrigger value="scheduler" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Scheduler
                </TabsTrigger>
                <TabsTrigger value="support" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Support
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dashboard">
              <Card className="p-6 border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <DashboardStats />
              </Card>
            </TabsContent>

            <TabsContent value="kpi">
              <Card className="p-6 border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <KpiDashboard />
              </Card>
            </TabsContent>

            <TabsContent value="images">
              <Card className="p-6 border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <ImageList />
              </Card>
            </TabsContent>

            <TabsContent value="builder">
              <Card className="p-6 border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <ImageBuilder />
              </Card>
            </TabsContent>

            <TabsContent value="scheduler">
              <Card className="p-6 border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <JobScheduler />
              </Card>
            </TabsContent>

            <TabsContent value="support">
              <Card className="p-6 border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <ChatbotSupport />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}