import Header from "@/components/Header";
import MeetTeam from "@/components/MeetTeam";
import OurProjects from "@/components/OurProjectsSection";
import OurService from "@/components/OurService";
import OurWorks from "@/components/OurWorks";
import Solutions from "@/components/Solutions";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div>
      <Header />
      <OurService />
      <OurWorks />
      <MeetTeam />
      <Solutions />
      <OurProjects />
      <Pricing />
      <Testimonials />
      <Faq />
      <ContactUs />
    </div>
  );
}
