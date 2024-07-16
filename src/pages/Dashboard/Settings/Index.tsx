import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomizedInput from "../components/customizedInput";
import Button from "../../../components/form/button";
import { images } from "../../../assets";

const Settings = () => {
  const handleRedirect = () => {
    // location.href = "/settings/profile";
  };

  return (
    <div className="mx-10 my-10 max-md:max-w-full">
      <div className="flex flex-col items-start px-16 py-10 mb-10 rounded-2xl max-md:px-5 bg-white">
        <div className="text-xl font-semibold leading-7 text-brown">
          Settings
        </div>
        <div className="text-sm leading-5 text-clayGray">
          Control your profile setup and integrations
        </div>

        <div className="flex gap-5 pr-20 mt-5 max-w-full text-base leading-6 text-center whitespace-nowrap w-[1096px] max-md:flex-wrap max-md:pr-5">
          <div className="flex flex-col justify-center pt-4 text-blue">
            <div className="self-center">Profile</div>
            <div className="shrink-0 mt-4 h-px bg-blue w-20" />
          </div>
          <div className="flex flex-col justify-center pt-4 text-[color(display-p3_0.2039_0.251_0.3294)]">
            <div className="self-center">Team</div>
            <div className="shrink-0 mt-4 h-px" />
          </div>
        </div>

        <div className="self-start mt-4 w-full max-w-[1096px] max-md:max-w-full">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="flex flex-col w-full">
              <div className="flex flex-col grow p-6 w-full rounded-xl border border-gray-100 border-solid leading-[145%] max-md:px-5 max-md:mt-5 max-md:max-w-full">
                <div className="text-base font-medium text-brown max-md:max-w-full">
                  Profile Settings
                </div>
                <div className="mt-2 text-sm text-clayGray max-md:max-w-full">
                  These are your personal details, they are visible to the
                  public
                </div>
                <div className="flex gap-4 justify-center items-center px-4 py-5 mt-8 rounded-xl border border-gray-300 border-dashed max-md:flex-wrap relative">
                  <div className="absolute top-0  z-0 inset-0  left-0 h-full w-[170px] rounded-r-[40px] rounded-l-xl bg-[#F9E1CC]"></div>
                  <img
                    src={images.pngFileIcon}
                    className="z-10 shrink-0 self-stretch my-auto w-7 aspect-square"
                  />
                  <div className="flex flex-col flex-1 z-10 self-stretch">
                    <div className="text-base font-medium">
                      Uploading Profile Image
                    </div>
                    <div className="shrink-0 mt-1.5 rounded-xl h-[5px] bg-gray-100 w[172px]">
                      <div className="shrink-0 mt1.5 rounded-xl h-[5px] bg-lightBrown w-[172px]" />
                    </div>
                    <div className="mt-1.5 text-xs text-clayGray">
                      Profilepic2.PNG |
                      <span className="text-slate-600"> 45% Completed</span>
                    </div>
                  </div>
                  <img
                    src={images.closeIcon}
                    className="shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                </div>
                <div className="mt-6 text-base font-medium text-brown max-md:max-w-full">
                  Full Name
                </div>

                <CustomizedInput
                  divClassName={"mt-1 border-gray-300 rounded-md"}
                  placeholder={"Oyinkansola Soleye"}
                  icon={images.userIcon}
                  type="text"
                />

                <div className="mt-6 text-base font-medium text-brown max-md:max-w-full">
                  Email
                </div>

                <CustomizedInput
                  divClassName={"mt-1 border-gray-300 rounded-md"}
                  placeholder={"oyinkansola269@gmail.com"}
                  icon={images.mailIcon}
                  type="text"
                />

                <div className="flex gap-4 justify-center mt-8 text-xs font-bold text-center max-md:flex-wrap max-md:max-w-full">
                  <Button className="flex-1 justify-center items-center px-6 py-4 rounded-2xl border-2 border-solid border-slate-600 text-blue hover:bg-gray-100 hover:text-blue bg-transparent max-md:px-5">
                    Cancel
                  </Button>
                  <Link to={"/settings/profile"}>
                    <Button
                      onClick={handleRedirect}
                      className="flex-1 justify-center items-center px-6 py-4 rounded-2xl bgblue max-md:px-5"
                    >
                      Save Changes
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col justify-between p-6 w-full text-base font-medium leading-6 rounded-xl border border-gray-100 border-solid text-brown max-md:px-5 max-md:mt-5 max-md:max-w-full">
                <div className="max-md:max-w-full">Update Password</div>
                <div className="mt-2 text-sm text-clayGray max-md:max-w-full">
                  Enter your current password to make update
                </div>
                <div className="mt-8 max-md:max-w-full">Current Password</div>

                <CustomizedInput
                  divClassName={"mt-1 border-gray-300 rounded-md"}
                  placeholder={"Enter Password"}
                  icon={images.lockIcon}
                  type="text"
                />

                <div className="mt-6 max-md:max-w-full">New Password</div>

                <CustomizedInput
                  divClassName={"mt-1 border-gray-300 rounded-md"}
                  placeholder={"Enter New Password"}
                  icon={images.lockIcon}
                  type="text"
                />

                <div className="justify-center self-end  mt-14 text-xs ax-md:px-5 max-md:mt-10">
                  <Button className="px-6 py-4 rounded-md">Save Changes</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
