import ContactUs from "@/components/ContactUs";
import OurProjects from "@/components/OurProjectsSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export default function ProjectDetail() {
  return (
    <div className="w-full">
      {/* Project Deatils page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">پروژه های ما</h2>

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
                href="/ourprojects"
                className="text-secondaryColor text-sm"
              >
                پروژه های ما
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-20 flex flex-col md:flex-row items-start gap-10 w-[90%] mx-auto">
        <div className="flex flex-col gap-6 bg-[#F8FBFF] p-6 w-full md:w-[30%] rounded-lg">
          <div className="flex flex-col gap-2">
            <h3>مشتری</h3>

            <span className="text-secondaryColor text-sm ">آژانس مدرسه ای</span>
          </div>

          <div className="flex flex-col gap-2">
            <h3>کار بلند مدت</h3>

            <span className="text-secondaryColor text-sm ">دو ماه</span>
          </div>

          <div className="flex flex-col gap-2">
            <h3>دسته بندی</h3>

            <span className="text-secondaryColor text-sm ">ساخت وبسایت</span>
          </div>
        </div>

        <div className="w-full md:w-[70%] flex flex-col">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-primaryColor">نام پروژه</span>
            <h2 className="text-3xl">ساخت وبسایت علمی</h2>
            <p className="text-secondaryColor pt-10">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-32">
            <h2 className="text-3xl">این پروژه را به چالش بکشید</h2>
            <p className="text-secondaryColor pt-10">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
            <p className="text-secondaryColor pt-10">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </div>

      <OurProjects />
      <ContactUs />
    </div>
  );
}
