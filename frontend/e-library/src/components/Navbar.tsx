import React, { Fragment, Suspense, useState } from "react";

import { Link } from "react-router-dom";
import { Categories, SearchedBookContainer } from ".";
import { SearchIcon, UserIcon } from "../icons";

const Navbar: React.FC = () => {
  const [toggleSearchBarBorder, setToggleSearchBarBorder] =
    useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Fragment>
      <div className="sticky w-full top-0 z-[100] bg-white shadow-lg">
        <section className="flex flex-col justify-evenly items-center boder border-blue-500">
          <div className="mainNavbar py-3 w-full border-b h-[4rem] lg:h-[5rem] grid grid-cols-4 gap-4 place-content-center">
            <Link
              to={"/"}
              className="logo place-content-center text-4xl px-6 cursor-pointer"
            >
              <span>e</span>
              <span className="text-cyan-600 font-bold">.Lib</span>
            </Link>
            <div className="searchBar col-span-2 place-content-center">
              <div
                className={`border-2 hidden lg:grid grid-cols-9 place-content-center place-items-center ${toggleSearchBarBorder ? " border-[rgba(44,119,151,0.89)]" : ""
                  } hover:borde-2 col-span-8 outline-none text-[rgb(11,42,55)] shadow-lg hover:borde-2  hover:border-[rgba(44,119,151,0.89)] rounded-full border transition duration-300 ease-in-out`}
              >
                <input
                  onClick={() => setToggleSearchBarBorder(!toggleSearchBarBorder)}
                  onBlur={() => setToggleSearchBarBorder(!toggleSearchBarBorder)}
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
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
          <div className="lg:hidden w-full h-[4.5rem] border-b flex  relative">
            <div className="my-auto h-full cursor-pointer place-content-center px-5 bg-gradient-to-r from-[rgba(0,162,195,0.26)] to-[rgba(0,0,0,0)] backdrop:">
              <SearchIcon />
            </div>
            <div className="flex overflow-x-auto no-scrollbar">
              <Categories />
            </div>
          </div>
        </section>
        {toggleSearchBarBorder && (
          <Suspense fallback={"loading.."}>
            <div className="relative w-full flex justify-center items-center">
              <SearchedBookContainer inputValue={inputValue} />
            </div>
          </Suspense>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
