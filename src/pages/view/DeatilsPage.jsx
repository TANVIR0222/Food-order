import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useGetAllProductQuery } from "@/app/features/product/productApi";
import ScrollBarMenu from "@/components/Popular/ScrollBarMenu";
import { useCartDataPostMutation } from "@/app/features/cart/cartApi";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const DeatilsPage = () => {
  const { id } = useParams();
  const { data: products, isLoading, error } = useGetAllProductQuery(id);

  const { user } = useSelector((state) => state.auth);
  const userId = user?.id;
  const [cartDataPost] = useCartDataPostMutation();

  const handleAddToCart = async (item) => {
    const userId = user?.id;
    const productId = item?._id;
    const name = item?.name;
    const image = item?.image;
    const category = item?.category;
    const price = item?.price;

    try {
      const res = await cartDataPost({
        userId,
        productId,
        name,
        image,
        category,
        price,
      }).unwrap();
      console.log(res);

      if (res.product) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${name} add to cart`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <p>Loading....</p>;

  return (
    <div className=" ">
      <section className=" h-80 md:h-96 bg-primarybg space-y-4 ">
        <div className=" flex flex-col items-center justify-center h-full">
          <div className="">
            <h1 className=" capitalize">single Food Page</h1>
          </div>
          <div className="flex">
            <span className="flex items-center">
              <Link to={"/"}>Home</Link>
              <IoIosArrowForward />
            </span>
            <span className="flex items-center">
              <Link to={"/shop"}>Menu</Link>
              <IoIosArrowForward />
            </span>
            <span>{products?.products?.name} </span>
          </div>
        </div>
      </section>

      <section className="my-7  mx-4 md:mx-[1px]">
        <div className="flex flex-col md:flex-row items-center">
          {/* product ing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" ">
              <img
                src={products?.products?.image}
                alt=""
                className=" rounded-md w-96 h-auto"
              />
            </div>

            {/*  */}
            <div className="">
              <h3 className="text-3xl font-medium mb-4">
                {products?.products?.name}{" "}
              </h3>
              <p className="text-xl text-primary mb-4">
                ${products?.products?.price} <s className="text-red">$20</s>{" "}
              </p>
              <p className="text-gray-400 font-medium mb-4">
                {products?.products?.recipe}
              </p>

              {/* products info */}
              <div className=" space-y-2">
                <p>
                  <strong>Category : </strong> {products?.products?.category}
                </p>

                <div className=" flex items-center gap-4">
                  <strong>
                    Rating :{" "}
                    <span className="text-orange-400 ">
                      {products?.products?.rating}{" "}
                    </span>{" "}
                  </strong>
                  {/* <Rating rating={'4'} /> */}
                </div>

                <button
                  onClick={() => handleAddToCart(products?.products)}
                  className=" px-6 py-3 bg-blue-600 text-white rounded"
                >
                  Add to card
                </button>
              </div>

              {/* display reviews */}
            </div>
          </div>
        </div>
        <div className="md:my-16 my-10">
          <ScrollBarMenu />
        </div>
      </section>
    </div>
  );
};

export default DeatilsPage;
