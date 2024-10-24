import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Our Menu",
    path: "/shop",
  },
  {
    id: 3,
    title: "Abouts",
    path: "/about",
  },
  {
    id: 4,
    title: "Contact us",
    path: "/contact",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add event listener for scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out max-w-screen-xl mx-auto ${
        isScrolled
          ? "bg-gray-100 shadow-md"
          : "bg-gray-50 opacity-55 text-white"
      }`}
    >
      <nav className={` bg-fixed text-black p-4 `}>
        <div className={`flex justify-between items-center`}>
          <div className="items-center gap-8 sm:flex hidden">
            {navbar.map((item) => (
              <div key={item.id} className="flex justify-center items-center">
                <a href={item.path}>{item.title}</a>
              </div>
            ))}
          </div>

          {/* togol menu */}

          <div className="flex items-center sm:hidden ">
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="menubtn">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-3">
                  <DropdownMenuLabel>
                    {navbar.map((item) => (
                      <div
                        key={item.id}
                        className="flex font-bold justify-start my-2 items-center"
                      >
                        <a href={item.path}>{item.title}</a>
                      </div>
                    ))}
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* logo */}
          <div className="">
            <img src="/logo1.png" alt="" />
          </div>

          {/*  */}

          {/* lgonin func  */}
          {/*
           */}
          <div className="flex justify-center items-center gap-1 md:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button size={"sm"} variant={"menubtn"}>
                  <IoHeartOutline className="text-2xl" />
                </Button>
              </SheetTrigger>
              <SheetContent>tanvri</SheetContent>
            </Sheet>
            {/*  */}

            <Sheet>
              <SheetTrigger asChild>
                <Button size={"sm"} variant={"menubtn"}>
                  <IoCartOutline className="text-2xl" />
                </Button>
              </SheetTrigger>
              <SheetContent></SheetContent>
            </Sheet>

            <Link to={'/login'} ><Button variant={"cusbtn"}>Login</Button></Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
