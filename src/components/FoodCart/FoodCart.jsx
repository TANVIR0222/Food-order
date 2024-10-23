import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { IoEyeOutline } from "react-icons/io5";

const FoodCart = ({ item }) => {
  const [isHeartFillted, setHeartFillted] = useState(false);

  const handleClick = (id) => {
    setHeartFillted(!isHeartFillted);
    console.log(id);
  };
  const handleAddCart = (item) => {
    
    console.log(item);
  };

  const { image, name, price, _id } = item;
  return (
    <div className=" bg-base-100 w-76 shadow-xl relative">
      <div
        onClick={() => handleClick(item)}
        className={`  gap-1 absolute p-2 right-2 top-2  bg-green rounded-full w-fit ${
          isHeartFillted ? "text-rose-500" : "text-white"
        }`}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/deatils/${_id}`}>
        <div
          className={`  gap-1 absolute p-2 right-2 top-12  bg-green rounded-full w-fit`}
        >
          <IoEyeOutline className="h-5 w-5 cursor-pointer" />
        </div>
      </Link>

      <img
        src={image}
        alt="Shoes"
        className=" w-full rounded-xl transition-all duration-200 md:h-72"
      />
      <div className=" space-y-1 mt-2">
        <div className="ml-2">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p>Description of the item</p>
        </div>
        <div className="flex justify-between p-2 items-center mt-2">
          <h5 className="font-bold text-xl">
            <span className="text-red text-sm">$</span>
            {price}
          </h5>
          <Button onClick={() =>handleAddCart(item)} variant={"cusbtn"}>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
