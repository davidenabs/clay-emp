// StaffList.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Divider from "../../../../components/divider";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../../../../components/table/table";
import useSearch from "../../../../hooks/useSearch";
import useNavigateTo from "../../../../hooks/useNavigateTo";
// import Pagination from "../pagination";
import Pagination from "../../LoanManagement/components/pagination";
import InputField from "../../../../components/form/input";
import { formatDate, formatTime } from "../../../../utils/dateUtils";
import { Loader } from "rizzui";

// const getRandomStatus = () => {
//   const statuses = ["Requested", "Pending", "Approved", "Rejected"];
//   return statuses[Math.floor(Math.random() * statuses.length)];
// };

const statusColors = {
  requested: "#DF9757",
  pending: "#FFD329",
  rejected: "#D70000",
  approved: "#409900",
};

function StaffList({
  staffs,
  totalPages,
  isLoading,
  currentPage,
  setCurrentPage,
}) {
  const { navigateToStaffProfile } = useNavigateTo();
  const [activeTab, setActiveTab] = useState("All");
  const {
    searchQuery,
    setSearchQuery,
    filteredData: filteredStaffs,
  } = useSearch(staffs, [
    "staff.user.publicId",
    "staff.user.fullName",
    "staff.user.email",
    "staff.user.phoneNumber",
    "staff.profile.bvn",
  ]);

  const handleOnclick = (id: string) => {
    navigateToStaffProfile(id);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter staffs based on active tab
  const tabs = ["All", "Requests", "Pending", "Approved", "Rejected"];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const displayedStaffs =
    activeTab === "All"
      ? filteredStaffs
      : filteredStaffs.filter(
          (staff) => staff.user.status.toLowerCase() === activeTab.toLowerCase()
        );

  return (
    <div className="flex flex-col py-5 mx-auto max-w-full rounded-2xl shadow-lg w-full bg-white">
      {/* Tabs */}
      <div className="flex gap-5 lg:gap-16 px-12 w-full md:overflow-x-auto text-lg font-medium transition text-clayGray max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        {tabs.map((tab) => (
          <button
            type="button"
            onClick={() => handleTabChange(tab)}
            key={tab}
            className={`flex flex-col self-center ${
              activeTab === tab ? "text-brown " : ""
            }`}
          >
            <div className="self-center">{tab}</div>
            {activeTab === tab && (
              <div className="self-center border-solid border-lightBrown border-b-4 rounded-lg w-full" />
            )}
          </button>
        ))}
      </div>
      <div className="flex justify-end px-8 lg:px-12 py4">
        <InputField
          label=""
          type="search"
          name="search"
          value={searchQuery}
          onChange={(e: any) => setSearchQuery(e.target.value)}
          placeholder={"Search staffs..."}
          error={""}
          className="!rounded-full !border-clayGray"
        />
      </div>
      <Divider />

      {isLoading ? (
        <div className="flex justify-center my-auto py-10">
          <Loader variant="pulse" />
        </div>
      ) : displayedStaffs.length === 0 ? (
        <div className="text-center my-auto p-10 text-clayGray">
          No staffs found
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHead className="border-b !text-blue">
              <TableCell className="pl-12">S/N</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>BVN</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Staff ID</TableCell>
              <TableCell>Date/Time</TableCell>
              <TableCell>Action</TableCell>
            </TableHead>
            <TableBody>
              {displayedStaffs.map((staff, index) => {
                const serialNumber = (currentPage - 1) * 10 + index + 1;
                const name = staff.user.fullName || "N/A";
                const phoneNumber = staff.user.phoneNumber || "N/A";
                const bvn = staff.profile.bvn || "N/A";
                const status = staff.user.status;
                const staffId = staff.user.publicId;
                const createdAt = staff.user.createdAt || new Date();

                return (
                  <TableRow key={index} className="border-b border-gray-100">
                    <TableCell className="pl-12">{serialNumber}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{phoneNumber}</TableCell>
                    <TableCell>{bvn}</TableCell>
                    <TableCell>
                      <div
                        className="text-white p-1 capitalize text-sm px-2 text-center rounded-full"
                        style={{ backgroundColor: statusColors[status] }}
                      >
                        {status}
                      </div>
                    </TableCell>
                    <TableCell>{staffId}</TableCell>
                    <TableCell>
                      <div>{formatDate(createdAt)}</div>
                      <div className="mt-1 text-xs text-clayGray">
                        {formatTime(createdAt)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => handleOnclick(staffId)}
                        className="my-auto underline cursor-pointer"
                      >
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default StaffList;
