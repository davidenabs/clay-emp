import React, { useState } from "react";
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
import SwitchButton from "./components/switch-button";

const StaffTransactionHistory = () => {
  return (
    <>
      <div className="m-10 mb-20 max-md:max-w-full">
        <div className="flex flex-col py-5 mx-auto max-w-full rounded-2xl shadow-lg w-full max-md:mt-3.5 bg-white">
          <div className="overflow-x-auto">
            <Table>
              <TableHead className="border-b">
                <TableCell>Staff Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Card No.</TableCell>
                <TableCell>Store</TableCell>
                <TableCell>Date/Time</TableCell>
                <TableCell>Action</TableCell>
              </TableHead>
              <TableBody>
                {[...Array(10)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="">Hassan Abdul</div>
                      <div className="mt-1 text-xs text-clayGray">
                        Ref# 1203948384
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>08177777777</div>
                    </TableCell>
                    <TableCell>
                      <div>₦553,000,000.00</div>
                    </TableCell>
                    <TableCell>**** 4593</TableCell>
                    <TableCell>
                      <div className="my-auto">Sidi and Sons Supermarket</div>
                    </TableCell>
                    <TableCell>
                      <div>June 4, 2020</div>
                      <div className="mt-1 text-xs text-clayGray">
                        05:34:45 AM
                      </div>
                    </TableCell>
                    <TableCell>
                      <NavLink
                        to={"/loan-management/receipt"}
                        className="my-auto underline cursor-pointer"
                      >
                        View Transaction Details
                      </NavLink>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="px-12 py-6">
            <SwitchButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffTransactionHistory;
