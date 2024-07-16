import React from "react";
import { images } from "../../../assets";
import CustomizedInput from "./customizedInput";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-center self-stretch px-8 py-4 backdrop-blur-[32px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <CustomizedInput icon={images.searchIcon} placeholder="Search..." divClassName="md:hidden lg:block" />
        <div className="flex gap-4 items-center">
          <img
            src={images.ngFlag}
            className="shrink-0 self-stretch my-auto aspect-square w-[31px]"
          />
          <img
            src={images.bellIcon}
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <img
            src={images.inboxIcon}
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div className="flex gap-4 justify-center self-stretch">
            <div className="">
              <img
                src={images.oyinAvatar}
                className="shrink-0 aspect-square w-[45px]"
              />
            </div>
            <div className="">
              <div className="flex flex-col">
                <div className="text-base leading-7 text-brown">
                  Oyinkansola Soleye
                </div>
                <div className="text-sm leading-4 text-[color(display-p3_0.5412_0.5725_0.651)]">
                  Marketing Administrator
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
