// import React from "react";
// import RatingStars from "./RatingStars";
// import { Button } from "./ui/button";
// import Image from "next/image";

// interface Product {
//   id: number;
//   imageSrc: string;
//   title: string;
//   currentPrice: string;
//   originalPrice: string;
//   rating: number;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     imageSrc: "/headset.jpg",
//     title: "Boat Headphone",
//     currentPrice: "$285",
//     originalPrice: "$375",
//     rating: 2,
//   },
//   {
//     id: 2,
//     imageSrc: "/headset.jpg",
//     title: "MacBook Air Pro",
//     currentPrice: "$900",
//     originalPrice: "$650",
//     rating: 4,
//   },
//   {
//     id: 3,
//     imageSrc: "/headset.jpg",
//     title: "Red Valvet Dress",
//     currentPrice: "$200",
//     originalPrice: "$150",
//     rating: 6,
//   },
//   {
//     id: 4,
//     imageSrc: "/headset.jpg",
//     title: "Cute Soft Teddybear",
//     currentPrice: "$345",
//     originalPrice: "$285",
//     rating: 8,
//   },
// ];

// const ProductGrid: React.FC = () => {
//   return (
//     <section className="mx-6 mt-6 max-md:mr-2.5 max-md:max-w-full">
//       <div className="flex gap-5 max-md:flex-col">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
//           >
//             <ProductCard
//               imageSrc={product.imageSrc}
//               title={product.title}
//               currentPrice={product.currentPrice}
//               originalPrice={product.originalPrice}
//               rating={product.rating}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductGrid;

// interface ProductCardProps {
//   imageSrc: string;
//   title: string;
//   currentPrice: string;
//   originalPrice: string;
//   rating: number;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   imageSrc,
//   title,
//   currentPrice,
//   originalPrice,
//   rating,
// }) => {
//   return (
//     <article className="flex overflow-hidden flex-col grow pb-7 w-full bg-white rounded-lg shadow max-md:mt-6">
//       <div className="flex overflow-hidden relative flex-col items-end px-16 pt-56 w-full aspect-[1.052] max-md:pt-24 max-md:pl-5">
//         <Image
//           loading="lazy"
//           src={imageSrc}
//           alt={title}
//           width={262}
//           height={250}
//           className="object-cover absolute inset-0 size-full"
//         />
//         <Button className="rounded-[50%] bg-sky-400 drop-shadow-lg">$</Button>
//       </div>
//       <div className="flex flex-col px-6 mt-5 w-full max-md:px-5">
//         <h2 className="self-start text-base font-semibold leading-5 text-gray-700">
//           {title}
//         </h2>
//         <div className="flex gap-10 mt-2 whitespace-nowrap">
//           <div className="flex flex-1 gap-2">
//             <span className="text-base font-semibold leading-5 text-gray-700">
//               {currentPrice}
//             </span>
//             <span className="my-auto text-sm leading-5 text-slate-500">
//               {originalPrice}
//             </span>
//           </div>
//           <RatingStars rating={rating} />
//         </div>
//       </div>
//     </article>
//   );
// };


import React from "react";
import RatingStars from "./RatingStars";
import { Button } from "./ui/button";
import Image from "next/image";

interface Product {
  id: number;
  imageSrc: string;
  title: string;
  currentPrice: string;
  originalPrice: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    imageSrc: "/headset.jpg",
    title: "Boat Headphone",
    currentPrice: "$285",
    originalPrice: "$375",
    rating: 2,
  },
  {
    id: 2,
    imageSrc: "/headset.jpg",
    title: "MacBook Air Pro",
    currentPrice: "$900",
    originalPrice: "$650",
    rating: 4,
  },
  {
    id: 3,
    imageSrc: "/headset.jpg",
    title: "Red Valvet Dress",
    currentPrice: "$200",
    originalPrice: "$150",
    rating: 6,
  },
  {
    id: 4,
    imageSrc: "/headset.jpg",
    title: "Cute Soft Teddybear",
    currentPrice: "$345",
    originalPrice: "$285",
    rating: 8,
  },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

interface ProductCardProps {
  imageSrc: string;
  title: string;
  currentPrice: string;
  originalPrice: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  currentPrice,
  originalPrice,
  rating,
}) => {
  return (
    <article className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full pt-[100%]">
        <Image
          loading="lazy"
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
        <Button className="absolute top-4 right-4 rounded-full w-10 h-10 p-0 bg-sky-400 hover:bg-sky-500 drop-shadow-lg">
          $
        </Button>
      </div>
      <div className="flex flex-col p-4 space-y-3">
        <h2 className="text-base font-semibold text-gray-700 line-clamp-2">
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-gray-700">
              {currentPrice}
            </span>
            <span className="text-sm text-slate-500 line-through">
              {originalPrice}
            </span>
          </div>
          <RatingStars rating={rating} />
        </div>
      </div>
    </article>
  );
};