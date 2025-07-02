import React, {useState} from 'react'
import { SiPalantir } from "react-icons/si";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { MdSpaceDashboard } from "react-icons/md"; // <MdSpaceDashboard />
import { GoGraph } from "react-icons/go"; // <GoGraph />
import { IoNewspaperOutline } from "react-icons/io5";
import palantirLogo from '../assets/palantir-svgrepo-com.svg';

const NavigationBar = ({ open, setOpen }) => {
    
  const [subMenus, setSubMenus] = useState({
        calendar: false,
        support: false,
        tables: false,
        analytics: false,
    });

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({
      ...prev, [menu]: !prev[menu],
    }));
  };

    const Menus = [
        { title: "Dashboard", icon: <MdSpaceDashboard /> },
        { title: "Analytics", icon: <GoGraph /> },
        { title: "Qualitative", icon: <IoNewspaperOutline/>  },
    ];

    return (
    <div className="w-full flex">
      {/* Sidebar section */}
      <div className={`${open ? "w-72 p-5" : "w-20 p-4"} fixed z-60 bg-zinc-900 h-screen pt-8 duration-300 ease-in-out`}>
        {/* Toggle button sections */}
        <div className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border-zinc-50 border-2 rounded-full text-xl flex items-center justify-center ${!open && "rotate-180"} transition-all ease-in-out duration-300`}
          onClick={() => setOpen(!open)}
        >
          {open ?
            <TbLayoutSidebarLeftExpand /> :
            <TbLayoutSidebarLeftCollapse />}
        </div>

        {/* Logo and title section */}
        <div className="flex gap-x-4 items-center">
          <img 
          src={palantirLogo}
          alt="Palantir Logo"
          className={`invert ml-1 w-10 h-10 rounded-full object-cover object-center cursor-pointer ease-in-out duration-3 ${open && "rotate-[360deg]"}`} />

          <h1 className={`text-zinc-50 origin-left font-semibold text-xl duration-200 ease-in-out ${!open && "scale-0"}`}>
            Menu
          </h1>
        </div>

        {/* Sidebar Navbar Items section */}
        <ul className="pt-6 space-y-0.5">
          {Menus.map((Menu, index) => (
            <li key={index} className={`flex flex-col rounded-md py-3 px-4 cursor-pointer hover:text-white text-zinc-50 hover:bg-zinc-800/50 transition-all ease-in-out duration-300 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-zinc-800/40"}`}>
              <div className="flex items-center justify-between gap-x-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    {Menu.icon}
                  </span>
                  <span className={`${!open && "hidden"} origin-left ease-in-out duration-300`}>
                    {Menu.title}
                  </span>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
        
    );
}

export default NavigationBar