import React from "react";

const sections = ["About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  return (
    <div className="w-full flex mt-6 justify-between items-center mb-15">
      {/* logo */}
      <div className="flex justify-center items-center">
        <span className="font-bold text-2xl size-12 cursor-pointer">
          {/* Abdul Hamid Ahmed */}
          <img
            src="logo.jpg"
            alt="logo"
            className="rounded-full hover:cursor-pointer hover:drop-shadow-2xl"
          />
        </span>
      </div>

      <div className="font-bold space-x-10">
        {sections.map((section) => (
          <span className="relative group">
            <a key={section} href={`#${section.toLowerCase()}`}>
              {section}
            </a>
          </span>
        ))}
        {/* <span className="hover:border-b-2">
          <a href="#about">About</a>
        </span>
        <span className="hover:border-b-2">
          <a href="#skills">Skills</a>
        </span>
        <span className="hover:border-b-2">
          <a href="#projects">Projects</a>
        </span>
        <span className="hover:border-b-2">
          <a href="#contact">Contact</a>
        </span> */}
      </div>

      {/* icons */}
      <div className="flex gap-5">
        <span className="size-6 ">
          <a href="https://github.com/A-7amid" target="_blank">
            <img src="github.png" alt="github" />
          </a>
        </span>
        <span className="size-6 float-right flex">
          <a href="">
            <img src="cv.png" alt="CV" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
