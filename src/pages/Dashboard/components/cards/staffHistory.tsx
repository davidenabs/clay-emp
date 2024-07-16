import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import createApiManager from "../../../../managers/apiManager";
import { Loader } from "rizzui";
import { formatDate, formatTime } from "../../../../utils/dateUtils";
import { Button } from "rizzui";
import useNavigateTo from "../../../../hooks/useNavigateTo";

function StaffHistoryCard() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiManager = createApiManager();
  const { navigateToLoanManagementShow } = useNavigateTo();

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      try {
        const fetchedTransactions = await apiManager.getStaffSpending(); // Use getStaffs method
        const data = fetchedTransactions.data.transactions;
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []); // Empty dependency array to fetch data on component mount

  const handleOnclick = (id: string) => {
    navigateToLoanManagementShow(id);
  };

  return (
    <div className="flex flex-col mt-10 mb-20 px-12 py-7 rounded-2xl bg-white shadow-lg">
      <div className="flex gap-5 justify-between px-3 py-5 mt-1.5 max-w-full w-[1064px] max-md:flex-wrap">
        <div className="flex flex-col">
          <div className="text-2xl font-medium leading-10 text-[color(display-p3_0.2941_0.149_0.051)]">
            Staff Purchase History
          </div>
          <div className="text-base leading-7 text-[color(display-p3_0.5412_0.5725_0.651)]">
            0 New Orders this month
          </div>
        </div>
        <div></div>
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <Loader variant="pulse" />
        </div>
      ) : transactions.length === 0 ? (
        <div className="text-center my-auto p-10 text-clayGray"> No transactions found</div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHead className="border-b !text-blue">
              <TableRow>
                <TableCell className="pl12">STORE LOCATION</TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell>STAFF ID</TableCell>
                <TableCell>AMOUNT</TableCell>
                <TableCell>DATE</TableCell>
                <TableCell>TIME</TableCell>
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.slice(0, 10).map((transaction: any, index) => {
                const merchant = transaction.merchantData;
                const formattedDate = formatDate(transaction.createdAt);
                const formattedTime = formatTime(transaction.createdAt);

                return (
                  <TableRow
                    key={index}
                    className="mt-5 text-base border-b border-gray-100 text-brown"
                  >
                    <TableCell className="py-5 my-auto">
                      {merchant["fullName"]}
                    </TableCell>
                    <TableCell className="py-5 my-auto">
                      {transaction.transactionId}
                    </TableCell>
                    <TableCell className="py-5 my-auto">
                      {transaction.userId}
                    </TableCell>
                    <TableCell className="py-5 my-auto">
                      ₦{transaction.transactionAmount}
                    </TableCell>
                    <TableCell className="py-5 my-auto">
                      {formattedDate}
                    </TableCell>
                    <TableCell className="py-5 my-auto">
                      {formattedTime}
                    </TableCell>
                    <TableCell className="">
                      <Button
                        className="border-blue text-blue bg-transparent rounded-full"
                        onClick={() => handleOnclick(transaction.transactionId)}
                        // isLoading={true}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default StaffHistoryCard;
