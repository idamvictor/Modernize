import React from "react";

type Priority = "Low" | "Medium" | "High" | "Critical";

interface Product {
  id: number;
  name: string;
  role: string;
  project: string;
  priority: Priority;
  budget: string;
}

const ProductPerformanceTable: React.FC = () => {
  const productData: Product[] = [
    {
      id: 1,
      name: "Sunil Joshi",
      role: "Web Designer",
      project: "Elite Admin",
      priority: "Low",
      budget: "$3.9k",
    },
    {
      id: 2,
      name: "Andrew McDownland",
      role: "Project Manager",
      project: "Real Homes WP Theme",
      priority: "Medium",
      budget: "$24.5k",
    },
    {
      id: 3,
      name: "Christopher Jamil",
      role: "Project Manager",
      project: "MedicalPro WP Theme",
      priority: "High",
      budget: "$12.8k",
    },
    {
      id: 4,
      name: "Nirav Joshi",
      role: "Frontend Engineer",
      project: "Hosting Press HTML",
      priority: "Critical",
      budget: "$2.4k",
    },
  ];

  const getPriorityColor = (priority: Priority): string => {
    switch (priority) {
      case "Low":
        return "bg-blue-400";
      case "Medium":
        return "bg-sky-400";
      case "High":
        return "bg-red-400";
      case "Critical":
        return "bg-teal-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <section className="bg-white rounded-lg shadow p-8 max-md:p-5">
      <h2 className="text-lg font-semibold leading-6 text-gray-700 mb-6">
        Product Performance
      </h2>
      {/* Added overflow container */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {" "}
          {/* Set minimum width to prevent squishing */}
          {/* Table Header */}
          <div className="flex text-sm font-semibold leading-6 text-gray-700">
            <div className="w-16 p-4 border-b border-gray-50">Id</div>
            <div className="w-48 p-4 border-b border-gray-50">Assigned</div>
            <div className="w-64 p-4 border-b border-gray-50">Name</div>
            <div className="w-32 p-4 border-b border-gray-50">Priority</div>
            <div className="w-32 p-4 text-right border-b border-gray-50">
              Budget
            </div>
          </div>
          {/* Table Body */}
          <div>
            {productData.map((item) => (
              <div key={item.id} className="flex items-center">
                <div className="w-16 p-4 text-base font-medium text-gray-700 border-b border-gray-50">
                  {item.id}
                </div>
                <div className="w-48 p-4 border-b border-gray-50">
                  <div className="text-sm font-semibold text-gray-700">
                    {item.name}
                  </div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
                <div className="w-64 p-4 text-sm text-slate-500 border-b border-gray-50">
                  {item.project}
                </div>
                <div className="w-32 p-4 border-b border-gray-50">
                  <div
                    className={`inline-flex items-center ${getPriorityColor(
                      item.priority
                    )} rounded-2xl px-3 py-1 text-sm text-white`}
                  >
                    {item.priority}
                  </div>
                </div>
                <div className="w-32 p-4 text-base font-semibold text-right text-gray-700 border-b border-gray-50">
                  {item.budget}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPerformanceTable;
