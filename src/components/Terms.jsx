import React from "react";
import Button from "./button";

const data = [
  {
    id: 1,
    text: "Min Deposit",
    Rs: "Rs. 100",
  },
  {
    id: 2,
    text: "Min Refill",
    Rs: "Rs. 100",
  },
  {
    id: 3,
    text: "Min Withdrawal",
    Rs: "Rs. 100",
  },
  {
    id: 4,
    text: "Max Process Time",
    Rs: "15 Minutes",
  },
  {
    id: 5,
    text: "Timings",
    Rs: "24 Hours",
  },
  {
    id: 6,
    text: "Days",
    Rs: "365 Days",
  },
];

const Terms = () => {
  return (
    <>
      <div className="text-white text-center font-semibold my-20 p-10 flex flex-col items-center gap-5 yellowLine rounded-xl">
        <div className="flex justify-center items-center ">
          <h1 className="text-yellow-400 text-3xl">Terms</h1>
        </div>
        <div className="w-[320px] md:w-[600px] lg:w-[860px] yellowLine" />
        {data.map(({ id, text, Rs }) => {
          return (
            <div className="flex gap-20" key={id}>
              <h3>{text}</h3>
              <span>{Rs}</span>
            </div>
          );
        })}
        <div className="w-[320px] md:w-[600px] lg:w-[860px] yellowLine" />
        <h2 className="text-purple-800 text-2xl font-semibold">
          Place you BET in our IDs
        </h2>
        <h2 className="text-white text-xl font-semibold">
          With our Step-By-Step guide for Beginners, Get started playing. Start
          learning now.. 25/7 ACTIVE
        </h2>
        <h2 className="text-yellow-500 text-xl font-semibold">
          We deal only on WhatsApp
        </h2>
        <Button whatsapp={true} text={"+91 8469104000"} />
      </div>
    </>
  );
};

export default Terms;
