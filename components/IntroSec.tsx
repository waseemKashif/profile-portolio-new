import React from "react";
import ProfileImg from "./icons/profileImage";
import InteroductionInfo from "./InteroductionInfo";
const IntroSec = () => {
  return (
    <div className=" max-w-[1450px] w-11/12 mx-auto text-[#fff]">
      <div className=" grid grid-cols-2 justify-between">
        <div>
          <InteroductionInfo />
        </div>
        <div className=" ">
          <ProfileImg />
        </div>
      </div>
    </div>
  );
};

export default IntroSec;
