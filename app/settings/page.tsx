"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSidebar } from "@/components/sidebar-provider";
import { FadeIn } from "@/components/fade-in";
import { User, Bell, Shield, Palette, Mail, Globe } from "lucide-react";

export default function SettingsPage() {
  const { collapsed } = useSidebar();

  return (
    <main className={`min-h-screen pr-8 py-8 transition-all duration-300 ${collapsed ? 'pl-28' : 'pl-72'} bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950`}>
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-2">
            Settings
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Manage your account and preferences
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FadeIn delay={100}>
          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-base text-slate-900 dark:text-white">Profile</CardTitle>
              </div>
              <CardDescription className="text-xs text-slate-600 dark:text-slate-400">
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-xs text-slate-600 dark:text-slate-400">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-slate-600 dark:text-slate-400">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={150}>
          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <Bell className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                </div>
                <CardTitle className="text-base text-slate-900 dark:text-white">Notifications</CardTitle>
              </div>
              <CardDescription className="text-xs text-slate-600 dark:text-slate-400">
                Configure how you receive alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700 dark:text-slate-300">Email notifications</span>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700 dark:text-slate-300">Push notifications</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700 dark:text-slate-300">Weekly digest</span>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={200}>
          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Palette className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-base text-slate-900 dark:text-white">Appearance</CardTitle>
              </div>
              <CardDescription className="text-xs text-slate-600 dark:text-slate-400">
                Customize the look and feel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-xs text-slate-600 dark:text-slate-400">Theme</label>
                <select className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
                  <option>System</option>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-600 dark:text-slate-400">Language</label>
                <select className="w-full mt-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={250}>
          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Shield className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-base text-slate-900 dark:text-white">Security</CardTitle>
              </div>
              <CardDescription className="text-xs text-slate-600 dark:text-slate-400">
                Manage your security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                Change password
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                Two-factor authentication
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                Active sessions
              </button>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <FadeIn delay={300}>
        <div className="mt-6">
          <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            Save Changes
          </button>
        </div>
      </FadeIn>
    </main>
  );
}