import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNav(false); // Close mobile menu after clicking
  };

  const navItems = [
    { id: 1, text: "Home", target: "home" },
    { id: 2, text: "About", target: "about" },
    { id: 3, text: "Service", target: "service" },
    { id: 4, text: "Course", target: "course" },
    { id: 5, text: "Contact", target: "contact" },
  ];

  return (
    <div className="bg-[#F5F7F8] flex justify-between font-sans items-center h-24 mx-auto px-4 text-black fixed top-0 w-full z-50 vs:mb-0 vs:pb-0">
      <h1 className="w-full md:text-3xl font-bold text-[#D69527] uppercase sm:text-xl vs:text-xl">
        edurights admission consultancy
      </h1>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#D69527] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            onClick={() => handleScroll(item.target)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#F5F7F8] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#D69527] m-4 sm:text-xl vs:text-xl">
          edurights admission consultancy
        </h1>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#D69527] duration-300 hover:text-[#F5F7F8] cursor-pointer border-gray-600"
            onClick={() => handleScroll(item.target)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
