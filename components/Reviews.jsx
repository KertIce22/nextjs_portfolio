"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Andrew Talaboc",
    job: "Software Engineer",
    review: "It is worth it and beautiful",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Mirah Mea Aguilar",
    job: "Alter (Twitter)",
    review: "It is worth it and beautiful",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Angelo Serafino",
    job: "Computer Engineer",
    review: "It is worth it and beautiful",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Faith Elaiza La Victoria",
    job: "Civil Engineer",
    review: "It is worth it and beautiful",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Shadrin Jerome Mopal",
    job: "IT Manager",
    review: "It is worth it and beautiful",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Kide Guile Compo",
    job: "Rapist/Drug Lord",
    review: "It is worth it and beautiful",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* swiper */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            checkable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-green-200 dark:bg-slate-700 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image*/}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
