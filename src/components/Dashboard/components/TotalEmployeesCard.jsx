import React from "react";
import Prof1 from "../../../assets/prof.png";
import Prof2 from "../../../assets/prof2.png";

const TotalEmployeesCard = () => (
  <div className="p-6 bg-white rounded-lg shadow flex justify-between border border-gray-200 ">
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-semibold text-gray-700">Total Employees</h3>
      <p className="text-3xl font-bold text-gray-800">216</p>
      <div>
        <p className="text-gray-500">120 Men</p>
        <p className="text-gray-500">96 Women</p>
      </div>
    </div>
    <div className="flex justify-center flex-col self-center">
      <img src={Prof1} alt="Profit" className=" w-24 flex justify-center self-center" />
      <p className="text-green-600 mt-8">+2% Past month</p>
    </div>
  </div>
);

export default TotalEmployeesCard;
