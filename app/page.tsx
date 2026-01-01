import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { SentimentChart } from "@/components/sentiment-chart";
import { ReviewsList } from "@/components/reviews-list";
import { sentimentData, reviews } from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-950">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Customer Feedback Dashboard
        </h1>
        <ThemeToggle />
      </div>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Reviews</CardTitle>
            <CardDescription>All time feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">487</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Sentiment</CardTitle>
            <CardDescription>Overall mood</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600 dark:text-green-500">78%</p>
            <p className="text-sm text-muted-foreground mt-2">Positive</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Trend</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600 dark:text-green-500">↑ 12%</p>
            <p className="text-sm text-muted-foreground mt-2">Improving</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <div className="mb-8">
        <SentimentChart data={sentimentData} />
      </div>

      {/* Reviews List */}
      <ReviewsList reviews={reviews} />
    </main>
  );
}