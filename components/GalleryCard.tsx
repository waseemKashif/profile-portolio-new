import React from "react";
import Image, { StaticImageData } from "next/image";
import CommaIcon from "./icons/comaIcon";
import { MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
interface GalleryCardTypes {
  image: string | StaticImageData;
  discription: string;
  location: string;
  date?: string;
}
const GalleryCard: React.FC<GalleryCardTypes> = ({
  image,
  discription,
  location,
  date,
}) => {
  return (
    <div className="bg-gray-800 pb-16 pt-24 sm:pb-8 sm:pt-32 xl:pb-12">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0 rounded-lg">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <Image
                width={1000}
                height={700}
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src={image}
                alt={location}
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-20">
            <figure className="relative isolate pt-6 sm:pt-12">
              <CommaIcon className="absolute left-0 top-0 -z-10 h-32 stroke-white/20" />
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>{discription}</p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="mt-1 text-gray-400 flex flex-col gap-y-3 ">
                  <span className="flex gap-x-2 items-center">
                    {location} <MapPinIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <span className="flex gap-x-2 items-center">
                    {date}{" "}
                    <CalendarDaysIcon className="h-5 w-5 text-gray-400" />
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
