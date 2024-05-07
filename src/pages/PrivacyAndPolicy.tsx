import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function PrivacyAndPolicy() {
  return (
    <div className="w-full">
      {/* privacy and policy page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">حریم خصوصی و سیاست</h2>

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
                href="/privacyandpolicy"
                className="text-secondaryColor text-sm"
              >
                حریم خصوصی و سیاست
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="w-5/6 mx-auto flex flex-col mt-32">
        <p className="text-secondaryColor text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          و مجله در ستون و سطرآنچنان که لازم است
        </p>

        <h2 className="text-3xl text-black mt-8">سیاست صدور مجوز</h2>

        <p className="text-secondaryColor text-sm mt-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          و مجله در ستون و سطرآنچنان که لازم است
        </p>

        <div className="mt-6">
          <span className="text-xl text-black">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده
          </span>

          <div className="flex items-center gap-4 p-2">
            <img
              src="./images/privacyandpolicy/checkIcon.png"
              alt="check icon"
            />

            <span className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </span>
          </div>

          <div className="flex items-center gap-4 p-2">
            <img
              src="./images/privacyandpolicy/checkIcon.png"
              alt="check icon"
            />

            <span className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </span>
          </div>

          <div className="flex items-center gap-4 p-2">
            <img
              src="./images/privacyandpolicy/checkIcon.png"
              alt="check icon"
            />

            <span className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </span>
          </div>

          <div className="flex items-center gap-4 p-2">
            <img
              src="./images/privacyandpolicy/checkIcon.png"
              alt="check icon"
            />

            <span className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </span>
          </div>
        </div>

        <div className="mt-6">
          <span className="text-xl text-black">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده
          </span>

          <div className="flex items-center gap-4 p-2">
            <img
              src="./images/privacyandpolicy/checkIcon.png"
              alt="check icon"
            />

            <span className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </span>
          </div>

          <div className="flex items-center gap-4 p-2">
            <img
              src="./images/privacyandpolicy/checkIcon.png"
              alt="check icon"
            />

            <span className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </span>
          </div>
        </div>

        <h2 className="text-3xl text-black mt-8">خط مشی اضافی</h2>

        <p className="text-secondaryColor text-sm mt-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          و مجله در ستون و سطرآنچنان که لازم است
        </p>

        <div className="mt-6">
          <span className="text-xl text-black">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده
          </span>

          <div className="flex items-center gap-4 p-2">
            <img
              src="./images/privacyandpolicy/checkIcon.png"
              alt="check icon"
            />

            <span className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </span>
          </div>

          <div className="flex items-center gap-4 p-2">
            <img
              src="./images/privacyandpolicy/checkIcon.png"
              alt="check icon"
            />

            <span className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده
            </span>
          </div>
        </div>

        <span className="text-xl text-black mt-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        </span>

        <p className="text-secondaryColor text-sm mt-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
          و مجله در ستون و سطرآنچنان که لازم است
        </p>
      </div>
    </div>
  );
}
