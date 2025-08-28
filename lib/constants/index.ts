import FacebookIcon from "@/components/icons/facebookIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import GithubIcon from "@/components/icons/githubFooterIcon";
import LinkedinIcon from "@/components/icons/linkedinIcon";
import { SocialLinkTypes, linkTypes, userTypes } from "@/types";
export const headerNavigationLinks = [
  { name: "Home", href: "/", current: false },
  { name: "Team", href: "/team", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  {
    name: "View Resume",
    href: "/assets/WASEEM_KASHIF_Developer.pdf",
    current: false,
    target: "_blank",
  },
];

export const user: userTypes = {
  name: "Waseem Kashif",
  email: "waseemkashif7@gmail.com",
  imageUrl: "/images/waseemPro.png",
};
export const projectsData = [
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
    techList: "Next Js, React Js, TypeScript, Tailwindcss,etc",
    liveLink: "https://globalcqed.com/",
    githubLink: "https://github.com/afaq-karim/cqed-website",
  },
  {
    image: "/images/ansarGalleryPro.png",
    title: "Ansar Gallery Qatar",
    description:
      " the premier online shopping store in Qatar, Ansar Gallery Qatar provides a comprehensive range of products, making it your primery source for everything you need. Whether you're in search of the latest electronics, mobile phones, furniture, carpets, books, stationery, sports and fitness equipment, cosmetics, or groceries, AHMarket Qatar Store has you covered with a vast selection",
    techList: "Magento 2, HTML5, CSS, javascript",
    liveLink: "https://www.ansargallery.com/en/",
    githubLink: "https://github.com/GullsherChaudhary/ahmarket_demo3",
  },
  {
    image: "/images/noonWeb.png",
    title: "Noon Demo Website",
    description:
      "Noon is a UAE-based shopping website where multiple products are available to purchase and you can also shop at another online store. it functions just like Daraz, I was appointed as a test developer for this and I developed its home page for testing, Here are some of its records.",
    techList: "Next Js, React Js, Tailwindcss",
    liveLink: "https://noon-demo.vercel.app/",
    githubLink: "https://github.com/waseemKashif/NoonWeb",
  },
  {
    image: "/images/youtubeImg.png",
    title: "Youtube Clone",
    description:
      "In my initial phases I practiced the code and created a clone of YouTube which is fully functional and you can search for videos and watch videos online. It suggests only 10 related videos. But in the mean time, I will work on it more to make it look perfect.",
    techList: "JavaScript, React Js, Semantic Css",
    liveLink: "https://youtube-hooks-ten-zeta.vercel.app/",
    githubLink: "https://github.com/waseemKashif/youtubeApp",
  },
  {
    image: "/images/todo.png",
    title: "Todo List Advance",
    description:
      "In 2021, I applied to a company for employment but I was not selected. At that time, I passed 3 of the interviews but the CTO did not recommended. This Todo application was their test task provided me, so I added this here to express my dedication. It is fully functional with local storage integrated.",
    techList: "React Js, JavaScript,Css",
    liveLink: "https://todolist-orcin-delta.vercel.app/",
    githubLink: "https://github.com/waseemKashif/Todo",
  },
  {
    image: "/images/arisSecure.png",
    title: "Aries Secure",
    description:
      "I Developed this with Jeff the owner of Aries secure company, This was security provider company and I worked as 3rd party developer and developed it website for the user who subscribe its services. due to busy schedule of the owner I worked only 4 month on this project and the contract was ended.",
    techList: "SvelteKit, Grpah QL, Tailwind Css",
    liveLink: "/projects",
    githubLink: "/projects",
  },
  {
    image: "/images/ecommerce-website.jpg",
    title: "Ecommerce Website",
    description:
      "I developed this website for my own practice, used latest technologies. It is a fully functional e-commerce website where you can add products to the cart and remove them as well. create an account and login to your account. I used Prisma and MongoDB for backend with PostgreSQL.",
    techList:
      "React Js, Next Js, Shadcn, Tailwind CSS, Prisma, MongoDB, Next Auth",
    liveLink: "https://blackhite-store.vercel.app/",
    githubLink: "https://github.com/waseemKashif/blackhite_store",
  },
];
export const mainNavigationLinks: linkTypes[] = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/team" },
];
export const footerNavigationLinks: { social: SocialLinkTypes[] } = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/wasim.flame/",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/waseem_gilgiti99/",
      icon: InstagramIcon,
    },

    {
      name: "GitHub",
      href: "https://github.com/waseemKashif/",
      icon: GithubIcon,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/waseem-kashif/",
      icon: LinkedinIcon,
    },
  ],
};
