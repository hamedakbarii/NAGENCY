import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <div className="w-5/6 mx-auto flex items-start gap-10 pt-20">
      <div className="flex flex-col gap-32">
        <div className="flex flex-col gap-10">
          <h1 className="text-black text-4xl font-semibold">
            آژانس دیجیتال خلاق
            <br /> که به شما کمک می کند پیش بروید
          </h1>

          <p className="text-secondaryColor text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>

          <Link to={"/contactus"}>
            <Button className="bg-lightBlue text-[#F8FAFC] transition-all hover:opacity-70 w-[30%]">
              ارتباط با ما
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <img src="./images/Home/Rating.png" alt="Rating" className="w-20" />

          <p className="text-secondaryColor text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>

          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="./images/Home/HeaderAvatar.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <h2 className="text-black text-sm">حامد اکبری</h2>

              <span className="text-secondaryColor text-sm">
                مدیر عامل تیم رویایی
              </span>
            </div>
          </div>
        </div>
      </div>

      <img
        src="./images/Home/aboutUsImge.png"
        alt="header image"
        className="w-full hidden md:block"
      />
    </div>
  );
}
