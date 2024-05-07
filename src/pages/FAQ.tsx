import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Phone number must be at least 2 characters.",
  }),
});

export default function FAQ() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full">
      {/* FAQ page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">سوالات متداول</h2>

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
                href="/faq"
                className="text-secondaryColor text-sm"
              >
                سوالات متداول
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="w-5/6 mx-auto flex justify-center items-center">
        <div className="flex flex-col gap-8 text-center mt-20 w-full md:w-4/6">
          <span className="text-primaryColor text-sm">سوالات متداول</span>

          <h2 className="text-black font-bold text-3xl">سوالات متداول شما</h2>

          <div className="flex flex-col justify-center items-center md:flex-row gap-8">
            <Button className="bg-primaryColor shadow-lg text-white transition-all hover:opacity-70 w-[30%]">
              همه
            </Button>

            <Button className="bg-white shadow-lg text-secondaryColor transition-all hover:opacity-70 w-[30%]">
              سرویس
            </Button>

            <Button className="bg-white shadow-lg text-secondaryColor transition-all hover:opacity-70 w-[30%]">
              قرارداد
            </Button>

            <Button className="bg-white shadow-lg text-secondaryColor transition-all hover:opacity-70 w-[30%]">
              پرداخت
            </Button>
          </div>

          {/* Accardion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </AccordionTrigger>

                <AccordionContent className="text-secondaryColor text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </AccordionTrigger>

                <AccordionContent className="text-secondaryColor text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </AccordionTrigger>

                <AccordionContent className="text-secondaryColor text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </AccordionTrigger>

                <AccordionContent className="text-secondaryColor text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </AccordionTrigger>

                <AccordionContent className="text-secondaryColor text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </AccordionTrigger>

                <AccordionContent className="text-secondaryColor text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* contact us section */}
      <div className="w-5/6 mx-auto bg-white shadow-lg flex flex-col md:flex-row gap-10 p-6 mt-32">
        <div className="flex flex-col gap-6">
          <span className="text-primaryColor text-sm">تماس با ما</span>

          <h2 className="text-3xl text-black font-bold">
            با تیم ما تماس بگیرید، با خیال راحت در مورد هر چیزی صحبت کنید.
          </h2>

          <div className="flex items-center gap-4">
            <img src="./images/contactUs/Location.png" alt="Location" />

            <span className="text-secondaryColor text-sm">
              تیم اربیکس اصفهان
            </span>
          </div>

          <div className="flex items-center gap-4">
            <img src="./images/contactUs/Phone.png" alt="phone" />

            <span className="text-secondaryColor text-sm">(252) 555-0126</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="./images/contactUs/Email.png" alt="Email" />

            <span className="text-secondaryColor text-sm">
              example@gmail.com
            </span>
          </div>
        </div>

        <div className="md:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="نام" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="ایمیل" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="تلفن" {...field} type="text" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="سوال های شما"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="bg-lightBlue text-[#F8FAFC] transition-all hover:opacity-70">
                ارسال پیام
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
