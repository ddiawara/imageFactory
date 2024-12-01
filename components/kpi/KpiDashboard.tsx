"use client";

import { Card } from "@/components/ui/card";
import { KpiMetricCard } from "./KpiMetricCard";
import { KpiChart } from "./KpiChart";
import { KpiDataSourceList } from "./KpiDataSourceList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function KpiDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <KpiMetricCard
          title="Build Success Rate"
          value="98.5%"
          trend="+2.3%"
          description="Last 30 days build success rate"
          type="success"
        />
        <KpiMetricCard
          title="Average Build Time"
          value="45min"
          trend="-5min"
          description="Average build duration"
          type="info"
        />
        <KpiMetricCard
          title="Resource Utilization"
          value="78%"
          trend="+5%"
          description="Current resource usage"
          type="warning"
        />
      </div>

      <Tabs defaultValue="metrics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="templates">Data Source Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics">
          <Card className="p-6">
            <KpiChart />
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card className="p-6">
            <KpiDataSourceList />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}