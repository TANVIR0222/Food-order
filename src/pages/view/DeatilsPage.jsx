import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const DeatilsPage = () => {
  const { name } = useParams();

  return (
    <div className="">
      <section className=" h-96 bg-primarybg ">
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
            <span>Products name </span>
          </div>
        </div>
      </section>

      <section className="my-7">
        <div className="flex flex-col md:flex-row items-center">
          {/* product ing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" ">
              <img
                src="https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className=" rounded-md w-96 h-auto"
              />
            </div>

            {/*  */}
            <div className="">
              <h3 className="text-3xl font-medium mb-4">Product Name </h3>
              <p className="text-xl text-primary mb-4">
                $100 <s>$130</s>{" "}
              </p>
              <p className="text-gray-400 font-medium mb-4">
                This is an Products description
              </p>

              {/* products info */}
              <div className="">
                <p>
                  <strong>Category : </strong> accessories
                </p>
                <p>
                  <strong>color : </strong> blue
                </p>
                <div className=" flex items-center gap-4">
                  <strong>Rating : </strong>
                  {/* <Rating rating={'4'} /> */}
                </div>

                <button className=" px-6 py-3 bg-blue-600 text-white rounded">
                  Add to card
                </button>
              </div>

              {/* display reviews */}
              {/* TODO : work api  */}
              <section className="section__container "></section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeatilsPage;
