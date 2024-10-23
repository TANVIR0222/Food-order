import FoodCart from "@/components/FoodCart/FoodCart";
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");


//   pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPrePage] = useState(8);

  // loading data
  useEffect(() => {
    // fetchData
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("fetch data error", error);
      }
    };
    fetchData();
  }, []);

  // filtering data base on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((items) => items.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);

    // paginations
    setCurrentPage(1)
  };

  // show all data functions
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");

    // paginations
    setCurrentPage(1)

  };

  // sort base a-z z-a low-high pricing
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    // sorting logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;

      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;

    }

    setFilteredItems(sortedItems);

    // paginations
    setCurrentPage(1)

  };

    // paginations logic
    const indexOfLastItems = currentPage * itemPrePage;
    const indexOfFirstItems = indexOfLastItems - itemPrePage;
    const currentItem = filteredItems.slice(indexOfFirstItems,indexOfLastItems)
    const paginate = (pageNumber) => setCurrentPage(pageNumber) 




  return (
    <div className="">
      {/* menu sections */}
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
        <div className="py-48 text-center flex flex-col justify-center items-center gap-8 ">
          {/* text sections */}
          <div className=" space-y-7 p-4">
            <h1 className="text-4xl md:text-5xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious <span className="text-green">Food</span>{" "}
            </h1>
            <p className=" text-xl text-[#4A4A4A] ">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <button className="button ">Order Now</button>
          </div>
        </div>
      </div>

      {/* menu shop sections */}
      <div className="section-container my-6">
        {/* filtering  and sortiong  */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all category btn */}
          <div className=" flex flex-row  justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button
              className={selectedCategory === "all" ? "text-green" : ""}
              onClick={showAll}
            >
              All
            </button>
            <button
              className={selectedCategory === "salad" ? "text-green" : ""}
              onClick={() => filterItems("salad")}
            >
              Salad
            </button>
            <button
              className={selectedCategory === "pizza" ? "text-green" : ""}
              onClick={() => filterItems("pizza")}
            >
              Pizza
            </button>
            <button
              className={selectedCategory === "soup" ? "text-green" : ""}
              onClick={() => filterItems("soup")}
            >
              Soups
            </button>
            <button
              className={selectedCategory === "dessert" ? "text-green" : ""}
              onClick={() => filterItems("dessert")}
            >
              Desserts
            </button>
            <button
              className={selectedCategory === "drinks" ? "text-green" : ""}
              onClick={() => filterItems("drinks")}
            >
              Drinks
            </button>
          </div>

          {/* sorting and filtering  */}
          <div className=" flex mb-4 rounded-sm gap-3 justify-end ">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>
            {/* sorting option */}
           <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="px-2 py-1 bg-black text-white rounded-sm "
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">low-to-high</option>
              <option value="high-to-low">high to low</option>
            </select>
          </div>
        </div>
        {/* product cart  */}
        <div className=" grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
        {/*  paginations ar karone current Items use kora hoyeche  */}
          {currentItem.map((item) => (
            <FoodCart key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* paginations  */}
          <div className=" flex items-center justify-center mb-4">
            {
                Array.from({length: Math.ceil(filteredItems.length / itemPrePage)}).map((_,index) =>(
                    <button 
                    key={index+1}
                    onClick={() => paginate(index+1)}
                    className={` mx-1 px-3 py-1 rounded-full ${currentPage  === index+1 ? " bg-green text-white" :' bg-slate-200'}`} 
                    >
                        {index+1}
                    </button>
                ))
            }
          </div>
          {/*  */}
    </div>
  );
};

export default Menu;
