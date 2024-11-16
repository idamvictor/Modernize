import React from 'react';
import RatingStars from './RatingStars';
import Image from 'next/image';

interface PriceDisplayProps {
 currentPrice: number;
 originalPrice: number; 
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ currentPrice, originalPrice }) => {
 return (
   <div className="flex flex-1 gap-2">
     <div className="text-base font-semibold leading-5 text-gray-700">
       ${currentPrice}
     </div>
     <div className="my-auto text-sm leading-5 text-slate-500">
       ${originalPrice}
     </div>
   </div>
 );
};

interface ProductsCardProps {
 imageSrc: string;
 productName: string; 
 currentPrice: number;
 originalPrice: number;
 rating: number;
}

const ProductsCard: React.FC<ProductsCardProps> = ({
 imageSrc,
 productName,
 currentPrice,
 originalPrice,
 rating
}) => {
 return (
   <article className="flex overflow-hidden flex-col grow pb-7 w-[20%] bg-white rounded-lg shadow max-md:mt-6">
     <header className="flex overflow-hidden relative flex-col items-end px-16 pt-56 w-full aspect-[1.052] max-md:pt-24 max-md:pl-5">
       <Image 
         loading="lazy" 
         src={imageSrc} 
         alt={productName} 
         className="object-cover absolute inset-0 size-full" 
        //  width={0}
        //  height={0}
         fill
       />
       
     </header>
     <div className="flex flex-col px-6 mt-5 w-full max-md:px-5">
       <h2 className="self-start text-base font-semibold leading-5 text-gray-700">
         {productName}
       </h2>
       <div className="flex gap-10 mt-2 whitespace-nowrap">
         <PriceDisplay currentPrice={currentPrice} originalPrice={originalPrice} />
         <RatingStars rating={rating} />
       </div>
     </div>
   </article>
 );
};

export default ProductsCard;
  