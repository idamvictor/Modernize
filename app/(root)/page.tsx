import { AreaChartComponent } from "@/components/AreaChart";
import { BarchartComponent } from "@/components/BarChart";
import { PieChartComponent } from "@/components/PieChart";
import ProductPerformanceTable from "@/components/ProductPerformanceTable";
import ProductsCard from "@/components/ProductsCard";
import RecentTransactions from "@/components/RecentTransactions";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50">
          <BarchartComponent />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <PieChartComponent />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <AreaChartComponent />
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <ProductPerformanceTable />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min w-[100%]">
        <div className="flex gap-2 flex-wrap">
          <ProductsCard
            imageSrc="/headset.jpg"
            productName="Product Name"
            currentPrice={99.99}
            originalPrice={149.99}
            rating={4.5}
          />
          <ProductsCard
            imageSrc="/headset.jpg"
            productName="Product Name"
            currentPrice={99.99}
            originalPrice={149.99}
            rating={4.5}
          />
          <ProductsCard
            imageSrc="/headset.jpg"
            productName="Product Name"
            currentPrice={99.99}
            originalPrice={149.99}
            rating={4.5}
          />
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default page;
