import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Schedule = () => (
  <div className="p-6 bg-white rounded-lg shadow border border-gray-200 ">
    <div className="flex justify-between">
      <h3 className="text-xl font-semibold text-gray-700">Upcoming Schedule</h3>
      <div className="p-2 border border-gray-400 text-sm rounded-lg flex justify-center self-center gap-2">
        <p>13th September, 2024</p>
        <div className="flex justify-center self-center">
          <IoIosArrowDown />
        </div>
      </div>
    </div>
    <div className="mt-4 space-y-2">
      <div className="flex flex-col justify-center self-center mt-4 gap-2">
        <h2 className="text-gray-700 text-sm">Priority</h2>
        <div className="m-1">
          <div className="border rounded-lg pb-2 p-2 border-gray-200 bg-gray-100 flex justify-between ">
            <div className="pl-5">
              <p>Review Candidate Applications</p>
              <small className="text-gray-500">Today 11:30 AM</small>
            </div>
            <div className="flex justify-center self-center gap-5 pr-5">
              <RxDotsHorizontal className="text-gray-500 text-2xl hover:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center self-center mt-4">
        <h2 className="text-gray-700 text-sm mb-2">Other</h2>
        <div className="m-1">
          <div className="border rounded-lg pb-2 p-2 border-gray-200 bg-gray-100 flex justify-between ">
            <div className="pl-5">
              <p>Interview with Candidates</p>
              <small className="text-gray-500">Today 10:30 AM</small>
            </div>
            <div className="flex justify-center self-center gap-5 pr-5">
              <RxDotsHorizontal className="text-gray-500 text-2xl hover:text-gray-900" />
            </div>
          </div>
        </div>
        <div className="m-1">
          <div className="border rounded-lg pb-2 p-2 border-gray-200 bg-gray-100 flex justify-between ">
            <div className="pl-5 w-4/5">
              <p >Short Meeting with Product Designer from IT Department</p>
              <small className="text-gray-500">Today 9:15 AM</small>
            </div>
            <div className="flex justify-center self-center gap-5 pr-5">
              <RxDotsHorizontal className="text-gray-500 text-2xl hover:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button className="w-full bg-red-500 text-white rounded-lg mt-4 py-2">
        Create a new Schedule
      </button>
    </div>
  </div>
);

export default Schedule;
