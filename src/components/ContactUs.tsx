import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function ContactUs() {
  return (
    <div className=" bg-lightBlue h-[450px] w-5/6 mx-auto mt-32 rounded-3xl relative">
      <img src="./images/Home/circle.png" alt="circle" />

      <div className="absolute top-10 md:right-10">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <span className="text-white text-sm">ارتباط با ما</span>

          <h2 className="text-white text-3xl">
            ما به شما کمک خواهیم کرد تا <br />
            تجارت خود را سریعتر و راحت تر رشد دهید
          </h2>

          <p className="text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>

          <Link to={"/contactus"} className="transition-all hover:opacity-70">
            <Button className="bg-primaryColor text-white w-32">
              ارتباط با ما
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
