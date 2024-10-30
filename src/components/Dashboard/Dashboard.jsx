import React from "react";
// import AvailablePositionCard from "./components/AvailablePositionCard";
import JobOpenCard from "./components/JobOpenCard";
import NewEmployeesCard from "./components/NewEmployeesCard";
import TotalEmployeesCard from "./components/TotalEmployeesCard";
import TalentRequestCard from "./components/TalentRequestCard";
import Announcement from "./components/Announcement";
import Activity from "./components/Activity";
import Schedule from "./components/Schedule";

const Dashboard = () => {
  return (
    <div className="p-6 md:p-10 w-full">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="flex lg:flex-row gap-4 flex-col ">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* <AvailablePositionCard /> */}
            <div className="p-6 bg-pink-100 rounded-lg shadow text-base flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-700">
                Available Position
              </h3>
              <p className="text-3xl font-bold text-gray-800">24</p>
              <p className="text-red-600">4 Urgently needed</p>
            </div>
            <JobOpenCard />
            <NewEmployeesCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <TotalEmployeesCard />
            <TalentRequestCard />
          </div>
          <Announcement />
        </div>
        <div className="flex lg:flex-col  flex-col w-full gap-4 lg:w-2/5">
          <Activity />
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
