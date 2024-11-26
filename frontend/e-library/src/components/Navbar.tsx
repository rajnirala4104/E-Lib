import React, { Fragment, Suspense, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { Categories, SearchedBookContainer } from ".";
import { SearchIcon, UserIcon } from "../icons";


const Navbar: React.FC = () => {
  const [toggleSearchBarBorder, setToggleSearchBarBorder] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const containerBox = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  /**
   * This function is called whenever the user clicks anywhere on the page.
   * It's used to close the search bar when the user clicks outside of it.
   * @param {MouseEvent} event - The event that triggered this function, which is the click event.
   */
  const handleClickOutside = (event: MouseEvent) => {
    // If the containerBox is not null and the target of the event (i.e., what was clicked)
    // is not a child of the containerBox, then set toggleSearchBarBorder to false, which
    // will close the search bar.
    if (containerBox.current && !containerBox.current.contains(event.target as Node)) {
      if (searchInput.current && searchInput.current.contains(event.target as Node)) {
        // If the target of the event is a child of the search input, then set toggleSearchBarBorder to true, which will open the search bar.
        setToggleSearchBarBorder(true);
      } else {
        // Set toggleSearchBarBorder to false, which will close the search bar.
        setToggleSearchBarBorder(false);
      }
    }
  };

  useEffect(() => {
    // This function is called whenever the toggleSearchBarBorder state changes.
    // We add an event listener to the document when toggleSearchBarBorder is true.
    // This event listener will be called whenever the user clicks anywhere on the page.
    if (toggleSearchBarBorder) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // If toggleSearchBarBorder is false, we remove the event listener.
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // This is the cleanup function that is called when the component is unmounted.
    // It removes the event listener to prevent memory leaks.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSearchBarBorder]);

  return (
    <Fragment>
      <div
        className="sticky w-full top-0 z-[100] bg-white shadow-lg">
        <section className="flex flex-col justify-evenly items-center">
          <div className="mainNavbar py-3 w-full border-b h-[4rem] lg:h-[5rem] grid grid-cols-4 gap-4 place-content-center">
            <Link
              to={"/"}
              className="logo place-content-center text-4xl px-6 w-[40%]"
            >
              <span>e</span>
              <span className="text-cyan-600 font-bold">.Lib</span>
            </Link>
            <div className="searchBar col-span-2 place-content-center">
              <div
                className={`border-2 hidden lg:grid grid-cols-9 place-content-center place-items-center ${toggleSearchBarBorder ? " border-[rgba(44,119,151,0.89)]" : ""} 
                hover:border-2 col-span-8 outline-none text-[rgb(11,42,55)] shadow-lg hover:border-[rgba(44,119,151,0.89)] rounded-full border transition duration-300 ease-in-out`}
              >
                <input
                  onFocus={() => setToggleSearchBarBorder(true)}
                  ref={searchInput}
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
            <div ref={containerBox} className="relative w-full flex justify-center items-center bg-transparent">
              <SearchedBookContainer inputValue={inputValue} />
            </div>
          </Suspense>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
