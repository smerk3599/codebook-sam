import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Sections/Search";

import Robot from "../../assets/robot.png";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [show, setShow] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img
              src={Robot}
              className="rounded-fullmr-3 h-10"
              alt="CodeBook Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi bi-toggles"
            ></span>
            <span
              onClick={() => setShow(!show)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-binoculars"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-bag-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span className="bi bi-person-bounding-box cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
          </div>
        </div>
      </nav>
      {show && <Search />}
    </header>
  );
};
