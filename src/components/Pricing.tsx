import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Pricing() {
  return (
    <div className="w-5/6 mx-auto flex flex-col justify-center items-center gap-10 md:flex-row mt-32">
      <div className="flex flex-col gap-6">
        <span className="text-primaryColor text-sm">قیمت گذاری</span>

        <h2 className="text-2xl">مزایایی که می توانید بلافاصله احساس کنید</h2>

        <p className="text-secondaryColor">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>

        <Link to={"/pricing"}>
          <Button className="bg-lightBlue text-[#F8FAFC] transition-all hover:opacity-70 md:w-[30%]">
            همه قیمت ها را ببینید
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-10 md:flex-row w-[65%]">
        <img
          src="./images/Home/pricingOne.png"
          alt="pricingImg"
          className="md:w-[200px] xl:w-[250px]"
        />
        <img
          src="./images/Home/pricingTwo.png"
          alt="pricingImg"
          className="md:w-[200px] xl:w-[250px]"
        />
      </div>
    </div>
  );
}
