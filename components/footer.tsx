import React from "react";
import Link from "next/link";
import FacebookIcon from "./icons/facebookIcon";
import InstagramIcon from "./icons/instagramIcon";
import GithubIcon from "./icons/githubFooterIcon";
import Container from "./Container";
const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "/",
      icon: <FacebookIcon className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "/",
      icon: <InstagramIcon className="h-6 w-6" />,
    },

    {
      name: "GitHub",
      href: "/",
      icon: <GithubIcon className="h-6 w-6" />,
    },
  ],
};

export default function Example() {
  return (
    <Container>
      <footer className="">
        <div className="mx-auto max-w-7xl overflow-hidden px-6  lg:px-8">
          <nav className="-mb-6 grid grid-cols-2  justify-center items-center  sm:flex sm:justify-center sm:space-x-12 w-full  text-center">
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <Link
                  href={item.href}
                  className="text-sm leading-6 text-gray-300  hover:text-white"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300  hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-300">
            &copy; 2023 Waseem Kashif, All rights reserved.
          </p>
        </div>
      </footer>
    </Container>
  );
}
