import TestimonialsItem from "./TestimonialsItem";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonialData = [
    {
      icon: "./images/Home/testimonials/avatar1.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
    {
      icon: "./images/Home/testimonials/avatar2.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
    {
      icon: "./images/Home/testimonials/avatar3.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
    {
      icon: "./images/Home/testimonials/avatar4.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
    {
      icon: "./images/Home/testimonials/avatar5.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
    {
      icon: "./images/Home/testimonials/avatar6.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
    {
      icon: "./images/Home/testimonials/avatar1.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
    {
      icon: "./images/Home/testimonials/avatar2.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
    {
      icon: "./images/Home/testimonials/avatar3.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
    {
      icon: "./images/Home/testimonials/avatar4.png",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
      user: "@hamedakbrii",
    },
  ];

  return (
    <div className="w-full mt-32 flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col gap-4 text-center">
        <span className="text-primaryColor">گواهینامه</span>
        <h2 className="text-2xl text-black">
          مشتریان خوشحال ما در مورد ما می گویند
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
        className="w-full bg-white p-4"
        dir="ltr"
      >
        <CarouselContent className="w-full">
          {testimonialData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <TestimonialsItem
                  icon={item.icon}
                  text={item.text}
                  user={item.user}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full md:w-[1250px] xl:w-[1400px] bg-white p-4"
        dir="ltr"
      >
        <CarouselContent className="w-full">
          {testimonialData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <TestimonialsItem
                  icon={item.icon}
                  text={item.text}
                  user={item.user}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
