import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="projects" className="pb-8">
      <h1 className="font-bold text-6xl mb-8 flex justify-end">
        My Latest Works
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <Project
          src="award.png"
          title="Award"
          languages="React JS, Tailwind CSS,GSAP"
          link="https://awards-lilac.vercel.app/"
        />
        <Project
          src="movies.png"
          title="Movie Land"
          languages="React JS, Tailwind CSS"
          link="https://movies-five-xi.vercel.app/"
        />
        <Project
          src="weather.png"
          title="Weather App"
          languages="React JS, Tailwind CSS"
          link="https://weather-react-iota-navy.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
