import React from "react";

const Activity = () => (
  <div className="  text-white bg-blue-950 rounded-lg shadow">
    <h3 className="text-xl font-semibold w-full p-5  bg-violet-950 rounded-lg rounded-b-none">
      Recently Activity
    </h3>
    <div className="p-6 pt-1">
      <p className="mt-4 flex flex-col gap-1 mb-2 ">
        <div className="text-sm text-gray-400 ">10:40 AM, Fri 10 Sept 2021</div>
        <div className="text-lg">You Posted a New Job</div>
      </p>
      <p className="text-sm text-gray-200">
        Kindly check the requirements and terms of work and make sure everything
        is right.
      </p>
      <div className="flex flex-row justify-between pt-3">
        <div className="flex justify-center self-center ">
          <p className="text-base text-white">Today You Make 12 Activites</p>
        </div>
        <div className="flex justify-center self-center pb-2">
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded flex justify-center self-center">
            See All Activity
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Activity;
