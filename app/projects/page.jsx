"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/TDMS_1.png",
    category: "react js",
    name: "Talent Management System",
    description: "It is a system for Del Monte Philippines Inc. (Bugo Cannery)",
    link: "/",
    github: "/",
  },
  {
    image: "/work/design.png",
    category: "Flutter",
    name: "Design Thinking App",
    description: "It is a mobile application for Phinma Education Network.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Attdenadance.png",
    category: "react js",
    name: "Attendance Monitoring System",
    description:
      "It is a mobile and web base application that can monitor the attendance of the students during an event.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/registration.png",
    category: "HTML",
    name: "Registration Form With QR CODE",
    description:
      "It is a website that helps other people to automate the process of registration form.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/virus.png",
    category: "Unity",
    name: "Virus Game",
    description:
      "The game revolves around the spread, control, and eradication of infectious viruses. The theme of the game is inspired on COVID19 Virus.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/SM Store.png",
    category: "react js",
    name: "Sales and Inventory System",
    description:
      "It is a web based for Super Market (SM) Point of Sales System.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/ordering.png",
    category: "Flutter",
    name: "Ordering Mobile Application",
    description:
      "It is a ordering system in mobile application and it inspired by Pizza Hut",
    link: "/",
    github: "/",
  },
  {
    image: "/work/payroll.png",
    category: "react js",
    name: "Payroll Calculator",
    description:
      "It is a web application that can easily calculate the deduction.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/event.png",
    category: "HTML",
    name: "Event Management System",
    description:
      "It is a website for the teacher or organizer to manage the event through automate process.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/math.png",
    category: "Flutter",
    name: "Math for Kids Game",
    description:
      "It is a game for the kids and it contain basic addition, subtraction, multiplication, and division.",
    link: "/",
    github: "/",
  },
];

//remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, SetCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    //iff category is all projects return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  console.log(categories);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => SetCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
