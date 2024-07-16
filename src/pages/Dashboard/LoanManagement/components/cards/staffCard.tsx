import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../../../utils/dateUtils";
import { splitFullName } from "../../../../../utils/helpers";
import createApiManager from "../../../../../managers/apiManager";
import useNavigateTo from "../../../../../hooks/useNavigateTo";
import { Loader } from "rizzui";
import { images } from "../../../../../assets";
import Breadcrumb from "../../../../../components/breadcrumb";
import Divider from "../../../../../components/divider";

function StaffCard(props) {
  const staffId = props.staffId;
  const [staff, setStaff] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const apiManager = createApiManager();
  const { navigateToStaffTransactions } = useNavigateTo();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const fetchStaff = async () => {
      setIsLoading(true);
      try {
        const fetchedTransactions = await apiManager.getStaffById(staffId);
        const data = fetchedTransactions.data;
        const { firstName, lastName } = splitFullName(data["fullName"]);
        setFirstName(firstName);
        setLastName(lastName);
        setStaff(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaff();
  }, [staffId]);

  const handleOnclick = (id) => {
    navigateToStaffTransactions(id);
  };

  return (
    <div className="flex flex-col py-5 px-12 mx-auto max-w-full rounded-2xl shadow-lg w-full max-md:mt-3.5 bg-white">
      <Breadcrumb
        items={[
          { name: "Dashboard" },
          { name: "Loan Management" },
          { name: "Customer Details", isActive: true },
        ]}
      />

      {isLoading ? (
        <div className="flex justify-center my-auto py-10">
          <Loader variant="pulse" />
        </div>
      ) : staff === null ? (
        <div className="text-center my-auto p-10 text-clayGray">
          No user found
        </div>
      ) : (
        <>
          <div className="flex gap-3 items-start self-start pb-2 mt-7 ml-0 max-md:flex-wrap">
            <div className="relative">
              <img
                src={images.oyinAvatar}
                className="shrink-0 w-14 aspect-square"
              />
              <div className="flex absolute bottom-0 right-0 rounded-full bg-blue w-fit p-1 justify-center">
                <img
                  src={images.checkIcon}
                  className="shrink-0 w-[10px] aspect-square"
                />
              </div>
            </div>

            <div className="flex flex-col mt-2 max-md:max-w-full">
              <div className="text-3xl font-semibold tracking-tight leading-8 max-md:max-w-full">
                {staff["fullName"]}
              </div>
              <div className="text-sm leading-5 text-clayGray max-md:max-w-full">
                {staff["email"]}
              </div>
            </div>
          </div>

          <div className="flex gap-5 border-b mt-5  w-6/12  text-sm font-medium leading-5 text-center w max-md:flex-wrap max-md:pr-5">
            <div className="flex flex-col justify-center pt-4 px-4 whitespace-nowrap border-b border-b-lightBrown text-lightBrown">
              <div className="self-center">Overview</div>
              <div className="shrink-0 mt-4 h-px" />
            </div>
            <div className="flex flex-col justify-center pt-4  px-4 text-[color(display-p3_0.2039_0.251_0.3294)]">
              <div className="self-center">Transaction History</div>
              <div className="shrink-0 mt-4 h-px" />
            </div>
          </div>

          <div className="self-center mt-5 w-full max-md:max-w-full">
            <div className="lg:grid lg:grid-cols-2 gap-5 ">
              <div className="lg:col-span-1 w-full">
                <div className="flex flex-col leading-[145%] pb-[200px] max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 items-center px-6 py-3.5 border-b border-solid border-slate-100 max-md:flex-wrap max-md:px-5">
                    <img
                      src={images.avatarIcon}
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col flex-1 self-stretch max-md:max-w-full">
                      <div className="text-xs text-clayGray max-md:max-w-full">
                        First Name
                      </div>
                      <div className="mt-1 text-base font-medium max-md:max-w-full">
                        {firstName}
                      </div>
                    </div>
                    <img
                      src={images.copyIcon}
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                  <div className="flex gap-5 items-center px-6 py-3.5 border-b border-solid border-slate-100 max-md:flex-wrap max-md:px-5">
                    <img
                      src={images.avatarIcon}
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col flex-1 self-stretch max-md:max-w-full">
                      <div className="text-xs text-clayGray max-md:max-w-full">
                        Last Name
                      </div>
                      <div className="mt-1 text-base font-medium max-md:max-w-full">
                        {lastName}
                      </div>
                    </div>
                    <img
                      src={images.copyIcon}
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 w-full">
                <div className="flex flex-col grow max-md:max-w-full">
                  <div className="flex gap-5 items-center px-6 py-3.5 border-b border-solid border-slate-100 leading-[145%] max-md:flex-wrap max-md:px-5">
                    <img
                      src={images.usersIcon}
                      className="shrink-0 self-stretch my-auto w-5 aspect-square"
                    />
                    <div className="flex flex-col flex-1 self-stretch max-md:max-w-full">
                      <div className="text-xs text-clayGray max-md:max-w-full">
                        Customer ID
                      </div>
                      <div className="mt-1 text-base font-medium max-md:max-w-full">
                        {staff["publicId"]}
                      </div>
                    </div>
                    <img
                      src={images.copyIcon}
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                  <div className="flex gap-5 items-center px-6 py-3.5 whitespace-nowrap border-b border-solid border-slate-100 max-md:flex-wrap max-md:px-5">
                    <img
                      src={images.mailIcon}
                      className="shrink-0 self-stretch my-auto w-5 aspect-square"
                    />
                    <div className="flex flex-col flex-1 self-stretch max-md:max-w-full">
                      <div className="text-xs leading-4 text-clayGray max-md:max-w-full">
                        Emails
                      </div>
                      <div className="mt-1 text-base font-medium max-md:max-w-full">
                        {staff["email"]}
                      </div>
                    </div>
                    <img
                      src={images.copyIcon}
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                  <div className="flex z-10 gap-5 items-center px-6 py-3.5 border-b border-solid border-slate-100 leading-[145%] max-md:flex-wrap max-md:px-5">
                    <img
                      src={images.dialerIcon}
                      className="shrink-0 self-stretch my-auto w-5 aspect-square"
                    />
                    <div className="flex flex-col flex-1 self-stretch max-md:max-w-full">
                      <div className="text-xs text-clayGray max-md:max-w-full">
                        Phone Number
                      </div>
                      <div className="mt-1 text-base font-medium max-md:max-w-full">
                        {staff["phoneNumber"]}
                      </div>
                    </div>
                    <img
                      src={images.copyIcon}
                      className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                  <div className="flex gap-5 px-6 py-3.5 border-b border-gray-200 border-solid leading-[145%] max-md:flex-wrap max-md:px-5">
                    <img
                      src={images.calenderIcon}
                      className="shrink-0 my-auto w-5 aspect-square"
                    />
                    <div className="flex flex-col flex-1 max-md:max-w-full">
                      <div className="text-xs text-clayGray max-md:max-w-full">
                        Date Created
                      </div>
                      <div className="mt-1 text-base font-medium max-md:max-w-full">
                        {formatDate(staff["createdAt"], "EEEE, MMM d, yyyy")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StaffCard;
