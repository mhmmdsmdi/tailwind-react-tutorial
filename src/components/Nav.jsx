import { RiShoppingBag2Fill } from "react-icons/ri";
import { React, useState } from "react";
import { MdHomeRepairService } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const routes = ["Home", "About", "Services", "Blog", "Contact"];

function Nav() {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <MdHomeRepairService size={45} />
      </a>

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsMobileMenuShow(!isMobileMenuShow)}
        className="p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div
        className={`${!isMobileMenuShow && "hidden"} w-full lg:w-auto lg:block pt-2`}
      >
        <ul className="flex flex-col lg:space-x-8 lg:flex-row lg:bg-transparent lg:border-none text-lg border bg-gray-50 border-gray-100 rounded p-4">
          {routes.map((route, index) => (
            <li
              className={`px-3 py-2 rounded-md  cursor-pointer ${index == 0 ? "bg-blue-500 lg:bg-transparent lg:text-blue-500 text-white" : "hover:bg-gray-100"}`}
              key={route}
            >
              <a href="#">{route}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart button */}
      <div className="fixed left-4 bottom-4 lg:static">
        <div className="flex-center rounded-full h-12 w-12 bg-white shadow-md ">
          <RiShoppingBag2Fill />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
