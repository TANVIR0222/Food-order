import FoodCart from "@/components/FoodCart/FoodCart";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

const SpecialDishes = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
        .then(response => response.json())
        .then(data => setMenu(data))
    }, []);

    const popular  = menu.filter((item) => item.category === 'popular')
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    
  return (
    <div className="md:my-20 my-10">
        <div className=" my-6 leading-9 text-sm md:text-2xl space-y-3">
        <h5 className="text-red uppercase">Customer Favorites</h5>
        <h1 className="text-3xl md:text-6xl font-bold leading-8">Standout Dishes <br /> From Our Menu</h1>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {popular.map((item) => (
            <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                  <FoodCart item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SpecialDishes;
