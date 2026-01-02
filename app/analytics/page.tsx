"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSidebar } from "@/components/sidebar-provider";
import { FadeIn } from "@/components/fade-in";
import { BarChart3, TrendingUp, Users, Clock } from "lucide-react";

export default function AnalyticsPage() {
  const { collapsed } = useSidebar();

  return (
    <main className={`min-h-screen pr-8 py-8 transition-all duration-300 ${collapsed ? 'pl-28' : 'pl-72'} bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950`}>
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-2">
            Analytics
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Deep dive into your feedback metrics and trends
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Response Rate</CardTitle>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">87%</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">+5% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Avg Response Time</CardTitle>
              <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                <Clock className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">2.4h</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">-30min improvement</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Active Users</CardTitle>
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">1,234</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Growth Rate</CardTitle>
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+23%</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Month over month</p>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg text-slate-900 dark:text-white">Coming Soon</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Advanced analytics features will be available here
            </CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <p className="text-slate-400 dark:text-slate-500">More charts and insights coming soon...</p>
          </CardContent>
        </Card>
      </FadeIn>
    </main>
  );
}