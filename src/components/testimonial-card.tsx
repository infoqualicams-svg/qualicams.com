import type { Testimonial } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { StarRating } from '@/components/star-rating';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col justify-between p-6">
        <CardContent className="p-0">
            <Quote className="w-8 h-8 text-primary/50 mb-4" />
            <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
            <StarRating rating={testimonial.rating} />
        </CardContent>
        <div className="flex items-center gap-4 mt-6">
            <Avatar>
                <AvatarImage src={testimonial.image} alt={testimonial.author} data-ai-hint={testimonial.imageHint} />
                <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            </div>
        </div>
    </Card>
  );
}
