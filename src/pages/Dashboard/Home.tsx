import React, { useState } from "react";
import { images } from "../../assets";
import { Link, NavLink } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import DashboardCard from "./components/dashboard-card";
import BasicLineChart from "./components/chart";

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "../../components/table/table";
import { useAtom } from "jotai";
import { apiSuccessAtom } from "../../atoms/apiAtoms";
import StaffHistoryCard from "./components/cards/staffHistory";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const cardData = [
  {
    iconSrc: images.menuIcon,
    value: "24",
    label: "Total Number of Staff",
    bgColor: "bg-[#37474F]",
    route: "/staff-management",
  },
  {
    iconSrc: images.userWhiteIcon,
    value: "5600",
    label: "Orders",
    bgColor: "bg-[#F7CB9B]",
    route: "/loan-management/staff-transaction-history",
  },
  {
    iconSrc: images.userMultipleIcon,
    value: "₦56,000.00",
    label: "Repayment Balance",
    bgColor: "bg-[#FFA5A5]",
    route: "/loan-management",
  },
  {
    iconSrc: images.moneyBagIcon,
    value: "₦10,000.00",
    label: "Aggregated Credit Limit",
    bgColor: "bg-[#444683]",
    route: "",
  },
];

const Home = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [success] = useAtom(apiSuccessAtom);

  return (
    <>
      {/* Cards */}
      <div className="z-10 md:-mt-10 sm:-mt-20 px-6 md:px-12 lg:grid lg:grid-cols-4 lg:gap-8">
        {cardData.map((item, key) => (
          <DashboardCard
            key={key}
            iconSrc={item.iconSrc}
            value={item.value}
            label={item.label}
            bgColor={item.bgColor}
            route={item.route}
          />
        ))}
      </div>

      <div className="px-6 lg:px-12 mt-10 max-md:gap-0">
        <div className="lg:flex :flex-col gap-5 ">
          <div className="lg:w-[1160px] sm:w-full px-6 lg:px-12 py-6 bg-white rounded-lg shadow-lg">
            <div className="flex gap- justify-between w-full max-md:flex-wrap">
              <div className="flex flex-col">
                <div className="text-4xl font-bold tracking-tighter leading-10 text-[color(display-p3_0.2941_0.149_0.051)]">
                  <span className="">₦</span>
                  <span className="">37,580.00</span>
                </div>
                <div className="flex gap-2.5 mt-2.5">
                  <div className="grow text-sm font-medium tracking-tight leading-6 text-[color(display-p3_0.6392_0.6824_0.8157)]">
                    Total Spent
                  </div>
                  <img
                    src={images.arrowCapUpIcon}
                    className="shrink-0 self-start w-2 aspect-[2.63] fill-[color(display-p3_0.9216_0.5765_0.2863)]"
                  />
                  <div className="text-xs font-bold tracking-tight leading-5 text-center text-[color(display-p3_0.9216_0.5765_0.2863)]">
                    +2.45%
                  </div>
                </div>
              </div>

              <div className="flex flex-col self-end max-w-full leading-10 text-base whitespace-nowrap w-[261px]">
                <div className="flex gap-5">
                  <div className="flex flex-1 gap-2">
                    <input
                      type="radio"
                      className="shrink-0 rounded-full accent-lightBrown w-[18px] focus:accent-brown"
                    />
                    <div>Daily</div>
                  </div>
                  <div className="flex flex-1 gap-2">
                    <input
                      type="radio"
                      className="shrink-0 rounded-full accent-lightBrown w-[18px] focus:accent-brown"
                    />
                    <div className="my-auto">Week</div>
                  </div>
                  <div className="flex flex-1 gap-2">
                    <input
                      type="radio"
                      className="shrink-0 rounded-full accent-lightBrown w-[18px] focus:accent-brown"
                    />
                    <div className="my-auto">Month</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {/* chart */}

              <BasicLineChart />
            </div>
          </div>
          <div className="lg:w-[387px]  sm:w-full">
            <div className="flex flex-col grow max-md:mt-7">
              <div className="shrink-0 rounded-lg shadow-lg bg-white h-[346px] w-ful flex item-center justify-center ">
                <Calendar
                  className="!border-0"
                  onChange={onChange}
                  value={value}
                />
              </div>
              <div className="shrink-0 mt-6 rounded-3xl h[169px] bg-brown">
                <div className="flex flex-col px-6 pt-2.5 pb-6 rounded-3xl max-w-[387px] text-white">
                  <div className="flex gap-5 justify-between items-start">
                    <div className="flex flex-col mt-2">
                      <div className="text-base">Next Repayment</div>
                      <div className="mt-3.5 text-2xl font-semibold">
                        ₦1,200.00
                      </div>
                    </div>
                    <img
                      src={images.nairaIcon}
                      className="shrink-0 aspect-square w-[41px]"
                    />
                  </div>
                  <img
                    src={images.marketTrend}
                    className="self-center mt-1 w-full aspect-[4.55] "
                  />
                  <div className="text-right">30th May, 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Staff list */}
        <StaffHistoryCard />
      </div>
    </>
  );
};

export default Home;
