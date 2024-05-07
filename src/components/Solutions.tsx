import SolutionItem from "./SolutionItem";

export default function Solutions() {
  return (
    <div className="w-5/6 mx-auto flex flex-col justify-center items-center gap-16 mt-32">
      <div className="text-center">
        <span className="text-primaryColor text-sm p-2"> راه حل های ما</span>
        <h2 className="font-semibold text-3xl p-2">چرا ما را انتخاب کنید</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 rounded-lg border border-[#E5EAF1] p-8">
        <SolutionItem
          icon="./images/Home/solutions/Number.png"
          title="Great Experience"
        />

        <div className="w-[1px] h-[200px] bg-[#E5EAF1] hidden md:block"></div>

        <SolutionItem
          icon="./images/Home/solutions/lamp.png"
          title="Best Solutions"
        />

        <div className="w-[1px] h-[200px] bg-[#E5EAF1] hidden md:block"></div>

        <SolutionItem
          icon="./images/Home/solutions/arrow.png"
          title="Efective Strategy"
        />
      </div>
    </div>
  );
}
