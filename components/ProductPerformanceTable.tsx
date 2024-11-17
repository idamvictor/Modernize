import React from 'react';

// Define types
type Priority = 'Low' | 'Medium' | 'High' | 'Critical';

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
      name: 'Sunil Joshi',
      role: 'Web Designer',
      project: 'Elite Admin',
      priority: 'Low',
      budget: '$3.9k'
    },
    {
      id: 2,
      name: 'Andrew McDownland',
      role: 'Project Manager',
      project: 'Real Homes WP Theme',
      priority: 'Medium',
      budget: '$24.5k'
    },
    {
      id: 3,
      name: 'Christopher Jamil',
      role: 'Project Manager',
      project: 'MedicalPro WP Theme',
      priority: 'High',
      budget: '$12.8k'
    },
    {
      id: 4,
      name: 'Nirav Joshi',
      role: 'Frontend Engineer',
      project: 'Hosting Press HTML',
      priority: 'Critical',
      budget: '$2.4k'
    }
  ];

  const getPriorityColor = (priority: Priority): string => {
    switch (priority) {
      case 'Low':
        return 'bg-blue-400';
      case 'Medium':
        return 'bg-sky-400';
      case 'High':
        return 'bg-red-400';
      case 'Critical':
        return 'bg-teal-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <section className="flex overflow-hidden flex-col gap-6 px-8 pt-8 pb-6 w-full bg-white rounded-lg shadow max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <h2 className="text-lg font-semibold leading-6 text-gray-700">
        Product Performance
      </h2>
      <div className="flex overflow-hidden flex-col pt-4 mt-6 w-full max-md:max-w-full">
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          {/* Table Header */}
          <div className="flex flex-wrap justify-center items-center w-full text-sm font-semibold leading-6 text-gray-700 whitespace-nowrap min-h-[54px] max-md:max-w-full">
            <div className="grow shrink self-stretch p-4 my-auto border-b border-solid border-b-gray-50 min-h-[54px] w-[41px]">
              Id
            </div>
            <div className="grow shrink self-stretch p-4 my-auto w-48 border-b border-solid border-b-gray-50 min-h-[54px]">
              Assigned
            </div>
            <div className="grow shrink self-stretch p-4 my-auto border-b border-solid border-b-gray-50 min-h-[54px] w-[198px]">
              Name
            </div>
            <div className="grow shrink self-stretch p-4 my-auto border-b border-solid border-b-gray-50 min-h-[54px] w-[110px]">
              Priority
            </div>
            <div className="grow shrink self-stretch p-4 my-auto text-right border-b border-solid border-b-gray-50 min-h-[54px] w-[89px]">
              Budget
            </div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col justify-center w-full min-h-[305px] max-md:max-w-full">
            {productData.map((item) => (
              <div key={item.id} className="flex flex-wrap justify-center items-center w-full min-h-[76px] max-md:max-w-full">
                <div className="grow shrink self-stretch px-4 py-7 my-auto text-base font-medium leading-5 text-gray-700 whitespace-nowrap border-b border-solid border-b-gray-50 min-h-[76px] w-[41px]">
                  {item.id}
                </div>
                <div className="flex flex-col grow shrink gap-0 self-stretch p-4 my-auto w-48 border-b border-solid border-b-gray-50 min-h-[76px]">
                  <div className="text-sm font-semibold leading-6 text-gray-700">{item.name}</div>
                  <div className="text-sm leading-5 text-slate-500">{item.role}</div>
                </div>
                <div className="grow shrink self-stretch px-4 py-7 my-auto text-sm leading-6 border-b border-solid border-b-gray-50 min-h-[76px] text-slate-500 w-[198px]">
                  {item.project}
                </div>
                <div className="flex flex-col grow shrink justify-center items-start self-stretch px-4 py-7 my-auto text-sm leading-4 text-white whitespace-nowrap border-b border-solid border-b-gray-50 min-h-[76px] w-[110px]">
                  <div className={`flex justify-center items-center p-1 ${getPriorityColor(item.priority)} rounded-2xl max-w-[680px]`}>
                    <div className="overflow-hidden self-stretch px-2 my-auto">{item.priority}</div>
                  </div>
                </div>
                <div className="flex flex-col grow shrink justify-center self-stretch px-4 py-7 my-auto text-base font-semibold leading-5 text-right text-gray-700 whitespace-nowrap border-b border-solid border-b-gray-50 min-h-[76px] w-[89px]">
                  <div className="w-full">{item.budget}</div>
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