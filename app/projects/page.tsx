import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";
const Projects = () => {
  const projectsData = [
    {
      image: "/images/gilgitApp.png",
      title: " Gilgit App",
      description:
        "GilgitApp is a free online marketplace for buying and selling products/items anywhere in Pakistan. You can buy, sell or exchange your multiple products through the app.",
      techList: "HTML,React Js, Tailwindcss",
      liveLink: "https://gilgit.app/",
      githubLink: "/",
    },
    {
      image: "/images/letsheGo.png",
      title: "Letshego Nation",
      description:
        "letshego is a financial service group of compinese, its a proper banking system which provide funds for project and give loans to the people. Operated in Africa. I was working as 3rd party font-end developer, the main profile which I was working is 'Zahid Karim'.",
      techList: "HTML,React Js, Tailwindcss",
      liveLink: "https://www.letsgo.letshego.com",
      githubLink: "/",
    },
  ];
  return (
    <Container className=" flex flex-col justify-start items-center text-[#CCCCCC]">
      <div className=" flex flex-col gap-y-4  md:gap-y-6 pb-8  md:pb-10 text-center">
        <h1 className=" text-[#CCCCCC] text-4xl leading-normal  md:text-5xl font-bold md:leading-7 ">
          {" "}
          Projects
        </h1>
        <p className=" text-xl"> Things I&apos;ve built so far</p>
      </div>
      <div className=" flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-between lg:gap-x-8 md:gap-x-6 gap-y-8">
        {projectsData.map((item, index) => (
          <ProjectCard
            image={item.image}
            title={item.title}
            description={item.description}
            techList={item.techList}
            liveLink={item.liveLink}
            githubLink={item.githubLink}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
