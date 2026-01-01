import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { SentimentChart } from "@/components/sentiment-chart";
import { ReviewsList } from "@/components/reviews-list";
import { FadeIn } from "@/components/fade-in";
import { sentimentData, reviews } from "@/lib/mock-data";
import { MessageSquare, TrendingUp, Smile, Sparkles, AlertCircle, ThumbsUp } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-950">
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Customer Feedback Dashboard
          </h1>
          <ThemeToggle />
        </div>
      </FadeIn>
      
      {/* Metric Cards */}
      <FadeIn delay={100}>
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
      </FadeIn>

      {/* Sentiment Distribution Bar */}
      <FadeIn delay={200}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
            <CardDescription>Breakdown of customer feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="font-medium">Positive</span>
                </div>
                <span className="text-muted-foreground">60% (292 reviews)</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="font-medium">Neutral</span>
                </div>
                <span className="text-muted-foreground">25% (122 reviews)</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500" style={{ width: '25%' }}></div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="font-medium">Negative</span>
                </div>
                <span className="text-muted-foreground">15% (73 reviews)</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: '15%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Chart */}
      <FadeIn delay={300}>
        <div className="mb-8">
          <SentimentChart data={sentimentData} />
        </div>
      </FadeIn>

      {/* AI-Powered Insights */}
      <FadeIn delay={400}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-500" />
                <CardTitle className="text-lg">Top Praise</CardTitle>
              </div>
              <CardDescription>What customers love most</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ThumbsUp className="h-4 w-4 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Friendly Staff</p>
                    <p className="text-xs text-muted-foreground">Mentioned in 156 reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ThumbsUp className="h-4 w-4 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Great Coffee Quality</p>
                    <p className="text-xs text-muted-foreground">Mentioned in 134 reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ThumbsUp className="h-4 w-4 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Cozy Atmosphere</p>
                    <p className="text-xs text-muted-foreground">Mentioned in 98 reviews</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                <CardTitle className="text-lg">Areas for Improvement</CardTitle>
              </div>
              <CardDescription>Common complaints to address</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-1.5"></div>
                  <div>
                    <p className="text-sm font-medium">Wait Times</p>
                    <p className="text-xs text-muted-foreground">Mentioned in 45 negative reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-1.5"></div>
                  <div>
                    <p className="text-sm font-medium">Pricing</p>
                    <p className="text-xs text-muted-foreground">Mentioned in 32 negative reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500 mt-1.5"></div>
                  <div>
                    <p className="text-sm font-medium">Limited Seating</p>
                    <p className="text-xs text-muted-foreground">Mentioned in 28 negative reviews</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Reviews List */}
      <FadeIn delay={500}>
        <ReviewsList reviews={reviews} />
      </FadeIn>
    </main>
  );
}