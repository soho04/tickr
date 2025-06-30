import React, {useState} from 'react'
import { SiPalantir } from "react-icons/si";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { MdSpaceDashboard } from "react-icons/md"; // <MdSpaceDashboard />
import { GoGraph } from "react-icons/go"; // <GoGraph />

const NavigationBar = () => {
    
    const [ open, setOpen ] = useState(false);

    const Menus = [
        { title: "Dashboard", icon: <MdSpaceDashboard /> },
        { title: "Analytics", icon: <GoGraph /> },
    ];

    return (
      <div className="w-full flex">
        <div className={`${open ? "w-36 p-6" : "w-12 p-6"} bg-zinc-900 h-screen pt-8 z-50 relative duration-300 ease-in-out`}>
            {/* <div className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 p-0.5 bg-zinc-50 border-zinc-50 border-2 rounded-full text-xl flex items-center justify-center ${!open && "rotate-180"} transition-all ease-in-out duration-300`}
            onClick={() => setOpen(!open)}
            >
            {open ? 
                <TbLayoutSidebarLeftExpand /> :
                <TbLayoutSidebarLeftCollapse />}
            </div> */}
            <div className="flex items-center space-x-4">
                <SiPalantir
                className={`text-white rounded-full cursor-pointer -ml-2 transition-all ease-in-out duration-300 
                    ${open ? "w-5 h-11" : "w-5 h-11"}
                    ${open ? "rotate-[360deg]" : "rotate-0"
                }`}
                />

                <h1 className = {`text-zinc-50 origin-left font-semibold transition-all duration-200 ${
                    open ? "opacity-100 scale-100 pl-1" : "opacity-0 scale-0 pl-0"
                }`}
                >
                    Menu
                </h1>

                
            </div>
                <ul className = "pt-2 space-y-0.5">
                    {Menus.map((Menu, index) => {
                        return <li key={index} className={`w-4 h-4 -ml-6 my-5 flex items-center rounded-md gap-x-6 py-3 px-4
                        cursor-pointer hover:text-white text-zinc-50 hover:bg-zinc-800/50
                        transition-all ease-in-out duration-300 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && ""}`}>
                        
                        <span className="text-lg">{Menu.icon}</span>
                        <span className={`text-[12px] ${!open && "hidden"} origin-left ease-in-out duration-300`}>
                            {Menu.title}
                        </span>
                        </li>
                    })}
                </ul> 
        </div>
      </div>
        
    );
}

export default NavigationBar