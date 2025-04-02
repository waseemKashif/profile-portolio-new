import React from "react";
import Image from "next/image";
import ReadMore from "./ReadMore";
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
    <div className="max-w-[380px] w-full flex flex-col h-[530px] rounded-lg bg-gray-300 shadow-lg ">
      <Image
        src={image}
        alt={title}
        width={1000}
        height={700}
        className=" rounded-t-lg h-[12em]"
      />
      <div className=" flex flex-col p-3  md:p-4 gap-y-0 h-full justify-between bg-gradient-to-br from-[#001800] to-gray-900  rounded-b-lg ">
        <div className=" flex flex-col gap-y-4">
          <p className=" font-medium text-2xl  md:text-[28px]">{title}</p>
          <ReadMore text={description} maxLength={280} />
        </div>
        <div className=" flex flex-col gap-y-4">
          <p className=" line-clamp-1" title={techList}>
            {" "}
            <span className=" font-medium">Tech Stack: </span>
            {techList}
          </p>
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
    </div>
  );
};

export default ProjectCard;
