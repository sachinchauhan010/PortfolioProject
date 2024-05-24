import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Header = () => {
  let navLinks = [
    { name: "Home", link: "/", id: 1 },
    { name: "Projects", link: "/project", id: 2 },
    { name: "About", link: "/about", id: 3 },
    { name: "Contact me", link: "/contact", id: 4 },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md box-border w-full top-0 left-0 font-Roboto">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 bg-from-blue-600 to-green-500">
        <Link to={"/"} className="font-bold text-3xl cursor-pointer">
          <span className="text-fuchsia-500">SACHIN</span>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:gap-x-5 md:text-lg md:font-semibold md:items-center md:pb-0  absolute md:static md:z-auto z-[10] bg-blue-50 md:bg-white shadow-xl md:shadow-none left-0 w-full md:w-auto md:pl-0 pl-4  transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {navLinks.map((navItems) => (
            <li
              className="md:ml-8 md:my-0 my-6 font-semibold"
              key={navItems.id}
            >
              <Link
                to={navItems.link}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <div class="relative text-blue-900 font-semibold hover:text-fuchsia-500 group">
                  {navItems.name}
                  <div class="absolute bottom-0 left-0 w-full h-[2px] bg-current scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 ease-in-out origin-left"></div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
