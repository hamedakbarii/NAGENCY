import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

export default function Navbar() {
  const location = useLocation();
  const [isNavbarColored, setIsNavbarColored] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsNavbarColored(true);
    } else {
      setIsNavbarColored(false);
    }
  }, [location]);

  return (
    <nav
      className={`w-full py-4 flex justify-between p-4 md:justify-evenly items-center ${
        isNavbarColored ? "bg-[#F8FBFF]" : "bg-white"
      }`}
    >
      <img src="./images/Logo.svg" alt="logo" />

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="w-full flex gap-4">
          <NavigationMenuItem>
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active text-black"
                  : "text-secondaryColor"
              }
            >
              خانه
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to={"/about"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active text-black"
                  : "text-secondaryColor"
              }
            >
              درباره
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to={"/service"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active text-black"
                  : "text-secondaryColor"
              }
            >
              سرویس
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to={"/testimonial"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active text-black"
                  : "text-secondaryColor"
              }
            >
              گواهینامه
            </NavLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-secondaryColor p-0 m-0">
              <span className="text-[16px]">صفحه ها</span>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="bg-white w-full">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                <li className="row-span-3 transition-all hover:bg-primaryColor p-2 hover:text-white">
                  <NavigationMenuLink asChild>
                    <Link to="/ourteam">تیم ما</Link>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3 transition-all hover:bg-primaryColor p-2 hover:text-white">
                  <NavigationMenuLink asChild>
                    <Link to="/ourprojects">پروژه های ما</Link>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3 transition-all hover:bg-primaryColor p-2 hover:text-white">
                  <NavigationMenuLink asChild>
                    <Link to="/projectdetail">جزئیات پروژه</Link>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3 transition-all hover:bg-primaryColor p-2 hover:text-white">
                  <NavigationMenuLink asChild>
                    <Link to="/faq">سوالات متداول</Link>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3 transition-all hover:bg-primaryColor p-2 hover:text-white">
                  <NavigationMenuLink asChild>
                    <Link to="/privacyandpolicy">حریم خصوصی و سیاست</Link>
                  </NavigationMenuLink>
                </li>

                <li className="row-span-3 transition-all hover:bg-primaryColor p-2 hover:text-white">
                  <NavigationMenuLink asChild>
                    <Link to="/termsofcondition">شرایط و ضوابط</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavLink
              to={"/pricing"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending "
                  : isActive
                  ? "active text-black"
                  : "text-secondaryColor"
              }
            >
              قیمت گذاری
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link to={"/contactus"} className="hidden md:block">
        <Button className="bg-primaryColor text-[#F8FAFC] transition-all hover:opacity-70">
          ارتباط با ما
        </Button>
      </Link>

      <img
        src="./images/Home/hamburger.png"
        alt="hamburger"
        className="md:hidden w-8"
      />
    </nav>
  );
}
