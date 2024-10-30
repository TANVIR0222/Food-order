import React from "react";
import BarChart from "../../../components/chart/BarChat";
import ColumnChart from "@/components/chart/ColumnChart";
import PieChart from "@/components/chart/PieChart";
import { useFetchAllUserQuery } from "@/app/features/auth/authAp";
import { MdPayment } from "react-icons/md";

import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { useFetchAllProductQuery } from "@/app/features/product/productApi";
import { useFetchAllPaymentQuery } from "@/app/features/payment/paymentApi";

const AdminHome = () => {
  const { data: totalUser, isLoading: userLoading } = useFetchAllUserQuery();
  const { data: products, isLoading: productLoading } =
    useFetchAllProductQuery();
  const { data: totalPayment, isLoading: paymentLoading } =
    useFetchAllPaymentQuery();

  const total = totalPayment?.payment?.reduce(
    (acc, item) => acc + item.price,
    0
  );
  console.log(total);

  return (
    <div className="">
      <div className="">
        <div className="flex gap-4">
          {/* white */}
          <div className=" items-center w-32 md:w-80 rounded-xl bg-[#2ea630] h-20 md:h-44 justify-between">
            <div className="flex items-center justify-center h-full gap-4">
              {paymentLoading ? (
                <p>Loading....</p>
              ) : (
                <>
                  <MdPayment className="text-4xl text-white" />
                  <h1 className="text-3xl text-white">
                    ${parseFloat(total)?.toFixed(2)}
                  </h1>
                  <p className="text-xl text-white">Total amount</p>
                </>
              )}
            </div>
          </div>
          {/* white */}
          <div className=" items-center w-32 md:w-80 rounded-xl bg-[#c8a92e] h-20 md:h-44 justify-between">
            <div className="flex items-center justify-center h-full gap-4">
              {productLoading ? (
                <p>Loading....</p>
              ) : (
                <>
                  <FaUsers className="text-4xl text-white" />
                  <s className="text-4xl text-white">-</s>
                  <h1 className="text-4xl text-white">{totalUser?.length}</h1>
                  <h1 className="text-sm text-white">Users</h1>
                </>
              )}
            </div>
          </div>
          {/* white */}
          <div className=" items-center w-32 md:w-80 rounded-xl bg-[#3ca3f1] h-20 md:h-44 justify-between">
            <div className="flex items-center justify-center h-full gap-4">
              {userLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <AiFillProduct className="text-4xl text-white" />
                  <s className="text-4xl text-white">-</s>
                  <h1 className="text-4xl text-white">
                    {products?.products.length}
                  </h1>
                  <h1 className="text-xl text-white">Product</h1>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ">
          <div className="w-1/2 h-96">
            <PieChart />
          </div>
          <div className="w-1/2 ">
            <ColumnChart />
          </div>
        </div>
        <BarChart />
      </div>
    </div>
  );
};

export default AdminHome;
