import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
const cards = [
  {
    id: 1,
    name: "Salad",
    trend: "2024 Trend",
    image: "/slide1.jpg",
  },
  {
    id: 2,
    name: "Pizza",
    trend: "2024 Trend",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    name: "Soup",
    trend: "2024 Trend",
    image: "/slide3.jpg",
  },
  {
    id: 4,
    name: "Dessert",
    trend: "2024 Trend",
    image: "/slide4.jpg",
  },
  {
    id: 5,
    name: "Offered ",
    trend: "2024 Trend",
    image: "/slide5.jpg",
  },
];
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";

const SpecialDishes = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div>
      <div className="  my-6 space-y-4 text-sm md:text-2xl ">
        <h5 className="text-red uppercase">Special Dishes</h5>
        <h1 className="text-3xl md:text-5xl font-bold">Stand Out Dishes <br /> From Our Menu</h1>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full my-10"
      >
        <CarouselContent className="-ml-1">
          {cards.map((items) => (
            <CarouselItem key={items.id} className=" md:basis-1/2 lg:basis-1/3">
              <div className="">
                <CardContent className="flex aspect-square items-center justify-center w-full">
                  <Link to={'/shop'}>
                  <div className="">
                    <img src={items.image} alt="" />
                    <h2 className="text-xl font-bold ml-5 text-white -mt-8">
                      {items.name}
                    </h2>
                  </div>
                  </Link>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SpecialDishes;
