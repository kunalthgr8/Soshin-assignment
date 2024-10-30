import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "../index";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { GrFormSchedule } from "react-icons/gr";
import { MdGroups2 } from "react-icons/md";
import { GiRadioactive } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";

const NAV_ITEMS = [
  { name: "Dashboard", slug: "/", icon: MdDashboard, color: "text-black" },
  {
    name: "Recruitment",
    slug: "/signup",
    icon: MdOutlinePersonAddAlt,
    color: "text-black",
  },
  {
    name: "Schedule",
    slug: "/signup",
    icon: GrFormSchedule,
    color: "text-black",
  },
  {
    name: "Employee",
    slug: "/signup",
    icon: MdGroups2,
    color: "text-black",
  },
  {
    name: "Department",
    slug: "/signup",
    icon: GiRadioactive,
    color: "text-black",
  },
];

const NAV_ITEMS2 = [
  { name: "Support", slug: "/signup", icon: BiSupport, color: "text-black" },
  {
    name: "Settings",
    slug: "/signup",
    icon: IoIosSettings,
    color: "text-black",
  },
];

const NavItem = React.memo(({ item, isActive, onClick, showText }) => (
  <li
    className={`flex gap-3 items-center text-base font-medium cursor-pointer pl-10 ${!showText ?  "pl-5": ""} pt-2 pb-2 hover:font-bold ${
      isActive ? "text-red-500 rounded-lg rounded-r-3xl" : item.color
    } ${!showText ? "text-3xl text-center ml-8 ": ""} text-gray-600`}
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
  >
    <item.icon className="mr-2" />
    {showText && item.name}
  </li>
));

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showText, setShowText] = useState(window.innerWidth > 1100);

  useEffect(() => {
    const handleResize = () => {
      setShowText(window.innerWidth > 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full pt-5 p-4 pl-0 flex flex-col border border-r-violet-100">
      <div className="mt-2 mb-10 self-center text-center">
        <Link to="/">
          <Logo width="100px" height="100px" />
        </Link>
      </div>

      <div className="mb-10">
        <h3 className={`mt-2 px-4 text-gray-400 text-xs ${!showText ? "text-center" : ""}`}>MAIN MENU</h3>
        <ul className="mt-8">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.slug;
            const handleClick = () => navigate(item.slug);

            return (
              <NavItem
                key={item.slug}
                item={item}
                isActive={isActive}
                onClick={handleClick}
                showText={showText}
              />
            );
          })}
        </ul>
      </div>

      <div>
        <h3 className={`mt-2 px-4 text-gray-400 text-xs ${!showText ? "text-center" : ""}`}>OTHER</h3>
        <ul className="mt-8">
          {NAV_ITEMS2.map((item) => {
            const isActive = location.pathname === item.slug;
            const handleClick = () => navigate(item.slug);

            return (
              <NavItem
                key={item.slug}
                item={item}
                isActive={isActive}
                onClick={handleClick}
                showText={showText}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
