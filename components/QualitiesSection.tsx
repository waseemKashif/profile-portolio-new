import React from "react";
import {
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
const QualitiesSection = () => {
  const values = [
    {
      name: "Be world-class.",
      description:
        "consistently delivering exceptional performance, pushing beyond limits and sets a standard admired on a global scale. ",
      icon: RocketLaunchIcon,
    },
    {
      name: "Take responsibility.",
      description:
        "embodies accountability, acknowledging one's actions, and proactively owning the outcomes, fostering trust and integrity by consistently demonstrating reliability and a commitment.",
      icon: HandRaisedIcon,
    },
    {
      name: "Be supportive.",
      description:
        "entails actively uplifting others, offering unwavering encouragement, and providing a sturdy foundation for growth.",
      icon: UserGroupIcon,
    },
    {
      name: "Always learning.",
      description:
        "Learning never ends till we die, so I seek to learn whatever deficiencies I have and try to overcome the lackness of knowledge in me.",
      icon: AcademicCapIcon,
    },
    {
      name: "Sharing is caring.",
      description:
        "Being a mentor, I always try to spread the knowledge I carry and learn from others as well. In my opinion, sharing knowledge is the biggest thing a man can do.",
      icon: SparklesIcon,
    },
    {
      name: "Enjoy downtime.",
      description:
        "A peaceful downtime with a cup of tea can alleviate your pain and offer relief from life's stress. So I enojoy my downtime better.",
      icon: SunIcon,
    },
  ];
  return (
    <div className="mx-auto mt-10 max-w-7xl px-6 sm:mt-20 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Qualities
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Everybody carries some positive and negative habits or qualities that
          define their way of living. Some of mine are down below.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
        {values.map((value) => (
          <div key={value.name} className="relative pl-9">
            <dt className="inline font-semibold text-white">
              <value.icon
                className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                aria-hidden="true"
              />
              {value.name}
            </dt>{" "}
            <dd className="inline">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default QualitiesSection;
