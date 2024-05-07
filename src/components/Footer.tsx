import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-5/6 mx-auto mt-32 grid grid-cols-1 gap-20 md:grid-cols-3 xl:grid-cols-4 py-8">
      <div className="flex flex-col gap-6 w-[300px]">
        <img src="./images/Logo.svg" alt="logo" className="w-10" />

        <p className="text-secondaryColor text-sm">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>

        <span className="text-xs">
          میباشد NAGENCY کلیه حقوق این سایت متعلق به ©
        </span>
      </div>

      <div className="flex flex-col gap-6 w-[200px]">
        <h2>لینک های سریع</h2>

        <ul className="flex flex-col gap-2">
          <Link
            to={"/"}
            className="text-sm text-secondaryColor transition-all hover:opacity-70"
          >
            <li>خانه</li>
          </Link>

          <Link
            to={"/about"}
            className="text-sm text-secondaryColor transition-all hover:opacity-70"
          >
            <li>درباره</li>
          </Link>

          <Link
            to={"/service"}
            className="text-sm text-secondaryColor transition-all hover:opacity-70"
          >
            <li>سرویس</li>
          </Link>

          <Link
            to={"/testimonial"}
            className="text-sm text-secondaryColor transition-all hover:opacity-70"
          >
            <li>گواهینامه</li>
          </Link>

          <Link
            to={"/pricing"}
            className="text-sm text-secondaryColor transition-all hover:opacity-70"
          >
            <li>قیمت گذاری</li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-col gap-6 w-[200px]">
        <h2>کمک</h2>

        <ul className="flex flex-col gap-2">
          <Link
            to={"/privacyandpolicy"}
            className="text-sm text-secondaryColor transition-all hover:opacity-70"
          >
            <li>سیاست حفظ حریم خصوصی</li>
          </Link>

          <Link
            to={"/termsofconditions"}
            className="text-sm text-secondaryColor transition-all hover:opacity-70"
          >
            <li>شرایط و ضوابط</li>
          </Link>

          <Link
            to={"/contactus"}
            className="text-sm text-secondaryColor transition-all hover:opacity-70"
          >
            <li>ارتباط با ما</li>
          </Link>
        </ul>
      </div>

      <div className="flex flex-col gap-6 w-full md:w-[300px] md:justify-self-center md:col-span-3 xl:col-span-1">
        <h2>مشترک شدن در خبرنامه</h2>

        <p className="text-sm text-secondaryColor">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>

        <div className="flex border border-[#E4E4E7] rounded-lg">
          <Input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="border-none text-sm"
          />

          <Button className="text-white bg-primaryColor border-none focus:border-none rounded-none rounded-r-lg transition-all hover:opacity-70">
            اشتراک
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm">مارا دنبال کنید در :‌ </span>

          <Link
            to={"https://discord.com"}
            className="transition-all hover:opacity-70"
          >
            <FaDiscord className="text-secondaryColor" />
          </Link>

          <Link
            to={"https://x.com"}
            className="transition-all hover:opacity-70"
          >
            <FaTwitter className="text-secondaryColor" />
          </Link>

          <Link
            to={"https://telegram.com"}
            className="transition-all hover:opacity-70"
          >
            <FaTelegramPlane className="text-secondaryColor" />
          </Link>

          <Link
            to={"https://youtube.com"}
            className="transition-all hover:opacity-70"
          >
            <FaYoutube className="text-secondaryColor" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
