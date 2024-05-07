import About from "./pages/About";
import Contactus from "./pages/ContactUs";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import OurProjects from "./pages/OurProjects";
import OurTeam from "./pages/OurTeam";
import Pricing from "./pages/Pricing";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import ProjectDetail from "./pages/ProjectDetail";
import Service from "./pages/Service";
import TermsOfCondition from "./pages/TermsOfCondition";
import Testimonial from "./pages/Testimonial";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contactus", element: <Contactus /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/service", element: <Service /> },
  { path: "/testimonial", element: <Testimonial /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/ourprojects", element: <OurProjects /> },
  { path: "/ourteam", element: <OurTeam /> },
  { path: "/privacyandpolicy", element: <PrivacyAndPolicy /> },
  { path: "/projectdetail", element: <ProjectDetail /> },
  { path: "/termsofcondition", element: <TermsOfCondition /> },
  { path: "/*", element: <Error /> },
];

export default routes;
