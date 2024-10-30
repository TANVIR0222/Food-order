import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useLoginUserMutation } from "@/app/features/auth/authAp";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [loginUser, isLoading] = useLoginUserMutation();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      const res = await loginUser({ email, password }).unwrap();

      // token set localstorage
      const { user } = res;
      dispatch(setUser({ user }));
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="">
        <form
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Login
          </h2>

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
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input"
            />
          </div>
          {errors.email && (
              <span className="text-rose-700 italic">
                This field is required
              </span>
            )}

          {/* Password Field */}
          <div className=" relative w-full mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="input"
            />
            <button
              onClick={handleShowPassword}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 mt-7"
            >
              {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
            </button>
            {errors.password && (
              <span className="text-rose-700 ">This field is required</span>
            )}
          </div>

          <div className="">
            {error && (
              <p className="text-red text-sm  italic">{error.data?.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="">
            <Button size="lg" variant="cusbtn">
              {isLoading ? "Login" : "Loading..."}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
