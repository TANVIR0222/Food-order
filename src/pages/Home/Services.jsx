import { Button } from "@/components/ui/button";
import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavors and  presentation",
    image: "/icon1.png",
  },
  {
    id: 2,
    title: "Fast delivery",
    des: "We deliver your order promptly to your door",
    image: "/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering ",
    image: "/icon3.png",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with Foodi Gift Cards",
    image: "/icon4.png",
  },
];
const Services = () => {
  return (
    <div className="my-16 md:my-28" >
      <div className="section-container">
        <div className=" flex flex-col md:flex-row items-center justify-between   gap-16">
          {/* text sections */}
          <div className="md:w-1/2 text-center md:text-start space-y-4 md:space-y-7 ">
          <h5 className="text-red uppercase">Our Story & Services</h5>
          <h1 className="text-3xl md:text-5xl font-bold">
          Our Culinary Journey <br /> And Services
          </h1>
          <p className="max-w-md leading-7">
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
           <Button variant='cusbtn' size='lg' >Explore</Button>
          </div>
          {/* services card */}
          <div className="md:w-1/2">
            <div className=" grid grid-cols-2  gap-8 items-center justify-between">
              {categoryItems.map((item) => (
                <div
                  key={item.id}
                  className=" shadow-md text-center rounded-md py-5 px-4 space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border"
                >
                  <img src={item.image} alt="services" className="mx-auto" />
                  <h5 className="pt-3 font-semibold">{item.title}</h5>
                  <p className="text-[#90BD95]">{item.des}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
