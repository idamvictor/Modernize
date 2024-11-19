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
      <div className=" grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4">
        <div className=" lg:col-span-2 lg:row-span-2 ">
          <BarchartComponent />
        </div>
        <div className=" lg:col-start-3 ">
          <PieChartComponent />
        </div>
        <div className=" lg:col-start-3 lg:row-start-2 ">
          <AreaChartComponent />
        </div>
        <div className=" lg:row-span-2 lg:row-start-3 ">
          <RecentTransactions />
        </div>
        <div className=" lg:col-span-2 lg:row-span-2 lg:row-start-3 ">
          <ProductPerformanceTable />
        </div>
      </div>
      <ProductGrid />
    </>
  );
}

export default Dashboard;

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
//       <div className="parent grid grid-cols-1 gap-4 p-4 lg:grid-cols-3 lg:grid-rows-4 ">
//         <div className="div4 lg:col-span-2 lg:row-span-2 ">
//           <BarchartComponent />
//         </div>
//         <div className="div5  lg:col-start-3">
//           <PieChartComponent />
//         </div>
//         <div className="div6 lg:col-start-3 lg:row-start-2">
//           <AreaChartComponent />
//         </div>
//         <div className="div7  lg:row-span-2 lg:row-start-3">
//           <RecentTransactions />
//         </div>
//         <div className="div8 lg:col-span-2 lg:row-span-2 row-start-3">
//           <ProductPerformanceTable />
//         </div>
//       </div>
//       <ProductGrid />
//     </>
//   );
// }

// export default Dashboard;
