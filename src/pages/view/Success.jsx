import { usePaymentDataMutation } from "@/app/features/cart/cartApi";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate('/')
  }
  return (
    <div className=" h-1/2">
      <div className="section-container  h-80 md:h-96 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100% ">
        <div className=" text-center flex flex-col justify-center items-center gap-8 ">
          {/* text sections */}
          <div className=" my-16 space-y-7 p-4">
            <h1 className="text-3xl font-bold text-center mb-8">
              Payment Successful!
            </h1>
            <p className="text-lg text-center mb-12">
              Your order has been processed successfully.
            </p>
            <Button onClick={handleNavigate} variant='cusbtn' >continew</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
