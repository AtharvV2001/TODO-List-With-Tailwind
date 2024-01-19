import React from "react";
import { getDay, getMonth } from "../../utils";

const DateComponent = () => {
  const dateToDisplay = new Date();
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-[#6D697A] font-bold text-4xl">
        {dateToDisplay.getDate()}
      </p>
      <p className="text-[#DAE3EE] font-semibold text-lg">
        {getDay(dateToDisplay.getDay())}
      </p>
      <p className="text-[#6D697A] font-bold text-4xl">
        {getMonth(dateToDisplay.getMonth())}
      </p>
      <p className="text-[#DAE3EE] font-semibold text-lg">
        {dateToDisplay.getFullYear()}
      </p>
    </div>
  );
};

export default DateComponent;
