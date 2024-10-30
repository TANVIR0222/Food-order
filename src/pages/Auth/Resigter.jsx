import { Button } from "@/components/ui/button";
import { useState } from "react";
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
    reset,
  } = useForm();

  const [login, setLogin] = useState("");

  // show pass
  const [showPassword, setshowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  //

  const [registerUser, isLoading, error] = useRegisterUserMutation();

  const navigate = useNavigate();
  // register
  const onSubmit = async (data) => {
    const username = data.name;
    const email = data.email;
    const password = data.password;

    try {
      const res = await registerUser({ username, email, password }).unwrap();
      setLogin(res.message);
      navigate("/login");
      reset();
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
             {errors.name?.type === "required" && (
              <p className="text-red">Name is required</p>
            )}
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
             {errors.email?.type === "required" && (
              <p className="text-red">Email is required</p>
            )}
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
              type={showPassword ? "text" : "password"} // Toggle input type
              className="input"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}


            <button
              onClick={togglePasswordVisibility}
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 mt-7"
            >
              {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}{" "}
              {/* Show/Hide toggle button */}
            </button>
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center">
            <Button size="lg" variant="cusbtn">
              {isLoading ? (
                "Register"
              ) : (
                <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-black border-opacity-75"></div>
              )}
            </Button>
            <p className="text-blue-600">{login}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resigter;
