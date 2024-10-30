
import React, { useEffect,useState } from "react";
import { Header, HeaderSidebar, Sidebar } from "./components/index";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const [showText, setShowText] = useState(window.innerWidth > 1100);

  useEffect(() => {
    const handleResize = () => {
      setShowText(window.innerWidth > 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex h-screen w-full">
      <div className={`w-1/6 md:w-1/5 sm:w-1/4 h-full hidden md:block`}>
        <Sidebar />
      </div>

      <div className={`md:hidden transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"}`}>
        <HeaderSidebar />
      </div>

      <div className="flex flex-col  w-full h-full flex-grow overflow-y-auto">
        <Header />
          <Outlet />
      </div>
    </div>
  );
}

export default App;
