import React from "react";
import { allImages } from "../assets";

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen w-full flex justify-center items-center text-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${allImages.heroBg}') center center/cover`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[60%] h-[50%] flex flex-col justify-center items-center">
        <div className="text-5xl font-bold">
          <span>
            e-<span className="text-cyan-400 font-serif">Library</span>
          </span>
        </div>
        <div className="w-[60%] my-3">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi
            officia magnam ipsa quasi. Libero nesciunt labore veritatis tempore
            dicta vero, praesentium exercitationem,
          </p>
        </div>
        <div>
          <button className="bg-cyan-600 px-4 py-2 rounded-lg hover:bg-cyan-700 transistion duration-300 ease-in-out">
            Explore The New World
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
