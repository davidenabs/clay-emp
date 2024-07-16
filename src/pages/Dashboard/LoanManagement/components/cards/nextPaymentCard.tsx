import Divider from "../../../../../components/divider";
import React, { useState } from "react";

function NextPaymentCard() {
  return (
    <div className="flex flex-col py-6  rounded-2xl shadow-lg bg-white">
      <div className="self-start px-8 lg:px-12 text-base tracking-normal leading-6 text-brown">
        Next Repayment Date
      </div>
      <Divider />
      <div className="flex gap-5 justify-between items-center  px-8 lg:px-12 mt-7 w-full font-semibold tracking-wide max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col my-auto">
          <div className="text-xl leading-7 text-brown">June 4, 2020</div>
          <div className="mt-2.5 text-sm leading-5 text-lightBrown">
            Sirus Bank
          </div>
        </div>
        <div className="my-auto text-2xl font-medium leading-8 text-blue">
          <span className="font-bold">₦</span>
          <span className="">100,000,.00</span>
        </div>
        <button
          type="button"
          className="justify-center items-center self-stretch px-16 py-4 text-sm leading-5 text-center rounded-2xl text-white bg-lightBrown max-md:px-5 hover:bg-lightBrown-dark hover:opacity-90 transition duration-300"
        >
          Make Repayment
        </button>
      </div>
    </div>
  );
}

export default NextPaymentCard;
