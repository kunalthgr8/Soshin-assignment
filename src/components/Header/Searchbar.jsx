import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  function search() {
    navigate("/products");
  }
  const location = useLocation();

  const [item, setItem] = useState("");
  const isUserActive = location.pathname === "/user";
  const isCartActive = location.pathname === "/cart";

  return (
    <>
      {!(isUserActive || isCartActive) && (
        <div className="flex pl-10 w-full ">
          <div className="flex w-full bg-gray-100 justify-between items-center text-gray-600 cursor-pointer rounded-md">
            <input
              type="text"
              placeholder="Search"
              onChange={(event) => setItem(event.target.value)}
              className="text-gray-600 py-3 pl-8 w-full bg-transparent rounded-lg rounded-r-none border-none focus:outline-none"
            />
            <div className="px-7 py-1 flex justify-center rounded-l-none bg-nav-white items-center text-2xl rounded-lg h-full">
              <IoSearchSharp onClick={search} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
