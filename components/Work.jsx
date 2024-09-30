"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";
import { Description } from "@radix-ui/react-dialog";

const projectData = [
  {
    image: "/work/TDMS_1.png",
    category: "ReactJS",
    name: "Talent Management System",
    description: "It is a system for Del Monte Philippines Inc. (Bugo Cannery)",
    link: "/",
    github: "/",
  },
  {
    image: "/work/design.png",
    category: "flutter",
    name: "Design Thinking Mobile App",
    description: "It is a mobile application for Phinma Education Network",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Attdenadance.png",
    category: "ReactJS",
    name: "Attendance Monitoring System",
    description:
      "It is a mobile and web base application that can monitor the attendance of the students during an event.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/SM Store.png",
    category: "ReactJS",
    name: "Super Market (SM) Sales and Inventory System",
    description:
      "It is a web based for Super Market (SM) Point of Sales System.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Kizzy Website",
    description:
      "It is a website for Kizzy, it is basically a studying app online.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Shadrina Website",
    description:
      "It is a website for Shadrina, it is basically a studying app online.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Anadyl Website",
    description:
      "It is a website for Anadyl, it is basically a studying app online.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Joel Website",
    description:
      "It is a website for Joel, it is basically a studying app online.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Application",
    name: "Faith Website",
    description:
      "It is a website for Faith, it is basically a studying app online.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            This is my latest project that I created.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slider */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
