import React from "react";

const ContactMeSection = () => {
  const error: boolean = false;
  return (
    <div className="">
      <div className="max-w-7xl mx-auto pb-10 md:pb-12 w-11/12 ">
        <div className="flex flex-col md:grid grid-cols-2 gap-x-16 gap-y-8 justify-between">
          <div className="pt-8 md:pt-12">
            <form>
              <h2 className="md:text-[40px] text-3xl md:leading-[61px] leading-[50px]  font-semibold max-w-[506px] pb-7 tracking-tight">
                We Would Love To Hear From You, Get in touch 👋
              </h2>
              <div className="flex flex-col gap-y-4">
                <div className="pb-2">
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-[#1C2330] pb-1  "
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
                  {error ? (
                    <p className="mt-2 text-sm text-red-600" id="name-error">
                      error messagae
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="pb-2">
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-[#1C2330] pb-1  "
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
                  {error ? (
                    <p className="mt-2 text-sm text-red-600" id="name-error">
                      error messagae
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="pb-2">
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-[#1C2330] pb-1"
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
                <button className=" bg-indigo-700 hover:bg-indigo-500 text-white rounded-lg w-full px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full h-full md:pt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.697984322569!2d74.31352741538138!3d35.89837569238771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e7ab3aeb0fe5af%3A0x8a1242c0c4b97b6c!2sGilgit%2C%20Gilgit-Baltistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698908941300!5m2!1sen!2s"
              frameBorder="2"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=" responsive-iframe rounded-lg shadow-sm border border-[#CFCFCF]s"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
