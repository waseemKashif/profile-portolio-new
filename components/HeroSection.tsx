"use client";
import ProfileImg from "./icons/profileImage";
import OffersSec from "./OffersSec";
export default function HeroSection() {
  return (
    <div className="">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#edd382] pt-14  md:pt-10">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gray-800  ring-1 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6  md:px-8 md:mt-10">
          <div className="mx-auto max-w-2xl flex flex-col-reverse  lg:mx-0 md:grid md:max-w-none md:grid-cols-2 md:gap-x-16 md:gap-y-6  xl:gap-x-8  justify-center items-center">
            <div className=" flex flex-col gap-y-2">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto ">
                Hi 👋,<br></br> My name is <br></br>{" "}
                <span className=" bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  {" "}
                  Waseem Kashif
                </span>{" "}
                <br></br> I build things for web
              </h1>
              <div className=" max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <OffersSec />
                <p className="text-lg leading-8 text-gray-300">
                  A Senior Front End Developer
                </p>
              </div>
            </div>
            <div className=" w-full max-w-lg rounded-2xl object-cover lg:max-w-none ">
              <ProfileImg />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24  sm:h-32" />
      </div>
    </div>
  );
}
