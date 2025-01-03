import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mb-24 py-10 flex justify-center">
      <div className="w-6/12">
        <h1 className="font-bold text-6xl flex justify-center">Contact Me</h1>

        <div className="mt-10">
          <div className="flex flex-col">
            <span className="font-bold ml-6">Full name *</span>
            <input
              type="text"
              className="rounded-[100000px] px-6 py-3 focus:outline-none bg-[#343434]"
              placeholder="Enter your full name ..."
            />
          </div>

          <div className="flex flex-col mt-8">
            <span className="font-bold ml-6">Email *</span>
            <input
              type="email"
              className="rounded-[100000px] px-6 py-3 focus:outline-none bg-[#343434]"
              placeholder="Enter your email ..."
            />
          </div>

          <div className="flex flex-col mt-8">
            <span className="font-bold ml-6">Message *</span>
            <textarea
              type="text"
              className="rounded-xl px-6 py-3 focus:outline-none bg-[#343434]"
              placeholder="Enter your message ..."
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-[#616161] rounded-[70px] justify-center flex mt-12 relative hover:-top-2 transition ease-in duration-500 items-center px-14 p-5">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
