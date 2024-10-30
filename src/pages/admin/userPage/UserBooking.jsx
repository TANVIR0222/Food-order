import {  usePostReviewsMutation } from "@/app/features/revicw/reviewApi";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UserBooking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [ratingError , setRatingError] = useState('');
 
  const [postReviews] = usePostReviewsMutation();
 
  

  const onSubmit = async (data) => {
    const reviewPost = {
      name: data.name,
      rating: data.rating,
      email: data.email,
      message: data.message,
    };

    try {
      const res = await postReviews(reviewPost).unwrap();
      if(res.message){
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        
      }
    } catch (error) {
      console.log(error.data.err);
      setRatingError(error.data.err);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen ">
        <form
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Contact Us</h2>

          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="input"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="input"
            />
          </div>
          {/* Number Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Rating 0-5
            </label>

            <input
              type="number"
              id="rating"
              name="rating"
              placeholder="Enter your phone number"
              {...register("rating", { required: true })}
              className="input"
            />
            <p className="text-red" >{ratingError}</p>
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              {...register("message", { required: true })}
              className="input"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <Button size="lg" variant="cusbtn">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserBooking;
