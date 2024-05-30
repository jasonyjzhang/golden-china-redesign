import { Link } from "react-router-dom";
import { useState } from "react";
import "../hamburger.css";

export default function Navbar() {
  const [panelShow, setPanelShow] = useState(false);
  const menuItems = [
    {name: "Home", path: "/"},
    {name: "Menu", path: "/menu"},
    {name: "Contact", path: "/contact"}
  ];
  const handleClick = () => setPanelShow(prev => !prev);
  return (
    <>

      <nav className={`w-screen fixed top-0 bg-dark px-8 py-4 lg:px-24 lg:flex lg:justify-between z-20`}>
        <h1 className={`w-full text-center font-['Crimson_Text'] text-gold text-2xl tracking-wider lg:w-auto`}>GOLDEN CHINA</h1>
        {/** Mobile - Navbar Icon */}
        <button onClick={() => setPanelShow(prev => !prev)} className={`absolute right-8 top-5 hamburger hamburger--spin ${panelShow && `is-active`} lg:hidden`}>
          <span className={`hamburger-box`}>
            <span className={`hamburger-inner`}></span>
          </span>
        </button>
        {/** Desktop - Nav Links */}
        <div className={`hidden lg:flex lg:space-x-16 lg:items-center`}>
          {menuItems.map((item) => {
            return <Link to={item.path} className={`font-['Crimson_Text'] text-gold text-lg`}>{item.name}</Link>
          })}
        </div>
      </nav>
      {/** Mobile - Nav Panel */}
      <div className={`${panelShow ? 'visible' : 'hidden'} w-screen bg-dark px-8 flex flex-col items-center space-y-8 py-8 border-y-2 border-gold fixed top-16 z-30`}>
        {menuItems.map((item) => {
          return <Link onClick={handleClick} to={item.path} className={`font-['Crimson_Text'] text-white text-xl`}>{item.name}</Link>
        })}
      </div>
    </>
  )
};


