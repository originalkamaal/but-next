import React from 'react';
import { TfiQuoteRight, TfiQuoteLeft } from 'react-icons/tfi';
const TesitmonialCard = () => {
  return (
    <div className="bg-budarkblue flex rounded-md flex-row text-white p-4">
      <div>
        <img
          className="rounded-full w-80"
          src="https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center pl-4">
        <div className="text-xs fle font-[Roboto]">
          <TfiQuoteLeft />
          BrightUrban helped to take my sales from & 20,000 monthly to 2.5 lacs
          monthly, I would like to recommend all new online sellers to take help
          from brighturban to grow faster.
          <TfiQuoteRight />
        </div>
        <div>User Details</div>
      </div>
    </div>
  );
};
export default TesitmonialCard;
