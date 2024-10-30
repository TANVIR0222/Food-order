import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaHeart } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { useDeleteFavouritePostMutation } from "@/app/features/favourite/favouriteApi";

const HeaderFavourite = ({user,favourite}) => {
    const [deleteFavouritePost] = useDeleteFavouritePostMutation();

  const handleFavouriteDelete = async (id) => {
    console.log(id);

    try {
      await deleteFavouritePost(id);
    } catch (error) {
      console.error(error);
    }
  };
    return (
        <div>
            <Sheet>
              <SheetTrigger>
                <Button size={"sm"} variant={"menubtn"}>
                  {user && favourite?.favourite.length !== 0 ? (
                    <FaHeart className="h-5 w-5 cursor-pointer text-red" />
                  ) : (
                    <IoHeartOutline className="text-2xl" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                Favourite Product
                {user &&
                  favourite?.favourite.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between my-2 bg-gray-200 rounded p-2"
                    >
                      <img
                        className="w-24 h-24 rounded"
                        src={item.image}
                        alt=""
                      />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <button onClick={() => handleFavouriteDelete(item._id)}>
                        <MdDelete className="text-2xl text-red" />
                      </button>
                    </div>
                  ))}
              </SheetContent>
            </Sheet>
        </div>
    );
};

export default HeaderFavourite;