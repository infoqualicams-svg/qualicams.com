import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, className, starClassName }: StarRatingProps) {
  // Ensure rating is a valid number between 0 and 5
  const validRating = Math.max(0, Math.min(5, rating || 0));
  
  const fullStars = Math.floor(validRating);
  const halfStar = validRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rating: ${validRating} out of 5 stars`}>
      {fullStars > 0 && [...Array(Math.max(0, fullStars))].map((_, i) => (
        <Star key={`full-${i}`} className={cn("h-4 w-4 text-amber-400 fill-amber-400", starClassName)} />
      ))}
      {halfStar && <StarHalf className={cn("h-4 w-4 text-amber-400 fill-amber-400", starClassName)} />}
      {emptyStars > 0 && [...Array(Math.max(0, emptyStars))].map((_, i) => (
        <Star key={`empty-${i}`} className={cn("h-4 w-4 text-gray-300", starClassName)} />
      ))}
    </div>
  );
}
