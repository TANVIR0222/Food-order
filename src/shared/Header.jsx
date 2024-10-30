

import { useEffect, useState } from "react";
import { useFetchAllCartQuery } from "@/app/features/cart/cartApi";
import {
  useFetchAllFavouriteQuery,
} from "@/app/features/favourite/favouriteApi";
import useAuth from "@/Hook/useAuth";
import HeaderCart from "@/components/Popular/HeaderCart";
import HeaderFavourite from "@/components/Popular/HeaderFavourite";
import HeaderDropdownMenu from "@/components/Popular/HeaderDropdownMenu";
import HeaderPrfileImage from "@/components/Popular/HeaderPrfileImage";
import { navbar } from "@/utils/main";


const Header = () => {
  const { user } = useAuth();
  const userId = user?.id;

  const { data: cartData } = useFetchAllCartQuery(userId);
  const { data: favourite } = useFetchAllFavouriteQuery(userId);

  // Add event listener for scroll event
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

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
            <HeaderDropdownMenu navbar={navbar} />
          </div>

          {/* logo */}
          <div className="w-24 md:w-60">
            <img src="/logo1.png" alt="" />
          </div>
          {/*  */}

          {/* lgonin func  */}
          {/* */}
          <div className="flex justify-center items-center gap-1 md:gap-4">
            <HeaderFavourite user={user} favourite={favourite} />
            {/*  */}

            {/* cart view page */}
            <HeaderCart user={user} cartData={cartData} />
            <HeaderPrfileImage user={user} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
