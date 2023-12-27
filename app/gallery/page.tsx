import React from "react";
import GalleryCard from "@/components/GalleryCard";
import Container from "@/components/Container";
const Gallery = () => {
  const GalleryData = [
    {
      image: "/images/gilgitAppMe.png",
      discription:
        "Luckly I got a skill of acting and to promote GilgitApp application I was chosen for being brand ambassador of the product. After creating 4-5 ads the application reach has been rised and we got 500k downloads with a year. here is one of video, https://www.facebook.com/gilgitapp/videos/734986068678026/ ",
      location: "Gilgit,Northern Areas of PK",
      date: "8th Aug 2023",
    },
    {
      image: "/images/china.png",
      discription:
        " It was a great experinc I was lucky enough to visit China border, crossing from Khunjarb Pass located in the Northern Areas of Pakistan. I got a chance to visit in China terrority where I saw Chinese Army camps and their advance monotering mechanism to look after their area around the borders, All is done by robots and modern cameras.",
      location: "China, kashgar",
      date: "13 July 2017",
    },
    {
      image: "/images/allama.png",
      discription:
        "One my golden times when I joined 'Step Program' it was one week stay program by STEP. The pic is one of my act I did there, They gave mt task to become Dr Muhammad Allama Iqbal and do street Act infront of many people. It was great learning and self building program.",
      location: "Al-Azhar Garden, Karachi PK",
      date: "23rd Sept 2016",
    },
    {
      image: "/images/donation.png",
      discription:
        "Blood donation. I created a group of students of Gilgit Baltistan. around 250 young students joined me to serve. Our primary goal was to give blood donation for the sick and poor people who come to karachi for their treatments. this group still exist and working very well.",
      location: "Aga Khan University Hospital, Karachi",
      date: "28 Feb 2018",
    },
    {
      image: "/images/footballPro.png",
      discription:
        "From the initial football is one of my favourite game!. I grown up playing multiple outdoor game like table tennis, badminton, cricket but football is beyond all those. I was in team of Aga Khan gym khana football club Garden Karachi, played matches on regional level as well.",
      location: "Hill park, Karachi",
      date: "4th Sept 2017",
    },
    {
      image: "/images/solWasee.png",
      discription:
        "This image was taken back in 2014, I got a chance and selected for participating in 'Junior Leadership Conference' JLC. it was 3 days stay program where different speakers taught us about environment and leadership learnings are provided to great extint. it was organized by SOL 'School Of Learning'.",
      location: "Beach Luxary Hotel, Karachi",
      date: "14th Aug 2014",
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
