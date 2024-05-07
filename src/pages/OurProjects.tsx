import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import OurProjectsSection from "@/components/OurProjectsSection";
import Faq from "@/components/Faq";
import ContactUs from "@/components/ContactUs";

export default function OurProjects() {
  return (
    <div className="w-full ">
      {/* Our Project page Header */}
      <div className="h-32 bg-[#F8FBFF] flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">پروژه های ما</h2>

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
                href="/ourprojects"
                className="text-secondaryColor text-sm"
              >
                پروژه های ما
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <OurProjectsSection />

      {/* Trusted by section */}
      <div className="w-5/6 mx-auto mt-20 flex flex-col justify-center items-center gap-8">
        <span className="text-sm text-primaryColor">مورد اعتماد</span>

        <div className="w-full flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-20  justify-center items-center">
            <img
              src="./images/ourProjects/Layers.png"
              alt="Layers logo"
              className="w-28"
            />
            <img
              src="./images/ourProjects/Sisyphus.png"
              alt="Sisyphus logo"
              className="w-28"
            />
            <img
              src="./images/ourProjects/Circooles.png"
              alt="Circooles logo"
              className="w-28"
            />
            <img
              src="./images/ourProjects/Catalog.png"
              alt="Catalog logo"
              className="w-28"
            />
            <img
              src="./images/ourProjects/Quotient.png"
              alt="Quotient logo"
              className="w-28"
            />
          </div>
        </div>
      </div>

      <Faq />
      <ContactUs />
    </div>
  );
}
