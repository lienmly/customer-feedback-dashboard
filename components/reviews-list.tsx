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
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20';
      case 'negative':
        return 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20';
      case 'neutral':
        return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20';
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20';
    }
  };

  const getStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Reviews</CardTitle>
        <CardDescription>Latest customer feedback with sentiment analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="p-4 rounded-lg border bg-card"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">{getStars(review.rating)}</span>
                  <span 
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getSentimentColor(review.sentiment)}`}
                  >
                    {review.sentiment}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
              <p className="text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}