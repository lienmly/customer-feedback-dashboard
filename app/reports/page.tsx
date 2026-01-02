"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSidebar } from "@/components/sidebar-provider";
import { FadeIn } from "@/components/fade-in";
import { FileText, Download, Calendar, Filter } from "lucide-react";

export default function ReportsPage() {
  const { collapsed } = useSidebar();

  const reports = [
    { name: "Monthly Summary Report", date: "December 2025", status: "Ready" },
    { name: "Customer Sentiment Analysis", date: "Q4 2025", status: "Ready" },
    { name: "Trend Analysis Report", date: "November 2025", status: "Ready" },
    { name: "Weekly Digest", date: "Week 52, 2025", status: "Ready" },
  ];

  return (
    <main className={`min-h-screen pr-8 py-8 transition-all duration-300 ${collapsed ? 'pl-28' : 'pl-72'} bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950`}>
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-2">
            Reports
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Download and export your feedback reports
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <Calendar className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                </div>
                <CardTitle className="text-base text-slate-900 dark:text-white">Date Range</CardTitle>
              </div>
              <CardDescription className="text-xs text-slate-600 dark:text-slate-400">
                Select report period
              </CardDescription>
            </CardHeader>
            <CardContent>
              <select className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>All time</option>
              </select>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Filter className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-base text-slate-900 dark:text-white">Report Type</CardTitle>
              </div>
              <CardDescription className="text-xs text-slate-600 dark:text-slate-400">
                Choose report format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <select className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
                <option>Summary Report</option>
                <option>Detailed Analysis</option>
                <option>Sentiment Breakdown</option>
                <option>Custom Report</option>
              </select>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      <FadeIn delay={200}>
        <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg text-slate-900 dark:text-white">Available Reports</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Recently generated reports ready for download
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                      <FileText className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{report.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{report.date}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                    <Download className="h-3 w-3" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </FadeIn>
    </main>
  );
}