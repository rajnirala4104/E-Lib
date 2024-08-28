import React, { useState } from "react";
import { SearchIcon, UserIcon } from "../icons";

const Navbar: React.FC = () => {
  const [toggleSearchBarBorder, setToggleSearchBarBorder] =
    useState<boolean>(false);

  return (
    <section className="flex flex-col justify-evenly items-center">
      <div className="mainNavbar py-5 w-full shadow-md h-[5.6rem] grid grid-cols-4 gap-4 place-content-center">
        <div className="logo place-content-center text-3xl px-6">
          <span>e</span>
          <span className="text-cyan-600 font-bold">.Lib</span>
        </div>
        <div className="searchBar col-span-2 place-content-center h-[3rem]">
          <div
            className={`grid  grid-cols-9 gap-2 border-2 ${
              toggleSearchBarBorder ? " border-[rgba(44,119,151,0.89)]" : ""
            } place-content-center h-full rounded-full py-3 pl-4 shadow-lg hover:borde-2  hover:border-[rgba(44,119,151,0.89)]`}
          >
            <input
              onClick={() => setToggleSearchBarBorder(!toggleSearchBarBorder)}
              onBlur={() => setToggleSearchBarBorder(!toggleSearchBarBorder)}
              type="text"
              placeholder="Search.."
              className="col-span-8 outline-none boder border-red-500 text-[rgb(11,42,55)]"
            />
            <SearchIcon classes="text-2xl" />
          </div>
        </div>
        <div className="loginBtn place-content-center place-items-center grid grid-cols-5 w-[40%] mx-auto ">
          <span className="col-span-3 text-center text-[18px] font-semibold cursor-pointer py-1 px-4 bg-cyan-300 text-slate-700 shadow-lg hover:shadow-md hover:text-black rounded-full">
            Login
          </span>
          <UserIcon classes="text-3xl ml-5 shadow-lg rounded-full" />
        </div>
      </div>
      <div className="categories w-[100%] flex justify-evenly items-center my-3">
        Categories
      </div>
    </section>
  );
};

export default Navbar;
