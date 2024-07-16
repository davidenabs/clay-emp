import React, { useState } from "react";
import StaffCard from "./components/cards/staffCard";
import TransactionHistory from "./components/cards/transactionHistory";
import { useParams } from "react-router-dom";

const StaffDetailsAndTransactions = () => {
  const { staffId } = useParams();
  return (
    <>
      <div className="m-10 max-md:max-w-full space-y-10">
        <StaffCard staffId={staffId} />
        <TransactionHistory staffId={staffId} />
        <div></div>
      </div>
    </>
  );
};

export default StaffDetailsAndTransactions;
