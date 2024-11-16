import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';



const AccountSignUp = () => {
  return (
    <section className="flex gap-4 items-start pr-0.5 pb-6 pl-6 mt-8 bg-indigo-50 rounded-lg max-md:pl-5 max-md:ml-0.5">
      <div className="flex flex-col flex-1 self-end mt-6">
        <h2 className="pt-0.5 pb-1 text-base font-semibold leading-6 text-zinc-800">
          Haven&apos;t <br /> account ?
        </h2>
        <Button >Signup </Button>
      </div>
      <Image 
        loading="lazy" 
        src={"/rocket.png"} 
        alt="Account illustration" 
        className="object-contain shrink-0 self-start max-w-full aspect-square w-[100px]" 
        height={0}
        width={0}
      />
    </section>
  );
};

export default AccountSignUp;