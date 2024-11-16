// import Image from 'next/image';
// import React from 'react';

// interface RatingStarsProps {
//   rating: number;
// }

// const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
//   return (
//     <Image 
//       loading="lazy" 
//       src="https://cdn.builder.io/api/v1/image/assets/TEMP/aac92f3105bd354d0571bb5c48ba02516c4bdc01d70bf16e6ec1298f4c02bcda?placeholderIfAbsent=true&apiKey=2aa17bc6a73c42939c0600ac0d9e09f3" 
//       alt={`${rating} out of 5 stars`} 
//       className="object-contain shrink-0 self-start aspect-[5] w-[90px]" 
//       width={0}
//       height={0}
//     />
//   );
// };

// export default RatingStars;

import React from 'react';

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, maxStars = 5 }) => {
  // Helper function to get star fill percentage
  const getStarFill = (starIndex: number): number => {
    const fill = rating - starIndex;
    return Math.max(0, Math.min(1, fill)); // Clamp between 0 and 1
  };

  return (
    <div className="flex gap-1">
      {[...Array(maxStars)].map((_, index) => (
        <div key={index} className="relative w-4 h-4">
          {/* Background star (empty) */}
          <svg
            className="w-4 h-4 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          
          {/* Foreground star (filled) - width determined by rating */}
          <div 
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${getStarFill(index) * 100}%` }}
          >
            <svg
              className="w-4 h-4 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </div>
      ))}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;