"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: 'Positive', value: 60, count: 292 },
  { name: 'Neutral', value: 25, count: 122 },
  { name: 'Negative', value: 15, count: 73 },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

export function SentimentPieChart() {
  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-base text-slate-900 dark:text-white">Sentiment Breakdown</CardTitle>
        <CardDescription className="text-xs text-slate-600 dark:text-slate-400">
          Visual distribution of feedback
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                <span className="text-slate-700 dark:text-slate-300">{item.name}</span>
              </div>
              <span className="text-slate-500 dark:text-slate-400">{item.count} reviews</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}