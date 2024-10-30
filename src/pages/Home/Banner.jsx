import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const coverImg = [
  {
    id: 1,
    path: "/01.jpg",
  },
  {
    id: 1,
    path: "/02.jpg",
  },
  {
    id: 1,
    path: "/03.png",
  },
  {
    id: 1,
    path: "/04.jpg",
  },
  {
    id: 5,
    path: "/05.png",
  },
  {
    id: 6,
    path: "/06.png",
  },
];

const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {coverImg.map((item, index) => (
            <CarouselItem key={index}>
              <div className="max-w-screen-xl mx-auto">
                <img src={item.path} alt="" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Banner;
