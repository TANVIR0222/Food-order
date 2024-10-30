import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { usePostProductMutation } from "@/app/features/product/productApi";
import Swal from "sweetalert2";


const AddItem = () => {
  const [list, setCategory] = useState("");

  const [postProduct , isLoading] = usePostProductMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const productList = {
      name: data.name,
      category: list,
      recipe: data.message,
      price: data.price,
      rating: data.rating,
      image: data.image,
    };

    console.log(productList);

    try {
      const response = await postProduct(productList).unwrap();
      if (response.message) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Add Success",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <div className="flex justify-center items-center h-screen">

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-3xl	 bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Add New Product
          </h2>

          <div className="">
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
              className="input"
              {...register("name", { required: true })}
              placeholder="Product name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red">Name is required</p>
            )}
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-4/5	">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Price
              </label>
              <input
                type="number"
                id="number"
                name="price"
                placeholder="Product Price"
                {...register("price", { required: true })}
                className="input"
              />
              {errors.name?.type === "required" && (
                <p className="text-red">Name is required</p>
              )}
            </div>
            <div className="w-4/5	">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Rating -highest - 5
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                placeholder="Product Price"
                {...register("rating", { required: true })}
                className="input"
              />
              {errors.name?.type === "required" && (
                <p className="text-red">Name is required</p>
              )}
            </div>
            <div className="flex">
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Category"
                >
                  Category
                </label>
                <Select onValueChange={setCategory} required>
                  <SelectTrigger className="w-[180px] h-10">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="dessert">Dessert</SelectItem>
                      <SelectItem value="drinks">Drinks</SelectItem>
                      <SelectItem value="salad">Salad</SelectItem>
                      <SelectItem value="pizza">Pizza</SelectItem>
                      <SelectItem value="soup">Soup</SelectItem>
                      <SelectItem value="ffered">Ffered</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="input"
              {...register("image", { required: true })}
              placeholder="Product name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red">Name is required</p>
            )}
          </div>
          <div className="my-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Recipe Details
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
            {/* <input type="submit" value="submit" /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
