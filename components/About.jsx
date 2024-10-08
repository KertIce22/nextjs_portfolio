//components
import DevImg from "./ui/DevImg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  GanttChartSquare,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Kert Ice Roque",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+63 955 169 8380",
  },
  {
    icon: <MailIcon size={20} />,
    text: "kertroque@gmail.com",
  },
  {
    icon: <GanttChartSquare size={20} />,
    text: "Born on 22 Jun, 2002",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "BS in Information Technology",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Iponan, Cagayan de Oro City 9000",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "PHINMA Cagayan de Oro College",
        qualification: "BS in Information Technology",
        year: "2021 - 2025",
      },
      {
        university: "Pilgrim Christian College",
        qualification: "TVL Information and Communication Technologies",
        year: "2019- 2021",
      },
      {
        university: "Sixto A. Abao National High School",
        qualification: "Junior",
        year: "2014 - 2019",
      },
      {
        university: "Hubangon Elementary School",
        qualification: "Elementary",
        year: "2009 - 2017",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Del Monte Philippines",
        role: "IT Developer",
        year: "2024",
      },
      {
        company: "Teleperformance",
        role: "Technical Support",
        year: "2022-2023",
      },
    ],
  },
];

const skillData = [
  {
    title: "Skills",
    data: [
      {
        name: "Web Development",
      },
      {
        name: "App Development",
      },

      {
        name: "Game Development",
      },
      {
        name: "Quality Assurance",
      },
      {
        name: "UI/UX",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode_icon.png",
      },
      {
        imgPath: "/about/canva_icon.png",
      },

      {
        imgPath: "/about/figma_icon.png",
      },
      {
        imgPath: "/about/unity_icon.png",
      },
      {
        imgPath: "/about/aseprite_icon.png",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>

        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <div className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 left-2 rounded-full border-4 border-green-700"></div>
            <DevImg
              containerStyles=" w-[550px] h-[580px] bg-no-repeat relative bg-bottom bp-top left-[0.2rem] absolute top-[4%]"
              imgSrc="/about/Keket.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Future Developer, Specialty - Frontend & UI/UX
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in frontend development and design, with a
                      preference for working in React and Flutter.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Programming Languages</div>
                      <div className="border-b border-border"></div>
                      <div>
                        HTML | CSS | JAVASCRIPT | REACT | FLUTTER | PHP | MySQL
                        | CANVA | FIGMA | UNITY | ASEPRITE
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualifications">
                  <div className="mt-12">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* experience and education */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex  gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience").data.map(
                            (item, index) => {
                              const { company, role, year } = item;
                              return (
                                <div
                                  className=" flex gap-x-8 group bg-green-100"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex  gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div
                                  className=" flex gap-x-8 group bg-green-100"
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h4 mb-8">
                      Technical skills and tools I am expert with:
                    </h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2 text-green-600">
                        Technical Skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "Skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left text-green-600">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "Tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
