import OurServiceItem from "./ServiceItem";

export default function OurService() {
  return (
    <div className="w-5/6 mx-auto flex flex-col justify-center items-center gap-16 mt-32">
      <div className="text-center">
        <span className="text-primaryColor text-sm p-2">سرویس ما</span>
        <h2 className="font-semibold text-3xl p-2">
          چه چیزی می توانیم برای شما بیاوریم
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
        <OurServiceItem
          icon={"./images/Home/ourService/Chart.png"}
          title="Consultant Plan"
        />
        <OurServiceItem
          icon={"./images/Home/ourService/Graph.png"}
          title="Design Thingking"
        />
        <OurServiceItem
          icon={"./images/Home/ourService/Filter.png"}
          title="SEO Marketing"
        />
        <OurServiceItem
          icon={"./images/Home/ourService/Work.png"}
          title="Business Advisor"
        />
        <OurServiceItem
          icon={"./images/Home/ourService/Heart.png"}
          title="Brand Personal"
        />
        <OurServiceItem
          icon={"./images/Home/ourService/Activity.png"}
          title="Development"
        />
      </div>
    </div>
  );
}
