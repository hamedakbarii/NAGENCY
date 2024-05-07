import ContactUs from "@/components/ContactUs";
import OurWorks from "@/components/OurWorks";
import Pricing from "@/components/Pricing";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export default function Service() {
  return (
    <div className="w-full">
      {/* Servise page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">سرویس</h2>

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
                href="/service"
                className="text-secondaryColor text-sm"
              >
                سرویس
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* services box */}
      <div>
        <div className="w-5/6 mx-auto flex flex-col justiify-center items-center mt-32">
          <span className="text-sm text-primaryColor">سرویس های ما </span>

          <h2 className="font-semibold text-2xl">
            چه چیزی می توانیم برای شما بیاوریم
          </h2>
        </div>

        <div className="mt-32 w-5/6 mx-auto flex flex-col justify-center items-center gap-10">
          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-4 flex flex-col gap-6 w-[40%]">
              <img
                src={"./images/Home/ourService/Chart.png"}
                alt="icon"
                className="w-8"
              />

              <h3 className="text-black">طرح مشاور</h3>

              <p className="text-secondaryColor text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="bg-white p-4 flex flex-col gap-6 w-[40%]">
              <img
                src={"./images/Home/ourService/Graph.png"}
                alt="icon"
                className="w-8"
              />

              <h3 className="text-black">تفکر طراحی</h3>

              <p className="text-secondaryColor text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-4 flex flex-col gap-6 w-[40%]">
              <img
                src={"./images/Home/ourService/Filter.png"}
                alt="icon"
                className="w-8"
              />

              <h3 className="text-black">بازاریابی سئو</h3>

              <p className="text-secondaryColor text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="bg-white p-4 flex flex-col gap-6 w-[40%]">
              <img
                src={"./images/Home/ourService/Work.png"}
                alt="icon"
                className="w-8"
              />

              <h3 className="text-black">مشاور بازرگانی</h3>

              <p className="text-secondaryColor text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-4 flex flex-col gap-6 w-[40%]">
              <img
                src={"./images/Home/ourService/Heart.png"}
                alt="icon"
                className="w-8"
              />

              <h3 className="text-black">برند شخصی</h3>

              <p className="text-secondaryColor text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و
              </p>
            </div>
          </div>

          <div className="flex  justify-center md:justify-start">
            <div className="bg-white p-4 flex flex-col gap-6 w-[40%]">
              <img
                src={"./images/Home/ourService/Activity.png"}
                alt="icon"
                className="w-8"
              />

              <h3 className="text-black">تفکر طراحی</h3>

              <p className="text-secondaryColor text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و
              </p>
            </div>
          </div>
        </div>
      </div>

      <OurWorks />
      <Pricing />
      <ContactUs />
    </div>
  );
}
