"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart3, Settings, FileText, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "./sidebar-provider";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <div className={`fixed left-0 top-0 h-screen border-r border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-8 p-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all"
      >
        {collapsed ? (
          <ChevronRight className="h-3 w-3 text-slate-600 dark:text-slate-400" />
        ) : (
          <ChevronLeft className="h-3 w-3 text-slate-600 dark:text-slate-400" />
        )}
      </button>

      {/* Logo/Brand */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl shadow-lg shadow-purple-500/30">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              FeedbackAI
            </h2>
          )}
        </div>
        {!collapsed && (
          <p className="text-xs text-slate-500 dark:text-slate-400 ml-12">Sentiment Analytics</p>
        )}
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
              title={collapsed ? item.name : undefined}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Info */}
      {!collapsed && (
        <div className="absolute bottom-6 left-6 right-6">
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Free Plan</p>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              3 dashboards remaining
            </p>
            <button className="mt-3 w-full px-3 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              Upgrade Pro
            </button>
          </div>
        </div>
      )}
    </div>
  );
}