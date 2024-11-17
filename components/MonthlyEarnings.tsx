import { TrendingDown } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

export const MonthlyEarnings: React.FC = () => {

  return (
    <section className="flex flex-col px-8 w-full max-md:px-5">
      <div className="flex gap-5 justify-between items-start w-full">
        <div className="flex flex-col mt-4 text-gray-700">
          <h2 className="text-lg font-semibold leading-6">
            Monthly Earnings
          </h2>
          <p className="self-start mt-5 text-2xl font-bold leading-7">
          $5,000
          </p>
        </div>
        <Button className="rounded-[50%] bg-sky-400 drop-shadow-lg">$</Button>
      </div>
      <div className="flex gap-2 items-center self-start mt-2">
        <div className="flex overflow-hidden justify-center items-center self-stretch pr-1 pl-1 bg-rose-100 rounded-2xl h-[27px] min-h-[27px] w-[27px]">
          <TrendingDown />
        </div>
        <p className="self-stretch my-auto text-sm font-semibold leading-6 text-gray-700">
        +10%
        </p>
        <p className="self-stretch my-auto text-sm leading-6 text-slate-500">
        since last month
        </p>
      </div>
    </section>
  );
};
