import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function TermsOfCondition() {
  return (
    <div className="w-full">
      {/* terms of condition page Header */}
      <div className="h-36 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">شرایط و ضوابط</h2>

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
                href="/termsofcondition"
                className="text-secondaryColor text-sm"
              >
                شرایط و ضوابط
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <span className="text-secondaryColor text-sm">
          آخرین بروزرسانی ۲۰ شهریور
        </span>
      </div>

      <div className="w-5/6 mx-auto flex flex-col mt-20">
        <div className="flex flex-col gap-4">
          <h2 className="text-black font-bold text-3xl">اطلاعات کلی</h2>
          <p className="text-secondaryColor text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-20">
          <h2 className="text-black font-bold text-3xl">1. قوانین</h2>
          <p className="text-secondaryColor text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است
          </p>
        </div>

        <div className="flex flex-col mt-20">
          <h2 className="text-black font-bold text-3xl">2. مجوز کاربر</h2>

          <p className="text-secondaryColor text-sm mt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است
          </p>

          <div className="mt-1 flex flex-col gap-1 p-1">
            <span className="text-sm text-secondaryColor">
              - لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            </span>
            <span className="text-sm text-secondaryColor">
              - لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            </span>
            <span className="text-sm text-secondaryColor">
              - لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            </span>
            <span className="text-sm text-secondaryColor">
              - لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            </span>
            <span className="text-sm text-secondaryColor">
              - لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            </span>
            <span className="text-sm text-secondaryColor">
              - لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            </span>
            <span className="text-sm text-secondaryColor">
              - لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            </span>
          </div>

          <p className="text-secondaryColor text-sm mt-1">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است
          </p>
        </div>

        <div className="flex flex-col mt-20">
          <h2 className="text-black font-bold text-3xl">3. اطلاعات کلی</h2>

          <p className="text-secondaryColor text-sm mt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است
          </p>
        </div>
      </div>
    </div>
  );
}
