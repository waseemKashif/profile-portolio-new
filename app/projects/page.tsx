import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";
const Projects = () => {
  const projectsData = [
    {
      image: "/images/gilgitApp.png",
      title: " Gilgit App",
      description:
        "GilgitApp is a free online marketplace for buying and selling products/items anywhere in Pakistan. including cars, bikes, and many others. I am working as a front-end developer, This product is powered by Uconnect Technologies from Gilgit.",
      techList: "HTML, React Js, Tailwindcss, TypeScript",
      liveLink: "https://gilgit.app/",
      githubLink: "/",
    },
    {
      image: "/images/letsheGo.png",
      title: "let Nation Go",
      description:
        "let Nation Go is a financial service group of companies, it is a proper banking system that provides funds for projects and gives loans to the people. Operated in Africa. I worked as a 3rd party font-end developer. It was one of my long-term projects, I learned React and Redux with Material UI",
      techList: "React Js, JavaScript, Redux, Material UI",
      liveLink: "https://www.letsgo.letshego.com",
      githubLink: "/",
    },
    {
      image: "/images/cqed.svg",
      title: "Cultural Intelligence",
      description:
        "Cultural Intelligence (CQ) is effectively navigating and adapting to different cultural contexts. CQ is a crucial skill for success in today's globalized world. I developed this website for Christina, the owner of this project, UK.",
      techList: "Next Js,React Js,TypeScript,Tailwindcss,etc",
      liveLink: "https://globalcqed.com/",
      githubLink: "https://github.com/afaq-karim/cqed-website",
    },
    {
      image: "/images/ahMarketPro.jpg",
      title: "A&H Market Qatar",
      description:
        " the premier online shopping store in Qatar, AHMarket Qatar provides a comprehensive range of products, making it your primery source for everything you need. Whether you're in search of the latest electronics, mobile phones, furniture, carpets, books, stationery, sports and fitness equipment, cosmetics, or groceries, AHMarket Qatar Store has you covered with a vast selection",
      techList: "Magento 2, HTML5,CSS, javascript",
      liveLink: "https://www.ahmarket.com/en/",
      githubLink: "https://github.com/GullsherChaudhary/ahmarket_demo3",
    },
    {
      image: "/images/noonWeb.png",
      title: "Noon Demo Website",
      description:
        "Noon is a UAE-based shopping website where multiple products are available to purchase and you can also shop at another online store. it functions just like Daraz, I was appointed as a test developer for this and I developed its home page for testing, Here are some of its records.",
      techList: "Next Js,React Js,Tailwindcss",
      liveLink: "https://noon-demo.vercel.app/",
      githubLink: "https://github.com/waseemKashif/NoonWeb",
    },
    {
      image: "/images/youtubeImg.png",
      title: "Youtube Clone",
      description:
        "In my initial phases I practiced the code and created a clone of YouTube which is fully functional and you can search for videos and watch videos online. It suggests only 10 related videos. But in the mean time, I will work on it more to make it look perfect.",
      techList: "JavaScript,React Js,Semantic Css",
      liveLink: "https://youtube-hooks-ten-zeta.vercel.app/",
      githubLink: "https://github.com/waseemKashif/youtubeApp",
    },
    {
      image: "/images/todo.png",
      title: "Todo List Advance",
      description:
        "In 2021, I applied to a company for employment but I was not selected. At that time, I passed 3 of the interviews but the CTO did not recommended. This Todo application was their test task provided me, so I added this here to express my dedication. It is fully functional with local storage integrated.",
      techList: "React Js,JavaScript,Css",
      liveLink: "https://todolist-orcin-delta.vercel.app/",
      githubLink: "https://github.com/waseemKashif/Todo",
    },
    {
      image: "/images/arisSecure.png",
      title: "Aries Secure",
      description:
        "I Developed this with Jeff the owner of Aries secure company, This was security provider company and I worked as 3rd party developer and developed it website for the user who subscribe its services. due to busy schedule of the owner I worked only 4 month on this project and the contract was ended.",
      techList: "SvelteKit,Grpah QL, Tailwind Css",
      liveLink: "/projects",
      githubLink: "/projects",
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
      <div className=" flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-between lg:gap-x-8 md:gap-x-6 gap-y-8 md:gap-y-16">
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
