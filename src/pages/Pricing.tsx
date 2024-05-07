import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Slash } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Pricing() {
  const invoices = [
    {
      invoice: "سرویس",
      paymentStatus: "سرویس ۱",
      totalAmount: "سرویس ۲",
      paymentMethod: "سرویس ۲",
    },
    {
      invoice: "پلتفرم",
      paymentStatus: "رایگان",
      totalAmount: "رایگان",
      paymentMethod: "رایگان",
    },
    {
      invoice: "وبسایت",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
    },
    {
      invoice: "دامنه دستی",
      paymentStatus: "✓",
      totalAmount: "✓",
      paymentMethod: "رایگان",
    },
    {
      invoice: "کدهای استخراج شده",
      paymentStatus: "✓",
      totalAmount: "✓",
      paymentMethod: "✓",
    },
    {
      invoice: "تجارت",
      paymentStatus: "✓",
      totalAmount: "✓",
      paymentMethod: "",
    },
    {
      invoice: "سازنده ی پاپ آپ",
      paymentStatus: "",
      totalAmount: "✓",
      paymentMethod: "✓",
    },
  ];

  return (
    <div className="w-full">
      {/* Pricing page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">قیمت گذاری</h2>

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
                href="/pricing"
                className="text-secondaryColor text-sm"
              >
                قیمت گذاری
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="w-5/6 mx-auto flex flex-col justify-center items-center gap-10 mt-32">
        <div className="flex flex-col items-center gap-6">
          <span className="text-primaryColor text-sm">قیمت گذاری</span>

          <h2 className="text-3xl">مزایایی که می توانید بلافاصله احساس کنید</h2>
        </div>

        <div className="flex flex-col gap-10 md:flex-row w-[65%]">
          <img
            src="./images/Home/pricingTwo.png"
            alt="pricingImg"
            className="md:w-[200px] xl:w-[250px]"
          />
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

      <div className="mt-32">
        <div className="flex flex-col items-center">
          <span className="text-primaryColor text-sm">مقایسه</span>
          <h2>مقایسه کنید و برنامه خود را دریافت کنید</h2>
        </div>

        <div className="w-4/6 mx-auto">
          <div className="flex flex-col md:flex-row w-5/6 gap-4 mx-auto mt-24 justify-end">
            <div className="flex flex-col items-center  gap-2">
              <span className="text-black">شخصی</span>

              <Button className="bg-lightBlue text-[#F8FAFC] transition-all hover:opacity-70">
                خرید به قیمت ۱۲ تومان
              </Button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-black">تجارت</span>

              <Button className="bg-lightBlue text-[#F8FAFC] transition-all hover:opacity-70">
                خرید به قیمت ۱۲ تومان
              </Button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-black">شرکت های بزرگ</span>

              <Button className="bg-lightBlue text-[#F8FAFC] transition-all hover:opacity-70">
                خرید به قیمت ۱۲ تومان
              </Button>
            </div>
          </div>

          <div className="mt-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">سرویس</TableHead>

                  <TableHead></TableHead>

                  <TableHead></TableHead>

                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>

                    <TableCell>{invoice.paymentStatus}</TableCell>

                    <TableCell>{invoice.paymentMethod}</TableCell>

                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <Faq />
      <ContactUs />
    </div>
  );
}
