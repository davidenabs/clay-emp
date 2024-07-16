import React, { useState } from "react";

const SwitchButton = () => {
  const [selectedItem, setSelectedItem] = useState("Today");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex justify-between items-center pl6 h-7 px8 my-auto text-xs tracking-wide leading- text-[#717579] bg-[#EFF6FF] rounded-2xl max-w-[347px]">
      <div
        className={`cursor-pointer ${
          selectedItem === "Monthly"
            ? "bg-[#7E8299] h-full px-8 rounded-2xl flex items-center text-white "
            : "px-8"
        }`}
        onClick={() => handleItemClick("Monthly")}
      >
        Monthly
      </div>
      <div
        className={`cursor-pointer ${
          selectedItem === "Weekly"
            ? "bg-[#7E8299] h-full px-8 rounded-2xl flex items-center text-white "
            : "px-8"
        }`}
        onClick={() => handleItemClick("Weekly")}
      >
        Weekly
      </div>
      <div
        className={`cursor-pointer  ${
          selectedItem === "Today"
            ? "bg-[#7E8299] h-full px-8 rounded-2xl flex items-center text-white "
            : "px-8"
        }`}
        onClick={() => handleItemClick("Today")}
      >
        Today
      </div>
    </div>
  );
};

export default SwitchButton;
