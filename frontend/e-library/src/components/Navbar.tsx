import React from "react";
import { SearchIcon, UserIcon } from "../icons";

const Navbar: React.FC = () => {
  return (
    <section className="flex flex-col justify-evenly items-center">
      <div className="manNavbar py-5 w-full border border-black grid grid-cols-4 gap-4 place-content-center">
        <div className="logo place-content-center text-3xl px-6">
          <span>E</span>
          <span className="text-red-500 font-bold">.Lib</span>
        </div>
        <div className="searchBar col-span-2 place-content-center">
          <div className="grid grid-cols-9 gap-2 border border-[rgba(0,0,0,0.32)] place-content-center h-full rounded-full p-3">
            <input type="text" placeholder="Search.." className="col-span-8 " />
            <SearchIcon classes="text-2xl " />
          </div>
        </div>
        <div className="loginBtn">
          <span>Login</span>
          <UserIcon />
        </div>
      </div>
      <div className="categories border border-blue-500 w-[100%] flex justify-evenly items-center">
        Categories
      </div>
    </section>
  );
};

export default Navbar;
