import React from "react";

const InteroductionInfo = () => {
  return (
    <div className=" flex ">
      <h2 className=" text-4xl font-bold ">
        Hi 👋,<br></br> My name is <br></br>{" "}
        <span className=" bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          {" "}
          Waseem Kashif
        </span>{" "}
        <br></br> I build things for web
      </h2>
    </div>
  );
};

export default InteroductionInfo;
