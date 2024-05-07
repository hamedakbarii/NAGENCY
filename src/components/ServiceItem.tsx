import { FaArrowRight } from "react-icons/fa6";

export default function ServiceItem({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="bg-white shadow-sm p-4 flex flex-col gap-6 border border-[#E5EAF1] rounded-lg transition-all duration-300 w-[80%] hover:shadow-2xl">
      <img src={icon} alt="icon" className="w-8" />

      <h3 className="text-black">{title}</h3>

      <p className="text-secondaryColor text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
      </p>

      <div className="flex items-center gap-2">
        <span className="text-lightBlue text-sm">بیشتر بخوانید</span>
        <FaArrowRight className="text-lightBlue" />
      </div>
    </div>
  );
}
