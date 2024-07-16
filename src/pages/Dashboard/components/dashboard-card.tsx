import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ iconSrc, value, label, bgColor, route = "" }) => {
  return (
    <Link to={route} className={`flex flex-col lg:mb-0 sm:mb-3`}>
      <div
        className={`flex grow justify-between px-6 py-9 w-full h-[150px] rounded-2xl text-[#141B34] shadow-xl max-md:px-5 max-md:mt-5 bg-white`}
      >
        {/* */}
        <div
          className={`flex py-3 px w-20 items-center justify-center rounded-2xl ${bgColor}`}
        >
          <img
            src={iconSrc}
            className={`shrink-0 aspect-square w-[32px]`}
            alt={label}
          />
        </div>
        <div className="flex flex-col items-end my-auto">
          <div className="text-3xl font-medium">{value}</div>
          <div className="mt-3 text-base text-right">{label}</div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;
