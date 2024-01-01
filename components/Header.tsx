"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import DownloadIcon from "./icons/downloadIcon";
import Image from "next/image";
import Model from "./Model";
import ContactMeSection from "./ContactMeSection";
export default function Header() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleOpenModel = () => {
    setIsModelOpen(true);
  };

  const handleCloseModel = () => {
    setIsModelOpen(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [downloadStard, setDownloadStart] = useState(false);
  const user = {
    name: "Waseem Kashif",
    email: "waseemkashif7@gmail.com",
    imageUrl: "/images/waseemPro.png",
  };
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: false },
    { name: "Team", href: "/team", current: false },
    { name: "Projects", href: "/projects", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Gallery", href: "/gallery", current: false },
  ]);
  useEffect(() => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) => ({
        ...item,
        current: pathname === item.href,
      }))
    );
  }, [pathname]);
  const handleDownload = () => {
    setDownloadStart(true);
    setTimeout(() => {
      setDownloadStart(false);
    }, 7000);
  };
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="z-50 fixed w-full">
      <Disclosure
        as="nav"
        className={`${
          isScrolled ? "bg-gray-800" : "bg-gray-800  md:bg-transparent"
        } transition-colors `}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl  pr-6 ">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`${
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white"
                          } rounded-md px-3 py-2 text-sm font-medium`}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className={`${
                        isScrolled ? "text-gray-400" : "text-white "
                      } relative rounded-full  p-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:pr-4`}
                    >
                      <a
                        href="/assets/resume.pdf"
                        download="resume.pdf"
                        className="flex items-center gap-x-1"
                        onClick={handleDownload}
                      >
                        {downloadStard ? (
                          <Image
                            src="/images/downloadAni.gif"
                            alt=" download icon"
                            width={30}
                            height={30}
                          />
                        ) : (
                          <DownloadIcon />
                        )}
                        Resume
                      </a>
                    </button>
                    <div className="text-base font-medium text-white">
                      <button
                        onClick={handleOpenModel}
                        className="px-2.5 py-1.5 bg-green-600 rounded-lg hover:bg-green-500 flex items-center justify-center gap-x-1"
                      >
                        <UserIcon className="w-5 h-5" />
                        Contact
                      </button>
                    </div>
                    <Model isOpen={isModelOpen} onClose={handleCloseModel}>
                      <ContactMeSection />
                    </Model>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <Image
                            className="h-8 w-8 rounded-full bg-white"
                            src={user.imageUrl}
                            alt="menu"
                            width={500}
                            height={500}
                          />
                        </Menu.Button>
                      </div>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={`${
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                        block rounded-md px-3 py-2 text-base font-medium`}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <div className="text-base font-medium text-white">
                  <button
                    onClick={handleOpenModel}
                    className="px-2.5 py-1.5 bg-green-600 rounded-lg hover:bg-green-500 flex items-center justify-center gap-x-1"
                  >
                    <UserIcon className="w-5 h-5" />
                    Contact
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-start px-5">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full bg-white"
                      src={user.imageUrl}
                      alt="icon"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-200">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user.email}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <a
                      href="/assets/resume.pdf"
                      download="resume.pdf"
                      className="flex items-center gap-x-1"
                      onClick={handleDownload}
                    >
                      {downloadStard ? (
                        <Image
                          src="/images/downloadAni.gif"
                          alt=" download icon"
                          width={30}
                          height={30}
                        />
                      ) : (
                        <DownloadIcon />
                      )}
                      Resume
                    </a>
                  </button>
                </div>
              </div>
              <Model isOpen={isModelOpen} onClose={handleCloseModel}>
                <ContactMeSection />
              </Model>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
