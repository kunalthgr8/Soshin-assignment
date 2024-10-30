import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/sidebarSlice";
import "./HeaderSidebar.css";
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
  { name: "Dashboard", slug: "/", icon: MdDashboard, color: "text-black " },
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
  { name: "Support", slug: "/signup", icon: BiSupport, color: "text-black " },
  {
    name: "settings",
    slug: "/signup",
    icon: IoIosSettings,
    color: "text-black",
  }
];


const NavItem = React.memo(({ item, isActive, onClick }) => (
  <li
  className={`flex gap-3 items-center text-base font-medium cursor-pointer pl-10 pt-2 pb-2 hover:font-bold ${
    isActive
      ? "text-red-500  rounded-lg rounded-r-3xl"
      : item.color
  } text-gray-600`}
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
  >
    <item.icon className="text-lg" />
    {item.name}
  </li>
));

const HeaderSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const sidebarRef = useRef(null);

  const handleLinkClick = (slug) => {
    navigate(slug);
    dispatch(toggleSidebar());
  };

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      dispatch(toggleSidebar());
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-64 transform transition-transform duration-300 z-50 shadow-lg border border-r-violet-100"
          aria-label="Sidebar Navigation"
        >
          <div className="mt-5 mb-5 self-center text-center border-b border-b-violet-100">
            <Link to="/">
              <Logo width="100px" height="100px" />
            </Link>
          </div>
          <div className="h-full pt-8 p-4 flex flex-col">
            <h3 className="px-4 text-gray-400 text-sm">MAIN MENU</h3>
            <ul className="mt-2 space-y-4">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.slug;
                const onClick = () => handleLinkClick(item.slug);

                return (
                  <NavItem
                    key={item.slug}
                    item={item}
                    isActive={isActive}
                    onClick={onClick}
                  />
                );
              })}
            </ul>
            <h3 className="mt-8 px-4 text-gray-400 text-sm">OTHER</h3>
            <ul className="mt-4 space-y-4">
              {NAV_ITEMS2.map((item) => {
                const isActive = location.pathname === item.slug;
                const onClick = () => handleLinkClick(item.slug);

                return (
                  <NavItem
                    key={item.slug}
                    item={item}
                    isActive={isActive}
                    onClick={onClick}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSidebar;
