"use client";
import React, { useState, useEffect } from "react";
import HtmlIcon from "./icons/html5Icon";
import CssIcon from "./icons/css3Icon";
import JsIcon from "./icons/jsIcon";
import ReactIcon from "./icons/reactIcon";
import Svelte from "./icons/svelteIcon";
import BootStrapIcon from "./icons/bootstrapIcon";
import TailwindIcon from "./icons/tailwindIcon";
import GitIcon from "./icons/gitIcon";
import VueJs from "./icons/vuejs";
import MaterialUI from "./icons/materialUI_icon";
import GitHubIcon from "./icons/gitHubIcon";
import NextJs from "./icons/nextJsIcon";

const TechStack = () => {
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setFlip((prevFlip) => !prevFlip);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  const iconData = [
    { icon: <HtmlIcon />, title: "HTML" },
    { icon: <CssIcon />, title: "CSS" },
    { icon: <JsIcon />, title: "JavaScript" },
    { icon: <ReactIcon />, title: "React Js" },
    { icon: <Svelte />, title: "Sveltekit" },
    { icon: <NextJs />, title: "Next Js" },
    { icon: <VueJs />, title: "Vue Js" },
    { icon: <TailwindIcon />, title: "Tailwind CSS" },
    { icon: <BootStrapIcon />, title: "Bootstrap" },
    { icon: <GitIcon />, title: "Git" },
    { icon: <MaterialUI />, title: "Material UI" },
    { icon: <GitHubIcon />, title: "GitHub" },
  ];
  return (
    <div className=" max-w-7xl mx-auto  pt-10 md:pt-12 text-gray-400">
      <div className=" flex w-full flex-col  justify-center items-center ">
        <div className=" flex flex-col gap-y-4 text-center">
          <h2 className=" text-3xl  md:text-5xl  text-gray-300 font-medium">
            My Tech Stack
          </h2>
          <p className=" capitalize">
            {" "}
            Technologies I&apos;ve been working with in these years
          </p>
        </div>
        <div className=" grid grid-cols-2  md:grid-cols-3  lg:grid-cols-6 gap-x-4 justify-evenly items-center w-full py-8  md:py-10 gap-y-10">
          {iconData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between flex-col gap-y-2 items-center h-[150px]"
            >
              <span className={` flex items-center ${flip && "techRotate"}`}>
                {item.icon}
              </span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
