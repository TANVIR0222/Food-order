import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRegisterUserMutation } from "@/app/features/auth/authAp";
import { useNavigate } from "react-router-dom";

const Resigter = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // show pass 
  const [showPassword, setshowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  // 

  const [registerUser , isLoading, error ] =  useRegisterUserMutation();
  
  const navigate = useNavigate();
  // register
  const onSubmit =async (data) => {
    const  username = data.name;
    const  email = data.email;
    const  password = data.password;

    console.log({username,email,password});


    try {
        const res = await registerUser({username,email,password}).unwrap();
        console.log(res);
        navigate('/')
    } catch (error) {
      console.log(error);
      
    }
    
  };
  
  return (
    <div>
      <div className="">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Register
          </h2>

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

          {/* Password Field */}
          <div className="relative w-full mb-4">
          <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}  // Toggle input type
              className="input"
              placeholder="Enter your password"
              {...register("password", { required: true })}

            />
            <button
          onClick={togglePasswordVisibility}
          type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 mt-7"
            >
          {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline /> } {/* Show/Hide toggle button */}

            </button>
          </div>

          {/* Submit Button */}
          <div className="">
            <Button size="lg" variant="cusbtn">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resigter;
