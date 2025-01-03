import React from "react";

const Hero = () => {
  return (
    <div id="about" className="flex justify-center items-center mt-24 py-10 ">
      <div className=" rounded-xl text-white w-full ">
        <div className="flex w-full mb-20">
          <div className="grid grid-cols mt-20 w-full ">
            <h3 className="font-bold text-6xl">Software Engineer</h3>
            <p className="">
              Tobi is experienced software engineer
              <br /> help startups and enterprises with prototypes
              <br /> and ideas by efficiently building those things into
              reality.
            </p>
          </div>

          <div className="relative top-4">
            <img
              src="Tobi.png"
              alt="tobi"
              className="rounded-[40px] w-96 border-solid border-black border-[3px] shadow-lg hover:shadow-[#2f2f2f] transition duration-300"
            />
          </div>
        </div>

        <div className="flex justify-around uppercase mt-32 font-bold">
          <h1 className="flex items-center gap-3">
            <span className="font-medium num text-5xl">1</span>
            + <br /> years of <br /> experience
          </h1>
          <h1 className="flex items-center gap-3">
            <span className="font-medium num text-5xl">20</span>
            + <br /> hours of <br /> working
          </h1>
          <h1 className="flex items-center gap-3">
            <span className="font-medium num text-5xl">50</span>
            + <br /> projects done
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
