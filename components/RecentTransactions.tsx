import React from 'react';

interface Transaction {
  time: string;
  color: string;
  content: React.ReactNode;
}

const transactions: Transaction[] = [
  {
    time: '09:30 am',
    color: 'blue-400',
    content: (
      <>
        Payment received from <br /> John Doe of $385.90
      </>
    ),
  },
  {
    time: '10:00 am',
    color: 'sky-400',
    content: (
      <>
        <span>New sale recorded</span>
        <br />
        <a href="https://modernize-nextjs-free.vercel.app/" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          #ML-3467
        </a>
      </>
    ),
  },
  {
    time: '12:00 am',
    color: 'teal-400',
    content: (
      <>
        Payment was made of <br /> $64.95 to Michael
      </>
    ),
  },
  {
    time: '09:30 am',
    color: 'amber-400',
    content: (
      <>
        <span>New sale recorded</span>
        <br />
        <a href="https://modernize-nextjs-free.vercel.app/" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          #ML-3467
        </a>
      </>
    ),
  },
  {
    time: '09:30 am',
    color: 'red-400',
    content: 'New arrival recorded',
  },
  {
    time: '12:00 am',
    color: 'teal-400',
    content: 'Payment Received',
  },
];

const RecentTransactions: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col grow justify-end px-8 pt-9 w-full bg-white rounded-lg shadow max-md:px-5 max-md:mt-6">
      <h2 className="self-start text-lg font-semibold leading-6 text-gray-700">
        Recent Transactions
      </h2>
      <div className="flex flex-col mt-7 w-full">
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            time={transaction.time}
            color={transaction.color}
            isLast={index === transactions.length - 1}
          >
            {transaction.content}
          </TransactionItem>
        ))}
      </div>
    </section>
  );
};

export default RecentTransactions;



interface TransactionItemProps {
  time: string;
  color: string;
  isLast: boolean;
  children: React.ReactNode;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ time, color, isLast, children }) => {
  return (
    <div className="flex gap-4 items-start px-4 pt-3 w-full text-sm leading-5 text-gray-700 min-h-[70px]">
      <div className="flex flex-col text-right">
        <div className="flex gap-4">
          <div>{time}</div>
          <div className={`flex shrink-0 self-start w-3 h-3 rounded-md border-2 border-${color} border-solid`} />
        </div>
        {!isLast && (
          <div className="flex shrink-0 self-end mt-3 w-px bg-zinc-100 h-[35px] max-md:mr-1.5" />
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};