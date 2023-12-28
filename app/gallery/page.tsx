import React from "react";
import GalleryCard from "@/components/GalleryCard";
import Container from "@/components/Container";
const Gallery = () => {
  const GalleryData = [
    {
      image: "/images/gilgitAppMe.png",
      discription:
        "Luckily I got a skill at acting and to promote GilgitApp application I was chosen to be brand ambassador of the product. After creating 4-5 ads, the application reach has risen and we got 500k downloads in a year. Here is one of video, facebook.com/gilgitapp/videos",
      location: "Gilgit,Northern Areas of PK",
      date: "8th Aug 2023",
    },
    {
      image: "/images/china.png",
      discription:
        "It was a great experience. I was lucky enough to visit the China border, crossing from Khunjarb Pass located in the Northern Areas of Pakistan. I got a chance to visit Chinese territory  where I saw Chinese Army camps and their advanced monitoring mechanism to look after their area around the borders, All is done by robots and modern cameras.",
      location: "China, kashgar",
      date: "13 July 2017",
    },
    {
      image: "/images/allama.png",
      discription:
        "One of my golden times was when I joined the 'Step Program' it was a week-stay program by STEP. The pic is one of the acts I did there, They gave me the task of becoming Dr Muhammad Allama Iqbal and doing street acts in front of many people. It was a great learning and self-building program.",
      location: "Al-Azhar Garden, Karachi PK",
      date: "23rd Sept 2016",
    },
    {
      image: "/images/donation.png",
      discription:
        "Blood donation. I created a group of students from Gilgit Baltistan. Around 250 young students joined me to serve. Our primary goal was to give blood donations to the sick and poor people who came to Karachi for their treatments. This group still exists and working very well.",
      location: "Aga Khan University Hospital, Karachi",
      date: "28 Feb 2018",
    },
    {
      image: "/images/footballPro.png",
      discription:
        "First, football is one of my favorite games. I have grown up playing multiple outdoor games like table tennis, badminton, and cricket, but football is beyond all those. I was in the team of Aga Khan Gym Khan football club Garden Karachi and played matches at the regional level as well.",
      location: "Hill park, Karachi",
      date: "4th Sept 2017",
    },
    {
      image: "/images/solWasee.png",
      discription:
        "This image was taken back in 2014, I got a chance and was selected to participate in the 'Junior Leadership Conference' JLC. It was a 3-day stay program where different speakers taught us about the environment and leadership learning was provided to a great extent. It was organized by SOL 'School Of Learning'.",
      location: "Beach Luxary Hotel, Karachi",
      date: "14th Aug 2014",
    },
    {
      image: "/images/hunting.png",
      discription:
        "I belong to these mountains and grew up here climbing them at an early age. After hiking for a couple of days, we arrive here for hunting and to feed our cattle. I always loved to come here to hike and explore the beauty of nature. It keeps us physically fit and for good mental health.",
      location: "Himalayan Mountains, Hunza",
      date: "25th Aug 2018",
    },
  ];
  return (
    <Container>
      {GalleryData.map((item, index) => (
        <GalleryCard
          image={item.image}
          discription={item.discription}
          location={item.location}
          date={item.date}
          key={index}
        />
      ))}
    </Container>
  );
};

export default Gallery;
