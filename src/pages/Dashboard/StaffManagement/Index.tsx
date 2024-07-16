import React, { useEffect, useState } from "react";
import TopCards from "./components/topCards";
import StaffList from "./components/staffList";
import createApiManager from "../../../managers/apiManager";

const StaffManagement = () => {
  const [staffs, setStaffs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const apiManager = createApiManager();

  useEffect(() => {
    const fetchStaffs = async (page) => {
      setIsLoading(true);
      try {
        const fetchedStaffs = await apiManager.getStaffs(page, itemsPerPage);
        const data = fetchedStaffs.data.staffs;
        setStaffs(data);
        setTotalPages(fetchedStaffs.data.totalPages);
      } catch (error) {
        console.error("Error fetching staffs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaffs(currentPage);
  }, [currentPage]);

  return (
    <div className="space-y-10 px-12 -mt-10 max-md:max-w-full">
      <TopCards staffs={staffs} />
      <StaffList
        staffs={staffs}
        totalPages={totalPages}
        isLoading={isLoading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div>&nbsp;</div>
    </div>
  );
};

export default StaffManagement;
