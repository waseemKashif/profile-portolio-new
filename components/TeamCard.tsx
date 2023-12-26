import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import GithubIcon from "./icons/githubFooterIcon";
import LinkedinIcon from "./icons/linkedinIcon";
import UpworkIcon from "./icons/upworkIcon";
interface TeamCardType {
  image: string | StaticImageData;
  name: string;
  role: string;
  linkedinUrl: string;
  githubUrl: string;
  upworkUrl: string;
}
const TeamCard: React.FC<TeamCardType> = ({
  image,
  name,
  role,
  linkedinUrl,
  githubUrl,
  upworkUrl,
}) => {
  return (
    <li key={name} className="rounded-2xl bg-gray-800 px-8 py-10">
      <Image
        className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56 bg-gray-300"
        src={image}
        alt=""
        width={1000}
        height={700}
      />
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
        {name}
      </h3>
      <p className="text-sm leading-6 text-gray-400">{role}</p>
      <ul role="list" className="mt-6 flex justify-center gap-x-6 items-center">
        <li>
          <Link
            href={githubUrl}
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
          >
            <GithubIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link
            href={linkedinUrl}
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
          >
            <LinkedinIcon className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link
            href={upworkUrl}
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
          >
            <UpworkIcon className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default TeamCard;
