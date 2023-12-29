import React from "react";
import Link from "next/link";
import FacebookIcon from "./icons/facebookIcon";
import InstagramIcon from "./icons/instagramIcon";
import GithubIcon from "./icons/githubFooterIcon";
import LinkedinIcon from "./icons/linkedinIcon";
import Container from "./Container";
const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/wasim.flame/",
      icon: <FacebookIcon className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/waseem_gilgiti99/",
      icon: <InstagramIcon className="h-6 w-6" />,
    },

    {
      name: "GitHub",
      href: "https://github.com/waseemKashif/",
      icon: <GithubIcon className="h-6 w-6" />,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/waseem-kashif/",
      icon: <LinkedinIcon className="h-5 w-5" />,
    },
  ],
};

export default function Example() {
  return (
    <Container>
      <footer className=" pt-6  md:pt-12">
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
          <div className="mt-10 flex justify-center space-x-10 items-center">
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
