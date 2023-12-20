import React from "react";
import Image from "next/image";
import LinkIcon from "./icons/linkIcon";
import Link from "next/link";
import GithubMini from "./icons/gitHubmini";
interface ProjectCardTypes {
  image: string;
  title: string;
  description: string;
  techList: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardTypes> = ({
  image,
  title,
  description,
  techList,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="max-w-[380px] w-full flex flex-col h-[480px] rounded-lg bg-[#363636] shadow-lg bg-gradient-to-br from-[#001800] to-black ">
      <Image
        src={image}
        alt={title}
        width={1000}
        height={700}
        className=" rounded-t-lg h-[12em]"
      />
      <div className=" flex flex-col p-3  md:p-4 gap-y-3 h-full justify-between ">
        <p className=" font-medium text-2xl  md:text-[28px]">{title}</p>
        <p className=" line-clamp-5 text-base md:text-[18px] font-light">
          {description}
        </p>
        <p>Tech Stack: {techList}</p>
        <div className=" flex justify-between">
          <Link
            href={liveLink}
            className="flex justify-start items-center gap-x-1"
            target="_blank"
          >
            <LinkIcon />
            <span className=" underline text-[#FFFFFF]"> Live Preview</span>
          </Link>
          <Link
            href={githubLink}
            className="flex justify-start items-center gap-x-1"
            target="_blank"
          >
            <GithubMini />
            <span className=" underline text-[#FFFFFF]"> View Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
