import React from "react";
import { GoPin } from "react-icons/go";
import { RxDotsHorizontal } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Announcement = () => (
  <div className="p-6 bg-white rounded-lg shadow border border-gray-200 ">
    <div className="flex justify-between">
      <h3 className="text-xl font-semibold text-gray-700">Announcement</h3>
      <div className="p-2 border border-gray-400 text-sm rounded-lg flex justify-center self-center gap-2">
        <p>13th September, 2024</p>
        <div className="flex justify-center self-center">

        <IoIosArrowDown />
        </div>
      </div>
    </div>
    <div className="space-y-2 mt-4">
      <div className="border rounded-lg pb-2 p-2 border-gray-200 bg-gray-100 flex justify-between ">
        <div className="pl-5">
          <p>Outing schedule for every department</p>
          <small className="text-gray-500">5 Minutes ago</small>
        </div>
        <div className="flex justify-center self-center gap-5 pr-5">
          <GoPin className="text-gray-500 text-2xl hover:text-gray-900 " />
          <RxDotsHorizontal className="text-gray-500 text-2xl hover:text-gray-900" />
        </div>
      </div>
      <div className="border rounded-lg pb-2 p-2 border-gray-200 bg-gray-100 flex justify-between ">
        <div className="pl-5">
          <p>Meeting HR Department</p>
          <small className="text-gray-500">Yesterday, 12:30 PM</small>
        </div>
        <div className="flex justify-center self-center gap-5 pr-5">
          <GoPin className="text-gray-500 text-2xl hover:text-gray-900 " />
          <RxDotsHorizontal className="text-gray-500 text-2xl hover:text-gray-900" />
        </div>
      </div>
      <div className="border rounded-lg pb-2 p-2 border-gray-200 bg-gray-100 flex justify-between ">
        <div className="pl-5">
          <p>
            IT Department needs two more talents for UX/UI Designer position
          </p>
          <small className="text-gray-500">Yesterday, 09:15 AM</small>
        </div>
        <div className="flex justify-center self-center gap-5 pr-5">
          <GoPin className="text-gray-500 text-2xl hover:text-gray-900 " />
          <RxDotsHorizontal className="text-gray-500 text-2xl hover:text-gray-900" />
        </div>
      </div>
    </div>
    <div>
      <button className="w-full bg-red-500 text-white rounded-lg mt-4 py-2">
        See All Announcments
      </button>
    </div>
  </div>
);

export default Announcement;
