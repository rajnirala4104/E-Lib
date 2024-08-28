import React, { useState } from "react";
import { SearchIcon, UserIcon } from "../icons";

const Navbar: React.FC = () => {
  const [toggleSearchBarBorder, setToggleSearchBarBorder] =
    useState<boolean>(false);

  return (
    <section className="flex flex-col justify-evenly items-center">
      <div className="mainNavbar py-5 w-full shadow-md h-[4rem] lg:h-[6rem] grid grid-cols-4 gap-4 place-content-center">
        <div className="logo place-content-center text-4xl px-6">
          <span>e</span>
          <span className="text-cyan-600 font-bold">.Lib</span>
        </div>
        <div className="searchBar col-span-2 place-content-center h-[3rem]">
          <div
            className={`border-2 hidden lg:grid grid-cols-9 place-content-center place-items-center ${
              toggleSearchBarBorder ? " border-[rgba(44,119,151,0.89)]" : ""
            } hover:borde-2 col-span-8 outline-none text-[rgb(11,42,55)] shadow-lg hover:borde-2  hover:border-[rgba(44,119,151,0.89)] rounded-full border`}
          >
            <input
              onClick={() => setToggleSearchBarBorder(!toggleSearchBarBorder)}
              onBlur={() => setToggleSearchBarBorder(!toggleSearchBarBorder)}
              type="text"
              placeholder="Search..."
              className={`w-full place-content-center pl-2 ml-3 col-span-8 outline-none text-[rgb(11,42,55)] h-[2rem] rounded-full`}
            />
            <div className="bg-cyan-900 grid place-content-center place-items-center rounded-full h-[2.3rem] w-[2.3rem] my-2 hover:bg-cyan-950 cursor-pointer">
              <SearchIcon classes="text-xl text-white" />
            </div>
          </div>
        </div>
        <div className="loginBtn place-content-center place-items-center j grid lg:grid-cols-5 w-[40%] mx-auto ">
          <span className="hidden lg:grid col-span-3 text-center text-[18px] font-semibold cursor-pointer py-2 px-4 bg-cyan-300 text-slate-700 shadow-lg hover:shadow-md hover:text-black rounded-full">
            Login
          </span>
          <UserIcon classes="text-3xl lg:text-4xl ml-5 shadow-lg rounded-full cursor-pointer" />
        </div>
      </div>
      <div className="categories w-[100%] flex justify-evenly items-center my-3">
        Categories
      </div>
    </section>
  );
};

export default Navbar;
