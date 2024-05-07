import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function Testimonial() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const carouselItems = [
    {
      title:
        '"دسترسی خود را با بازاریابی به حداکثر برسانید - پتانسیل رشد کسب و کار خود را باز کنید!"',
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      name: "حامد اکبری",
      job: "تیم رویایی سئو",
      logo: "./images/LogoIpsum.png",
    },

    {
      title:
        '"دسترسی خود را با بازاریابی به حداکثر برسانید - پتانسیل رشد کسب و کار خود را باز کنید!"',
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      name: "حامد اکبری",
      job: "تیم رویایی سئو",
      logo: "./images/LogoIpsum.png",
    },

    {
      title:
        '"دسترسی خود را با بازاریابی به حداکثر برسانید - پتانسیل رشد کسب و کار خود را باز کنید!"',
      paragraph:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
      name: "حامد اکبری",
      job: "تیم رویایی سئو",
      logo: "./images/LogoIpsum.png",
    },
  ];

  return (
    <div>
      {/* Testimonial page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">گواهینامه</h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-secondaryColor text-sm">
                خانه
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <Slash className="text-sm text-secondaryColor" />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="/testimonial"
                className=" text-secondaryColor text-sm"
              >
                گواهینامه
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Testimonials />

      <div className="flex flex-col mt-32 w-5/6 mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-sm text-primaryColor">
            آنچه دیگران می گویند
          </span>

          <h2 className="text-black text-3xl">
            همچنین شرکت های بزرگ زیادی <br /> وجود دارند که با ما همکاری می کنند
          </h2>
        </div>

        <div className="w-full mt-10 flex flex-col justify-center items-center gap-10">
          <Carousel setApi={setApi} className="w-full max-w-xs" dir="ltr">
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col justify-center items-start gap-4">
                    <h2 className="text-2xl text-black font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-secondaryColor text-sm">
                      {item.paragraph}
                    </p>

                    <div className="flex justify-center items-center gap-6">
                      <div className="flex flex-col">
                        <h4 className="text-lightBlue">{item.name}</h4>

                        <span className="text-sm text-secondaryColor">
                          {item.job}
                        </span>
                      </div>

                      <img src={item.logo} alt="logo ipsum" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />

            <CarouselNext />
          </Carousel>

          <div className="py-2 text-center text-sm text-muted-foreground">
            {current} از {count}
          </div>
        </div>
      </div>

      <Faq />
      <ContactUs />
    </div>
  );
}
