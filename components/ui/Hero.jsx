import Link from "next/link";
import { Button } from "../ui/button"; // Corrected import path
import { Download, Send } from "lucide-react";

import {
  RiArrowDownSLine,
  RiTeamFill,
  RiBriefcase4Fill,
  RiTodoFill,
  RiSchoolFill,
  RiInformationFill,
} from "react-icons/ri";

import Socials from "../Socials";
import Badge from "../Badge";
import DevImg from "./DevImg";

//components

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              System Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Kert Ice Roque</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I am a future system developer, and I want to inspire other people
              to focus on programming.
            </p>
            {/* button*/}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* Badge 1 */}
            <Badge
              containerStyles="absolute top-[30] -left-[15rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={4}
              endCountText="th"
              badgeText="Year College"
            />
            {/* Badge 2 */}
            <Badge
              containerStyles="absolute top-[60%] -left-[15rem]"
              icon={<RiInformationFill />}
              endCountNum={"1"}
              endCountText="T"
              badgeText="Information Technology"
            />
            {/* Badge 3 */}
            <Badge
              containerStyles="absolute top-[61%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={10}
              endCountText=""
              badgeText="Finish Projects"
            />
            <DevImg
              containerStyles="flex w-[420px] h-[450px] bg-no-repeat relative bg-cover absolute top-[2%] right-20"
              imgSrc="/about/Keket.png"
              borderStyle="border-4 border-primary"
            />
          </div>
        </div>
        {/* icon*/}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
