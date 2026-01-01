import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-950">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Customer Feedback Dashboard
        </h1>
        <ThemeToggle />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Total Reviews</CardTitle>
          <CardDescription>All time feedback</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">487</p>
        </CardContent>
      </Card>
    </main>
  );
}