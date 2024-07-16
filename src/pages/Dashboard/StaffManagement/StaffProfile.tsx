import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { images } from "../../../assets";
import Divider from "../../../components/divider";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../../../components/table/table";
import Breadcrumb from "../../../components/breadcrumb";
import CustomizedInput from "../components/customizedInput";
import Button from "../../../components/form/button";
import PopupModal from "../../../components/popup";
import createApiManager from "../../../managers/apiManager";
import { formatDate } from "../../../utils/dateUtils";
import OTPInput from "./components/otpCard";

const StaffProfile = () => {
  const [staff, setStaff] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const apiManager = createApiManager();
  const { staffId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaff = async () => {
      setIsLoading(true);
      try {
        const fetchedStaff = await apiManager.getStaffById(staffId);
        const data = fetchedStaff.data;
        setStaff(data);
      } catch (error) {
        console.error("Error fetching staffs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaff();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const data = [
    {
      title: "Date joined",
      value: formatDate(staff["createdAt"]),
    },
    {
      title: "Mobile Number",
      value: `+234${staff["phoneNumber"]}`,
    },
    {
      title: "State of Residence",
      value: staff["state"] || "N/A",
    },
    {
      title: "Community",
      value: staff["community"] || "N/A",
    },
  ];

  return (
    <div className="mx-10 my-10 max-md:max-w-full">
      <PopupModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <OTPInput />
      </PopupModal>
      <div className="flex flex-col mb-10 py-5 px-12 max-w-full rounded-2xl shadow-lg w-full max-md:mt-3.5 bg-white">
        {/* breadcrumb */}
        <Breadcrumb
          items={[
            { name: "Dashboard" },
            { name: "Staff Management" },
            { name: "Staff Confirmation", isActive: true }, // Optionally, you can pass isActive to highlight the current page
          ]}
        />

        <div className="flex gap-3 items-start self-start pb-2 mt-7 ml-0 max-md:flex-wrap">
          <div className="flex flex-col mt-2 max-md:max-w-full">
            <div className="text-2xl font-semibold tracking-tight leading-8 max-md:max-w-full">
              {staff["fullName"]}
            </div>
            <div className="text-sm leading-5 text-clayGray max-md:max-w-full">
              {staff["publicId"]}
            </div>
          </div>
        </div>

        <div className="self-center mt-5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex gap-10 w-6/12 max-md:w-full">
              <div>
                <img src={images.profile} className="w-[320px]" />
              </div>

              <div className="w-full">
                <div className="font-semibold">Bio</div>
                <Table>
                  {data.map((item) => (
                    <TableRow className="p-0 text-[#333543] text-sm">
                      <TableCell className="!px-0">{item.title}:</TableCell>
                      <TableCell className="!px-0">{item.value}</TableCell>
                    </TableRow>
                  ))}
                </Table>
                <div className="font-normal mt-5">Input BVN</div>
                <div>
                  <CustomizedInput
                    placeholder={"Enter a valid BVN"}
                    icon={""}
                    divClassName="max-w-full mt-2"
                    inputClassName="w-full"
                  />
                </div>
                <div className="bg-[#E7F6EC] text-green-600 mt-2 w-fit px-3 py-1 rounded-full">
                  <div className="flex gap-2 items-center">
                    <img src={images.checkCircleIcon} className="w-[20px]" />
                    Valid Number
                  </div>
                </div>
                <div className="text-center my-10">
                  {/* Verify BVN */}
                  <Button onClick={openModal}>Request OTP</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;

// steps:
// verify bvn 
// if successful
//   show input for phone number
//   button will change to 'Request OTP'
//   if successful
//     show modal for user to enter otp
//     verify otp