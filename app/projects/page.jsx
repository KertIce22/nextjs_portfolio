"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "It is a website for Nexa, it is basically a studying app online.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Andrea Website",
    description:
      "It is a website for Andrea, it is basically a studying app online.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Mirah Website",
    description:
      "It is a website for Mirah, it is basically a studying app online.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Application",
    name: "Angelo Website",
    description:
      "It is a website for Angelo, it is basically a studying app online.",
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
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
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
