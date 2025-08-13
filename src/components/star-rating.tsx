import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, className, starClassName }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={cn("h-4 w-4 text-amber-400 fill-amber-400", starClassName)} />
      ))}
      {halfStar && <StarHalf className={cn("h-4 w-4 text-amber-400 fill-amber-400", starClassName)} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={cn("h-4 w-4 text-gray-300", starClassName)} />
      ))}
    </div>
  );
}
