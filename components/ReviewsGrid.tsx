'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Review {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < Math.round(rating) ? "text-[#C9A84C]" : "text-[#8A8F9E]"}>
          {i < Math.round(rating) ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = review.text.split(' ');
  const isLong = words.length > 30;
  const displayedText = isExpanded ? review.text : words.slice(0, 30).join(' ') + (isLong ? '...' : '');

  return (
    <div className="bg-[#16181D] border border-[#C9A84C]/20 p-8 flex flex-col h-full hover:border-[#C9A84C]/50 transition-colors">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#242933] flex items-center justify-center text-[#F0EDE6] font-bold">
          {review.profile_photo_url ? (
            <Image 
              src={review.profile_photo_url} 
              alt={review.author_name} 
              fill 
              className="object-cover"
            />
          ) : (
            review.author_name.charAt(0)
          )}
        </div>
        <div>
          <div className="text-[#F0EDE6] font-bold text-[16px]" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>
            {review.author_name}
          </div>
          <div className="text-[#8A8F9E] text-[12px]">{review.relative_time_description}</div>
        </div>
      </div>
      
      <div className="mb-4">
        <StarRating rating={review.rating} />
      </div>

      <div className="text-[#8A8F9E] text-[14px] leading-relaxed mb-6 flex-grow">
        {displayedText}
        {isLong && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#C9A84C] ml-2 font-bold cursor-pointer hover:underline"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      <div className="text-right text-[10px] uppercase tracking-[1px] text-[#8A8F9E]/50 font-bold">
        Google
      </div>
    </div>
  );
};

export default function ReviewsGrid({ reviews }: { reviews: Review[] }) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, i) => (
        <ReviewCard key={i} review={review} />
      ))}
    </div>
  );
}
