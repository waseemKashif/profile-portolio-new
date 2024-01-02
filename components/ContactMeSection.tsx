import React from "react";

const ContactMeSection = () => {
  const error: boolean = false;
  return (
    <div className="flex flex-col gap-x-16 gap-y-8 justify-between px-2 pb-12  md:px-10 text-gray-200">
      <form>
        <h2 className="md:text-[40px] text-3xl md:leading-[61px] leading-[50px]  font-semibold max-w-[506px] pb-2  md:pb-7 tracking-tight">
          I Would Love To Hear From You, Get in touch 👋
        </h2>
        <div className="flex flex-col gap-y-1  md:gap-y-4">
          <div className="pb-2">
            <label
              htmlFor="name"
              className="block text-base font-medium text-gray-400 pb-1  "
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="appearance-none text-[#334052] text-sm block w-full px-3 py-2.5 outline-[#E5E6E5] border border-[#E5E6E5]  rounded-md shadow-sm focus:outline-none focus:ring-[#4146B8] focus:border-[#4146B8]"
              placeholder="First Name"
            />
          </div>
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-400 pb-1  "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="appearance-none text-[#334052] text-sm  block w-full px-3 py-2.5 outline-[#E5E6E5] border border-[#E5E6E5]  rounded-md shadow-sm focus:outline-none focus:ring-[#4146B8] focus:border-[#4146B8]"
              placeholder="Email"
            />
          </div>
          <div className="pb-2">
            <label
              htmlFor="message"
              className="block text-base font-medium text-gray-400 pb-1"
            >
              Message
            </label>
            <textarea
              rows={8}
              id="message"
              className="appearance-none text-[#334052] text-sm block w-full  outline-[#E5E6E5] border border-[#E5E6E5]  rounded-md shadow-sm focus:outline-none focus:ring-[#4146B8] focus:border-[#4146B8] px-3 py-1"
              placeholder="Leave us a message"
            />
          </div>
          <button className=" bg-indigo-700 hover:bg-indigo-500 text-white rounded-lg w-full px-4 py-2">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMeSection;
