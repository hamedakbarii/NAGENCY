import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div
      className="w-full h-[500px]"
      style={{ backgroundImage: 'url("./images/notFoundBg.png")' }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <h2 className="text-primaryColor text-9xl font-bold">404</h2>

        <span className="text-black font-bold text-xl">صفحه یافت نشد</span>

        <p className="text-secondaryColor text-sm text-center">
          صفحه ای که به دنبال آن هستید ممکن است در صورت تغییر نام <br /> حذف شده
          باشد یا به طور موقت در دسترس نباشد
        </p>

        <Link to={"/"}>
          <Button className="bg-lightBlue text-[#F8FAFC] transition-all hover:opacity-70">
            بازگشت به خانه
          </Button>
        </Link>
      </div>
    </div>
  );
}
