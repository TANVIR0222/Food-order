import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section className=" h-80 bg-primarybg ">
        <div className=" flex flex-col items-center justify-center h-full">
          <div className="">
            <h1 className=" text-3xl capitalize">Contact Us </h1>
          </div>
          
        </div>
      </section>
      <div className="flex justify-center items-center h-screen">
        <form
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
          //   onSubmit={handleSubmit}
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
              //   value={formData.name}
              //   onChange={handleChange}
              placeholder="Enter your name"
              required
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
              //   value={formData.email}
              //   onChange={handleChange}
              placeholder="Enter your email"
              required
              className="input"
            />
          </div>
          {/* Number Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Phone
            </label>

            <input
              type="number"
              id="number"
              name="number"
              //   value={formData.email}
              //   onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="input"
            />
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
              //   value={formData.message}
              //   onChange={handleChange}
              placeholder="Enter your message"
              required
              className="input"
              rows="5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <Button size='lg' variant='cusbtn' >Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
