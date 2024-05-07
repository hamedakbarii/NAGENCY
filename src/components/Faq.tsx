import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="w-5/6 mx-auto flex justify-between mt-32 gap-10">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-primaryColor text-sm">سوال های رایج</span>
          <h2 className="text-4xl text-black">سوالات متداول</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </AccordionTrigger>

            <AccordionContent className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </AccordionTrigger>

            <AccordionContent className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </AccordionTrigger>

            <AccordionContent className="text-secondaryColor text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <img
        src="./images/Home/faqImg.png"
        alt="faqImg"
        className="w-2/5 hidden md:block"
      />
    </div>
  );
}
