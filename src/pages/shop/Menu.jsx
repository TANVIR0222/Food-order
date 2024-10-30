import {
  useFetchGetProductsQuery,
} from "@/app/features/product/productApi";
import FoodCart from "@/components/FoodCart/FoodCart";
import FoodPagination from "@/components/Popular/FoodPagination";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  

  // paginations
  const { pageNumber } = useSelector((state) => state.product);
  const { data: product } = useFetchGetProductsQuery(Number(pageNumber));
  
  

  return (
    <div>
        {/* menu sections */}
        <div className="section-container  h-80 md:h-96 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
          <div className=" text-center flex flex-col justify-center items-center gap-8 ">
            {/* text sections */}
            <div className=" my-16 space-y-7 p-4">
              <h1 className="text-3xl md:text-5xl font-bold md:leading-snug leading-snug">
                For the Love of Delicious{" "}
                <span className="text-green">Food</span>{" "}
              </h1>
              <p className=" text-sm md:text-xl text-[#4A4A4A] ">
                Where Each Plate Weaves a Story of Culinary Mastery and
                Passionate Craftsmanship
              </p>
              <Button variant='cusbtn' >Order Now</Button>
            </div>
          </div>
        </div>
        {/* search */}
          <Link to={'/search'}>
            <div className=" my-10 md:my-20 flex items-center justify-center w-full i space-x-2">
              <input className="input max-w-xl	" type="text" placeholder="Search" />
              <Button className="button">Search</Button>
            </div>
          </Link>

        {/* category */}
       

        <div className="">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
            {product?.products?.map((item) => (
              <FoodCart item={item} key={item._id} />
            ))}
          </div>
        </div>
        {/* // paginations  */}
        <FoodPagination
          totalPage={product?.totalPage}
          currentPage={product?.currentPage}
        />
    </div>
  );
};

export default Menu;
