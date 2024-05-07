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

export default function Contactus() {
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
      {/* Contact us page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">تماس با ما</h2>

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
                href="/contactus"
                className="text-secondaryColor text-sm"
              >
                تماس با ما
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

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

        <div className="w-1/2">
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
