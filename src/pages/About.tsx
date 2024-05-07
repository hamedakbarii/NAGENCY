import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MeetTeam from "@/components/MeetTeam";
import OurWorks from "@/components/OurWorks";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";

export default function About() {
  return (
    <div className="w-full">
      {/* About page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">درباره ی ما</h2>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-secondaryColor text-sm">
                خانه
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <Slash className="text-secondaryColor text-sm" />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="/about"
                className="text-secondaryColor text-sm"
              >
                درباره
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* About us */}
      <div className="flex w-5/6 mx-auto mt-32">
        <div className="flex flex-col gap-6">
          <span className="text-primaryColor text-sm">درباره ما </span>

          <h2 className="text-black font-semibold text-3xl">
            ما 15 سال تجربه در آژانس دیجیتال خلاق داریم
          </h2>

          <p className="text-secondaryColor text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>

          <div className="flex gap-10">
            <div className="flex flex-col">
              <h3 className="text-lightBlue text-2xl">1254+</h3>
              <span className="text-secondaryColor text-sm">مشتریان راضی</span>
            </div>

            <div className="flex flex-col">
              <h3 className="text-lightBlue text-2xl">3245+</h3>
              <span className="text-secondaryColor text-sm">
                پروژه های تکمیل شده
              </span>
            </div>
          </div>

          <Link to={"/service"}>
            <Button className="bg-lightBlue text-[#F8FAFC] transition-all hover:opacity-70 w-[30%]">
              تماشای سرویس
            </Button>
          </Link>
        </div>

        <img
          src="./images/Home/aboutUsImge.png"
          alt="aboutUs Image"
          className="hidden md:block"
        />
      </div>

      {/* project manager */}
      <div className="flex flex-col md:flex-row justify-center items-center w-5/6 mx-auto gap-20 mt-32">
        <img src="./images/About/manager.png" alt="manager image" width={250} />

        <div className="flex flex-col gap-10">
          <h2 className="text-3xl text-black">
            "دسترسی خود را با بازاریابی به حداکثر برسانید - پتانسیل رشد کسب و
            کار خود را باز کنید!"
          </h2>

          <p className="text-sm text-secondaryColor">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با
          </p>

          <div className="flex flex-col">
            <h2 className="text-lightBlue">آلپای طالب زاده</h2>
            <span className="text-secondaryColor text-xs">مدیر پروژه</span>
          </div>
        </div>
      </div>

      {/* statistics */}
      <div className="flex flex-col md:flex-row gap-10 justify-around items-center w-5/6 mx-auto rounded-2xl bg-[#FEF3F5] p-10 mt-32">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-bold text-3xl">320+</h2>
          <span className="text-secondaryColor text-sm">
            پروژه های تکمیل شده
          </span>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-bold text-3xl">25+</h2>
          <span className="text-secondaryColor text-sm">شرکت تعاون</span>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-bold text-3xl">120+</h2>
          <span className="text-secondaryColor text-sm">مشتری های راضی</span>
        </div>
      </div>

      {/* our visions */}
      <div className="flex flex-col justify-center items-center mt-32 gap-8">
        <span className="text-primaryColor text-sm">چشم اندازهای ما</span>

        <h2 className="text-3xl font-semibold text-black">
          ارائه راه حل های خلاقانه
        </h2>

        <p className="text-secondaryColor text-sm w-[70%] text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          و مجله در ستون و سطرآنچنان که لازم است
        </p>
      </div>

      <MeetTeam />
      <OurWorks />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
