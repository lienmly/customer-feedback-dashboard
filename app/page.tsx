import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Customer Feedback Dashboard
      </h1>
      
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