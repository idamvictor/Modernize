// import Image from 'next/image';
import { TrendingUp } from 'lucide-react';
import React from 'react';

const YearlyBreakup = () => {
  return (
    <article className="flex flex-col  self-start">
      <header>
        <h2 className="text-lg font-semibold leading-6 text-gray-700">
          Yearly Breakup
        </h2>
      </header>
      
      <div role="region" aria-label="Statistics" className="mt-8">
        <p className="self-start text-2xl font-bold leading-7 text-gray-700">
          <span className="sr-only">Total amount: </span>
          $36,358
        </p>
        <div className="flex gap-2 items-center mt-2">
          <figure className="flex overflow-hidden justify-center items-center self-stretch pr-1 pl-1 bg-cyan-50 rounded-2xl h-[27px] min-h-[27px] w-[27px]">
            <TrendingUp />
          </figure>
          <p className="self-stretch my-auto text-sm font-semibold leading-6 text-gray-700">
            <span className="sr-only">Percentage change: </span>
            +9%
          </p>
          <p className="self-stretch my-auto text-sm leading-6 text-slate-500">
            <span className="sr-only">Compared to </span>
            last year
          </p>
        </div>
      </div>

      <footer className="mt-12 max-md:mt-10">
        <div role="list" aria-label="Year comparison" className="flex gap-6 text-sm leading-6 whitespace-nowrap text-slate-500">
          <div role="listitem" className="flex flex-1 gap-2">
            <span className="flex shrink-0 self-start bg-blue-400 rounded h-[9px] w-[9px]" aria-hidden="true" />
            <span>2022</span>
          </div>
          <div role="listitem" className="flex flex-1 gap-2">
            <span className="flex shrink-0 self-start bg-indigo-50 rounded h-[9px] w-[9px]" aria-hidden="true" />
            <span>2023</span>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default YearlyBreakup;