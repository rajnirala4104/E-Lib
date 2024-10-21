import React from "react";
import { allImages } from "../assets";

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen w-full flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${allImages.heroBg}) center/cover`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[60%] h-[50%] flex flex-col justify-center items-center">
        <div className="text-5xl font-bold">
          <span>
            e-<span className="text-cyan-600 font-serif">library</span>
          </span>
        </div>
        <div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi
            officia magnam ipsa quasi. Libero nesciunt labore veritatis tempore
            dicta vero, praesentium exercitationem,
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
