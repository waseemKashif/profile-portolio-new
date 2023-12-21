import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";
const Projects = () => {
  const projectsData = [
    {
      image: "/images/gilgitApp.png",
      title: " Gilgit App",
      description:
        "GilgitApp is a free online marketplace for buying and selling products/items anywhere in Pakistan. including cars, bikes,and many others. I am working as front-end developer, this product is powerd by Uconnect Technologies from Gilgit.",
      techList: "HTML, React Js, Tailwindcss, TypeScript",
      liveLink: "https://gilgit.app/",
      githubLink: "/",
    },
    {
      image: "/images/letsheGo.png",
      title: "Letshego Nation",
      description:
        "letshego is a financial service group of compinese, its a proper banking system which provide funds for project and give loans to the people. Operated in Africa. I was working as 3rd party font-end developer. It was one of my long term project, I have learned React and Redux with Material UI",
      techList: "React Js, JavaScript, Redux, Material UI",
      liveLink: "https://www.letsgo.letshego.com",
      githubLink: "/",
    },
    {
      image: "/images/cqed.svg",
      title: "CQED Cultural Intelligence",
      description:
        "Cultural Intelligence (CQ) is the ability to effectively navigate and adapt to different cultural contexts. CQ is a crucial skill for success in today's globalised world. I developed this website for Christina the owner of this project, UK",
      techList: "Next Js,React Js,Tailwindcss,etc",
      liveLink: "https://globalcqed.com/",
      githubLink: "https://github.com/afaq-karim/cqed-website",
    },
  ];
  return (
    <Container className=" flex flex-col justify-start items-center text-[#CCCCCC] ">
      <div className=" flex flex-col gap-y-4  md:gap-y-6 pb-8  md:pb-10 text-center mt-12">
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
