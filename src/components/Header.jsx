import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
//import icons
import { BsBag } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Logo from "../../public/img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none "
      } fixed w-full z-10 transition-all }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to={`/`}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* cart */}

        <div
          className="cursor-pointer flex  relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
