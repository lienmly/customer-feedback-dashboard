import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { SentimentChart } from "@/components/sentiment-chart";
import { ReviewsList } from "@/components/reviews-list";
import { FadeIn } from "@/components/fade-in";
import { sentimentData, reviews } from "@/lib/mock-data";
import { MessageSquare, TrendingUp, Smile, Sparkles, AlertCircle, ThumbsUp } from "lucide-react";

export default function Home() {
  return (
      <main className="min-h-screen pl-72 pr-8 py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">      <FadeIn>
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
                  Customer Feedback Dashboard
                </h1>
                <span className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white rounded-full shadow-lg shadow-purple-500/30">
                  AI-Powered
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Real-time sentiment analysis and insights from customer reviews
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </FadeIn>
      
      {/* Metric Cards */}
      <FadeIn delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Reviews</CardTitle>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">487</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">All time feedback</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Average Sentiment</CardTitle>
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                <Smile className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">78%</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Positive</span> overall mood
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-700 dark:text-slate-300">Recent Trend</CardTitle>
              <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                <TrendingUp className="h-4 w-4 text-violet-600 dark:text-violet-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">+12%</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">↑ Improving</span> last 30 days
              </p>
            </CardContent>
          </Card>
        </div>
      </FadeIn>

      {/* Sentiment Distribution Bar */}
      <FadeIn delay={200}>
        <Card className="mb-8 border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg text-slate-900 dark:text-white">Sentiment Distribution</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">Breakdown of customer feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Positive</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">60% (292 reviews)</span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Neutral</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">25% (122 reviews)</span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">Negative</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">15% (73 reviews)</span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-full" style={{ width: '15%' }}></div>
                </div>
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
          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <Sparkles className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Top Praise</CardTitle>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-400">What customers love most</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                  <ThumbsUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Friendly Staff</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Mentioned in 156 reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                  <ThumbsUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Great Coffee Quality</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Mentioned in 134 reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                  <ThumbsUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Cozy Atmosphere</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Mentioned in 98 reviews</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg text-slate-900 dark:text-white">Areas for Improvement</CardTitle>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-400">Common complaints to address</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
                  <div className="h-2 w-2 rounded-full bg-rose-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Wait Times</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Mentioned in 45 negative reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
                  <div className="h-2 w-2 rounded-full bg-rose-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Pricing</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Mentioned in 32 negative reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800">
                  <div className="h-2 w-2 rounded-full bg-rose-500 mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">Limited Seating</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Mentioned in 28 negative reviews</p>
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