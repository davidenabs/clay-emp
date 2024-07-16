import React from "react";
import { images } from "../../../../assets";

const Card = ({ title, value, icon, color }) => {
  return (
    <div className="flex justify-between items-center p-6 rounded-lg shadow-lg py-10 bg-white h-6 w3/12 max-md:ml-0max-md:w-fullmax-md:px-5">
      <div className={`self-center text-${color} text-2xl font-semibold`}>
        {title} <br></br> {value}
      </div>
      <div>
        <img src={icon} className="w-" />
      </div>
    </div>
  );
};

function TopCards({ staffs }) {
  const stats = {
    requests: staffs.filter((staff: any) => staff.user.status === "requested")
      .length,
    inProgress: staffs.filter((staff: any) => staff.user.status === "pending")
      .length,
    approved: staffs.filter((staff: any) => staff.user.status === "approved")
      .length,
    rejected: staffs.filter((staff: any) => staff.user.status === "rejected")
      .length,
  };

  const data = [
    {
      title: "Requests",
      value: stats.requests,
      icon: images.horizontalMenuIcon,
      color: "lightBrown",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: images.horizontalMenuIcon,
      color: "yellow-400",
    },
    {
      title: "Approved",
      value: stats.approved,
      icon: images.horizontalMenuIcon,
      color: "green-600",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      icon: images.horizontalMenuIcon,
      color: "red-500",
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-x-2 lg:gap-8">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

export default TopCards;
