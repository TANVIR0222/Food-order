import React from "react";
import { FaStar } from "react-icons/fa";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
const Testimonials = () => {
  return (
    <div className="md:my-20 my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* img */}
      <div className=" ">
        <img className="h-[#731] max-w-md	 " src="/testimonials.png" alt="" />
      </div>
      {/* text */}
      <div className="">
        <div className=" text-center md:text-start space-y-5">
          <h5 className="text-red uppercase">Testimonials</h5>
          <h1 className="text-3xl md:text-5xl font-bold">
            What Our Customers <br /> Say About Us
          </h1>
          <p className="max-w-md leading-7">
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
          <div className="flex items-center gap-8 w-full justify-center  md:justify-start">
            {/* image */}
            <div className="flex">
            <img className="w-10 h-10 border-2 border-red  rounded-full" src="/testimonial1.png" alt="" />
            <img className="w-10 h-10 border-2 -ml-4 border-red  rounded-full" src="/testimonial2.png" alt="" />
            <img className="w-10 h-10 border-2 -ml-4 border-red  rounded-full" src="/testimonial3.png" alt="" />
            </div>
            {/* text */}
            <div className="">
                <h1 className="text-xl font-bold">Customer Feedback</h1>
                <p className="flex gap-2 items-center" > <FaStar className="text-orange-400" /> 4.9 (18.6k Reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
