import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Divider from "../../../components/divider";
import { images } from "../../../assets";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../../../components/table/table";
import TableButton from "../../../components/table/table-button";
import NextPaymentCard from "./components/cards/nextPaymentCard";
import StaffTransactionHistory from "./components/cards/staffTransactionHistory";
import StaffLoanUsage from "./components/cards/staffLoanUsage";
import createApiManager from "../../../managers/apiManager";

const LoanManagement = () => {
  const [isActive, setIsActive] = useState(false);
  const [loan, setActiveLoan] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const apiManager = createApiManager();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const getActiveLoan = async () => {
      setIsLoading(true);
      try {
        const fetchedStaff = await apiManager.getActiveLoan();
        const data = fetchedStaff.data;
        setActiveLoan(data);
      } catch (error) {
        console.error("Error fetching staffs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getActiveLoan();
  }, []);

  return (
    <>
      <div className="z10 m-10 pb-10 space-y-10 max-md:mr-2.5 max-md:max-w-full">
        <NextPaymentCard loan={loan} loading={isLoading} />
        <div>
          <div className="lg:grid lg:grid-cols-3 gap-5">
            <StaffTransactionHistory />
            <div className="lg:col-span-1">
              <div className="flex flex-col px-11 pt-9 pb-16 mx-auto w-full h-fit rounded-2xl shadow-sm bg-[#FFFCF9]">
                <div className="flex flex-col pb-1">
                  <div className="flex gap-2.5 justify-between items-start pr-2 pb-6">
                    <div className="text-2xl tracking-wide text-brown">
                      Balances
                    </div>
                    <div className="flex justify-center items-center p-2 w-8 h-8 rounded-lg bg-lightBrown">
                      <img
                        src={images.plusIcon}
                        className="w-4 aspect-square"
                      />
                    </div>
                  </div>
                  <div className="self-start ml-5 text-base tracking-wide text-brown">
                    Naira
                  </div>
                  <div className="self-start text-4xl font-bold text-lightBrown">
                    {loan['amountReceived'] - loan['totalLoanAmount']}
                  </div>
                </div>
                <img
                  src={images.creditCard}
                  className="self-center h-auto max-w-full "
                />
              </div>
            </div>
          </div>
        </div>
        <StaffLoanUsage />
        {/* Next section */}
      </div>
    </>
  );
};

export default LoanManagement;
