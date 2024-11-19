// import { AreaChartComponent } from "@/components/AreaChart";

// import { BarchartComponent } from "@/components/BarChart";
// import { PieChartComponent } from "@/components/PieChart";
// import ProductPerformanceTable from "@/components/ProductPerformanceTable";
// import ProductGrid from "@/components/ProductsCard";
// import RecentTransactions from "@/components/RecentTransactions";

// function Dashboard() {

//   return (
//     <>
//       {/* <div className="parent grid grid-cols-3 grid-rows-4 gap-4 p-4"> */}
//       <div className="parent grid grid-cols-3 grid-rows-4 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4">
//         <div className="div4 col-span-2 row-span-2 ">
//           <BarchartComponent />
//         </div>
//         <div className="div5 col-start-3 ">
//           <PieChartComponent />
//         </div>
//         <div className="div6 col-start-3 row-start-2 ">
//           <AreaChartComponent />
//         </div>
//         <div className="div7 row-span-2 row-start-3 ">
//           <RecentTransactions />
//         </div>
//         <div className="div8 col-span-2 row-span-2 row-start-3 ">
//           <ProductPerformanceTable />
//         </div>
//       </div>
//       <ProductGrid />
//     </>
//   )
// }

// export default Dashboard

import { AreaChartComponent } from "@/components/AreaChart";

import { BarchartComponent } from "@/components/BarChart";
import { PieChartComponent } from "@/components/PieChart";
import ProductPerformanceTable from "@/components/ProductPerformanceTable";
import ProductGrid from "@/components/ProductsCard";
import RecentTransactions from "@/components/RecentTransactions";

function Dashboard() {
  return (
    <>
      {/* <div className="parent grid grid-cols-3 grid-rows-4 gap-4 p-4"> */}
      <div className="parent grid grid-cols-1 ">
        <div className="div4  ">
          <BarchartComponent />
        </div>
        <div className="div5  ">
          <PieChartComponent />
        </div>
        <div className="div6 ">
          <AreaChartComponent />
        </div>
        <div className="div7  ">
          <RecentTransactions />
        </div>
        <div className="div8 ">
          <ProductPerformanceTable />
        </div>
      </div>
      <ProductGrid />
    </>
  );
}

export default Dashboard;
