import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Divider from "../../../../../components/divider";
import React, { useEffect, useState } from "react";
import createApiManager from "../../../../../managers/apiManager";
import useNavigateTo from "../../../../../hooks/useNavigateTo";
import { Button, Loader } from "rizzui";
import { calculateDueInDays, formatDate } from "../../../../../utils/dateUtils";
import {
  calculatePercentage,
} from "../../../../../utils/helpers";
import { Progressbar } from "rizzui";

function StaffLoanUsage() {
  const [loans, setLoans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiManager = createApiManager();
  const { navigateToStaffTransactions } = useNavigateTo();
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const fetchLoans = async () => {
      setIsLoading(true);
      try {
        const fetchedTransactions = await apiManager.getStaffsLoans();
        const data = fetchedTransactions.data.staffLoans;
        setLoans(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLoans();
  }, []);

  const handleOnclick = (id: string) => {
    navigateToStaffTransactions(id);
  };
  return (
    <div className="">
      <div className="flex flex-col py-5 mx-auto max-w-full rounded-2xl shadow-lg w-full max-md:mt-3.5 bg-white">
        <div className="flex gap-5 w-full px-8 lg:px-12 ">
          <div className="flex-auto text-xl font-medium tracking-normal leading-6 text-blue">
            Staff Transaction History
          </div>
          <div className="flex gap-2 items-center text-xs tracking-wide leading-4 text-brown">
            <div>Show All Active Loans</div>
            <div className="flex items-center justify-center">
              <label className="flex items-center cursor-pointer">
                <input
                  id="toggle"
                  type="checkbox"
                  className="hidden"
                  checked={isActive}
                  onChange={handleToggle}
                />
                <div
                  className={`indicator w-12 h-7 rounded-full relative ${
                    isActive ? "bg-brown" : "bg-[#E4E7EC]"
                  }`}
                >
                  <div
                    className={`dot absolute top-1 w-6 h-5 bg-white rounded-full transition ${
                      isActive ? "right-1 " : "left-1"
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <Divider />
        {isLoading ? (
          <div className="flex justify-center my-auto py-10">
            <Loader variant="pulse" />
          </div>
        ) : loans.length === 0 ? (
          <div className="text-center my-auto p-10 text-clayGray">
            No loan found
          </div>
        ) : (
          <div className="w-full overflow-auto">
            <Table>
              <TableHead className="border-b">
                <TableCell className="!pl-12">Name</TableCell>
                <TableCell>Credit Usage</TableCell>
                <TableCell>Monthly Payment</TableCell>
                <TableCell>Loan Balance</TableCell>
                <TableCell>Date/Time</TableCell>
                <TableCell>Status</TableCell>
                {/* <TableCell> </TableCell> */}
              </TableHead>
              <TableBody>
                {loans.slice(0, 5).map((loan: any, index) => {
                  const name = loan.user?.fullName || "Mohammed Aliyu";
                  const phoneNumber = loan.user?.phoneNumber || "07066048649";
                  const userId = loan.staffId;
                  const amountSpent = loan.amountSpent;
                  const loanLimit = loan.loanLimit;
                  const amountReceived = loan.amountReceived;
                  const loanBalance = amountReceived - amountSpent;
                  const loanDate = formatDate(loan.createdAt, "MMMM d, yyyy");
                  const loanTime = formatDate(loan.createdAt, "hh:mm:ss a");

                  const dueDate = calculateDueInDays(loan.dueDate);
                  const loanUsageProgress = calculatePercentage(
                    amountSpent,
                    loanLimit
                  );

                  return (
                    <TableRow key={index}>
                      <TableCell className="!pl-12">
                        <div className="">{name}</div>
                        <div className="mt-1 text-xs text-clayGray">
                          {phoneNumber}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col items-center text-xs">
                          <div>
                            ₦{amountSpent} of ₦{loanLimit}
                          </div>
                          {/* <div className="mt-2"> */}
                          <Progressbar
                            variant="solid"
                            value={loanUsageProgress}
                            className="mt-2 bg-gray-200"
                            color="primary"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>₦{amountReceived}</div>
                        <div className="mt-1 text-xs text-clayGray">
                          {dueDate}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="my-auto">₦{loanBalance}</div>
                      </TableCell>
                      <TableCell>
                        <div>{loanDate}</div>
                        <div className="mt-1 text-xs text-clayGray uppercase">
                          {loanTime}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          className="border-blue text-blue bg-transparent rounded-full"
                          onClick={() => handleOnclick(userId)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                      {/* <TableCell>
                      <img src={images.menuVerticalDotIcon} />
                    </TableCell> */}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default StaffLoanUsage;
