import { FaHeart } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { IoEyeOutline } from "react-icons/io5";
import { useCartDataPostMutation } from "@/app/features/cart/cartApi";
import { useFavouriteDataPostMutation } from "@/app/features/favourite/favouriteApi";
import Swal from "sweetalert2";
import useAuth from "@/Hook/useAuth";

const FoodCart = ({ item }) => {
  const { user } = useAuth();

  const [favouriteDataPost] = useFavouriteDataPostMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = async (item) => {
    if (user) {
      const favouriteProduct = {
        userId: user?.id,
        productId: item?._id,
        name: item?.name,
        image: item?.image,
        category: item?.category,
        price: item?.price,
      };

      try {
        const res = await favouriteDataPost(favouriteProduct).unwrap();
        if (res.product) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} add to favourite Item`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        title: "You ar not logged in",
        text: "Please login to add to  the card? ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in !",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

  const [cartDataPost] = useCartDataPostMutation();

  const handleAddCart = async (item) => {
    if (user) {
      const addProduct = {
        userId: user?.id,
        productId: item?._id,
        name: item?.name,
        image: item?.image,
        category: item?.category,
        price: item?.price,
      };

      try {
        const res = await cartDataPost(addProduct).unwrap();

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
    } else {
      Swal.fire({
        title: "You ar not logged in",
        text: "Please login to add to  the card? ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in !",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

  const { image, name, price, _id } = item;

  return (
    <div className=" bg-base-100 w-76 shadow-xl relative">
      <div
        onClick={() => handleClick(item)}
        className={`  gap-1 absolute p-2 right-2 top-2  bg-green rounded-full w-fit text-white`}
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

          <Button onClick={() => handleAddCart(item)} variant={"cusbtn"}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
