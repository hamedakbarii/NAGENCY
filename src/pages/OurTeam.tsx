import MeetTeam from "@/components/MeetTeam";
import PositionItems from "@/components/PositionItems";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slash } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import ContactUs from "@/components/ContactUs";

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
  portfolio: z.string().min(2, {
    message: "portfolio link number must be at least 2 characters.",
  }),
  upload: z.string().min(2, {
    message: "resume",
  }),
});

export default function Ourteam() {
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
      {/* Our Team page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">تیم ما</h2>

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
                href="/ourteam"
                className="text-secondaryColor text-sm"
              >
                تیم ما
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <MeetTeam />

      {/* join us */}
      <div className="flex flex-col w-5/6 mx-auto gap-8 mt-20">
        <span className="text-primaryColor text-sm">به ما ملحق شوید</span>
        <h2 className="text-3xl text-black">پوزیشن های فعال</h2>

        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4">
          <div className="rotate-3">
            <PositionItems
              icon="./images/Home/ourService/Chart.png"
              job="ui طراح "
              position="دورکاری / تمام وقت"
            />
          </div>

          <div className=" rotate-[-4deg]">
            <PositionItems
              icon="./images/Home/ourService/Chart.png"
              job="مدیر پروژه"
              position="دورکاری / تمام وقت"
            />
          </div>

          <div className="rotate-3">
            <PositionItems
              icon="./images/Home/ourService/Chart.png"
              job="برنامه نویس بک اند"
              position="دورکاری / تمام وقت"
            />
          </div>

          <div className="rotate-[-4deg]">
            <PositionItems
              icon="./images/Home/ourService/Chart.png"
              job="برنامه نویس فرانت اند"
              position="دورکاری / تمام وقت"
            />
          </div>
        </div>
      </div>

      {/* join us */}
      <div className="bg-white mt-20 shadow-2xl flex flex-col justify-start items-start md:flex-row md:items-center w-5/6 mx-auto p-4 gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-primaryColor text-sm">به ما ملحق شوید</span>

          <h2 className="text-3xl text-black font-bold">
            به تیم ما بپیوندید !
          </h2>

          <p className="text-secondaryColor text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="./images/contactUs/Location.png" alt="Location" />

              <span className="text-secondaryColor text-sm">
                تیم اربیکس اصفهان
              </span>
            </div>

            <div className="flex items-center gap-4">
              <img src="./images/contactUs/Phone.png" alt="phone" />

              <span className="text-secondaryColor text-sm">
                (252) 555-0126
              </span>
            </div>

            <div className="flex items-center gap-4">
              <img src="./images/contactUs/Email.png" alt="Email" />

              <span className="text-secondaryColor text-sm">
                example@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="نام" {...field} className="w-full" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-6 w-full">
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
                      <Select {...field}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="موقعیت درخواست شده" />
                        </SelectTrigger>

                        <SelectContent className="bg-white">
                          <SelectGroup>
                            <SelectLabel>مشاغل</SelectLabel>
                            <SelectItem value="backend">بک اند</SelectItem>

                            <SelectItem value="frontend">فرانت اند</SelectItem>

                            <SelectItem value="project manager">
                              مدیر پروژه
                            </SelectItem>

                            <SelectItem value="uiDesigner">ui طراح</SelectItem>

                            <SelectItem value="frontend">فرانت اند</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="لینک پورتفولیو"
                        {...field}
                        type="text"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="upload"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">
                          لطفا رزومه ی خود را آپلود کنید!
                        </Label>

                        <Input id="picture" type="file" {...field} />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="bg-lightBlue text-[#F8FAFC] transition-all hover:opacity-70">
                ثبت
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <ContactUs />
    </div>
  );
}
