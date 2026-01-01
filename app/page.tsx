import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { SentimentChart } from "@/components/sentiment-chart";
import { ReviewsList } from "@/components/reviews-list";
import { sentimentData, reviews } from "@/lib/mock-data";
import { MessageSquare, TrendingUp, Smile } from "lucide-react";

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
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">487</div>
            <p className="text-xs text-muted-foreground mt-1">All time feedback</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Sentiment</CardTitle>
            <Smile className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 dark:text-green-500">78%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 dark:text-green-500 font-medium">Positive</span> overall mood
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Trend</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600 dark:text-green-500">+12%</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600 dark:text-green-500 font-medium">↑ Improving</span> last 30 days
            </p>
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