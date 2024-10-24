import { Card } from "@/components/ui/card";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: "/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 break fast)",
    image: "/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(48 dessert)",
    image: "/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(255 dishes)",
    image: "/img4.png",
  },
];

const PopularCategory = () => {
  return (
    <div className="md:my-20 my-10">
      <div className=" text-center my-6 leading-9 text-sm md:text-2xl space-x-3">
        <h5 className="text-red uppercase">Customer Favorites</h5>
        <h1 className="text-3xl md:text-6xl font-bold">Popular Catagorie</h1>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-4 my-9">
            {
              categoryItems.map((item) => (
                <div key={item.id} className=" shadow-lg  bg-white py-6 px-5 w-48 md:w-72 rounded-xl mx-auto place-items-center cursor-pointer hover:-translate-y-2 md:hover:-translate-y-4 duration-300 transition-all">
                <div className=" flex flex-col items-center justify-center h-full">
                  <img className="bg-[#c1f1c6] rounded-full w-24 h-24 p-4" src={item.image} alt="" />
                  <h1 className="my-1">{item.title}</h1>
                  <p>{item.des}</p>
                </div>
            </div>
              ))
            }
        </div>
    </div>
  );
};

export default PopularCategory;
