import React from "react";
import TeamCard from "@/components/TeamCard";
const Team = () => {
  const people = [
    {
      name: "Moin Khan",
      role: "Senior UX/UI Designer",
      imageUrl: "/images/moin.png",
      githubUrl: "/team",
      linkedinUrl: "/team",
      upworkUrl:
        "https://www.upwork.com/freelancers/~0121087c3a96b9fb84?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~0121087c3a96b9fb84%2Fprofile",
    },
    {
      name: "Waseem Kashif",
      role: "Senior Web Developer",
      imageUrl: "/images/waseemPro.png",
      githubUrl: "https://github.com/waseemKashif",
      linkedinUrl: "https://www.linkedin.com/in/waseem-kashif/",
      upworkUrl: "https://www.upwork.com/freelancers/~0103b29d00a999eebb",
    },
    {
      name: "Sameer Aslam",
      role: "Senior React Native Developer",
      imageUrl: "/images/sameer.png",
      githubUrl: "https://github.com/waseemKashif",
      linkedinUrl: "https://www.linkedin.com/in/waseem-kashif/",
      upworkUrl: "https://www.upwork.com/freelancers/~0103b29d00a999eebb",
    },
  ];
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            We&apos;re a dynamic group of individuals who are passionate about
            what we do.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person, index) => (
            <TeamCard
              image={person.imageUrl}
              name={person.name}
              role={person.role}
              linkedinUrl={person.linkedinUrl}
              githubUrl={person.githubUrl}
              upworkUrl={person.upworkUrl}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
