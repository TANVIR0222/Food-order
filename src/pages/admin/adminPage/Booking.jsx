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
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { useParams } from "react-router-dom";
import { useGetAllProductQuery, useUpdateProductMutation } from "@/app/features/product/productApi";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  // // console.log({id});
  // const _id = id;
  

  const { data: product } = useGetAllProductQuery(id);

  const [list, setCategory] = useState("");

  const [updateProduct] = useUpdateProductMutation();

  const onSubmit = async(data) => {
    const productList = {
      name: data.name,
      category: list,
      recipe: data.message,
      price: data.price,
      image: data.image,
      rating: data.rating,
    };
    console.log(productList);

    try {
      const res = await updateProduct({id , ...productList}).unwrap();
      
      if(res.message){
        alert(res.message);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form
          className="w-full max-w-3xl	 bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Update Product
          </h2>

          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Food Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={product?.products?.name}
              {...register("name")}
              placeholder="Enter your name"
              className="input"
            />
          </div>

          {/* Email  ................................... */}
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
                defaultValue={product?.products?.price}
                placeholder="Product Price"
                {...register("price")}
                className="input"
              />
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
                {...register("rating")}
                className="input"
                defaultValue={product?.products?.rating}

              />
            </div>
            <div className="flex">
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Category"
                >
                  Category
                </label>
                <Select onValueChange={setCategory}>
                  <SelectTrigger className="w-[180px] h-10">
                    <SelectValue placeholder={`${product?.products?.name}`} />
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

          <div className="my-2">
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
              {...register("image")}
              placeholder="Product name"
            />
          </div>

          {/* Message Field */}
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
              defaultValue={product?.products?.recipe} //   onChange={handleChange}
              placeholder="Enter your message"
              {...register("message")}
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

export default Booking;
