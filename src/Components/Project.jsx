import React, { useRef } from "react";

const Project = ({ src, title, languages, link }) => {
  return (
    <div>
      <div className="rounded-lg relative">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={src}
            alt="project"
            className="project-img rounded-lg size-full h-60 "
          />
        </div>

        <h3 className="title text-5xl font-semibold absolute bottom-6 left-14">
          <a href={link} target="_blank">
            {title}
          </a>
        </h3>

        <p className="absolute top-4 left-10 uppercase hover:cursor-default">
          {languages}
        </p>
      </div>
    </div>
  );
};

export default Project;
