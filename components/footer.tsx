import React from "react";
import Link from "next/link";
import { footerNavigationLinks, mainNavigationLinks } from "@/lib/constants";
import Container from "./Container";
import { linkTypes, SocialLinkTypes } from "@/types";
export default function Example() {
  return (
    <Container>
      <footer className=" pt-6  md:pt-12">
        <div className="mx-auto max-w-7xl overflow-hidden px-6  lg:px-8">
          <nav className="-mb-6 grid grid-cols-2  justify-center items-center  sm:flex sm:justify-center sm:space-x-12 w-full  text-center">
            {mainNavigationLinks.map((item: linkTypes) => (
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
            {footerNavigationLinks.social.map((item: SocialLinkTypes) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300  hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" width="1.6rem" height="1.5rem" />
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
