import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Review {
  id: number;
  text: string;
  rating: number;
  sentiment: string;
  date: string;
}

interface ReviewsListProps {
  reviews: Review[];
}

export function ReviewsList({ reviews }: ReviewsListProps) {
  const getSentimentStyle = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
      case 'negative':
        return 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800';
      case 'neutral':
        return 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-slate-50 dark:bg-slate-800/20 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-700';
    }
  };

  const getStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg text-slate-900 dark:text-white">Recent Reviews</CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          Latest customer feedback with sentiment analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="p-4 rounded-xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-sm">{getStars(review.rating)}</span>
                  <span 
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getSentimentStyle(review.sentiment)}`}
                  >
                    {review.sentiment}
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">{review.date}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}