import React from "react";
import Man from "../../assets/man.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleSidebar } from "../../store/sidebarSlice";
import Searchbar from "./Searchbar";
import { CiBellOn } from "react-icons/ci";
import { RiMessage2Fill } from "react-icons/ri";

function Header() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  const togglebar = () => {
    dispatch(toggleSidebar());
  };

  const capitalizeName = (name) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="flex w-full justify-between mt-2 p-4 items-center border-b border-b-violet-100 ">
      <div className="text-4xl md:hidden cursor-pointer">
        <RxHamburgerMenu
          onClick={togglebar}
          aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        />
      </div>

      <div className=" w-1/2">
        <Searchbar />
      </div>

      <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-all duration-300">
        <div className="text-xl flex gap-5 px-3">

        <CiBellOn />
        <RiMessage2Fill />

        </div>
        <div className="flex flex-col items-center  rounded-lg p-2 mr-3">
          <Link to="/signup" className="flex items-center gap-2">
            <img width="48" height="48" src={Man} alt="user" />
            <p className="text-sm font-bold mr-2">
              {capitalizeName("kunal singla")}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
