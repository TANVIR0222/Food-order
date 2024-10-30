import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSearchProductQuery } from "@/app/features/product/productApi";
import FoodCart from "../FoodCart/FoodCart";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isLoading } = useSearchProductQuery(searchQuery, {
    skip: searchQuery.length === 0, // Skip query if search input is empty
  });

  const handleInputChange = (e) => setSearchQuery(e.target.value);

  return (
    <div>
      <div className="section-container  h-80 md:h-96 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
        <div className=" text-center flex flex-col justify-center items-center gap-8 ">
          {/* text sections */}
          <div className=" my-16 space-y-7 p-4">
            <h1 className="text-3xl md:text-5xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious <span className="text-green">Food</span>{" "}
            </h1>
            <p className=" text-sm md:text-xl text-[#4A4A4A] ">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <Button variant="cusbtn">Search Now</Button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="my-10 md:my-20 ">
          <input
            type="text"
            placeholder="Search for products"
            value={searchQuery}
            onChange={handleInputChange}
            className="input"
          />
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching results</p>}

        {data?.products && data.products.length > 0 ? (
          <div className="gap-4 grid grid-cols-1 md:grid-cols-3 ">
            {data.products.map((product) => (
              <div
                key={product._id}
                className=""
              >
                <FoodCart item={product} />
              </div>
            ))}
          </div>
        ) : (
          searchQuery && !isLoading && <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;


//**
// image compressor
// 2 invoice generator
// 3 coding platform
// 4 diet tracker
// 5 online teaching app
//  */