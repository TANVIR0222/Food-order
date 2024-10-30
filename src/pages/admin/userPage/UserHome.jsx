import { useFetchSingleUserPaymentQuery } from "@/app/features/payment/paymentApi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuth from "@/Hook/useAuth";
import { GiPayMoney } from "react-icons/gi";


const UserHome = () => {

  const {user} = useAuth()
  const userId = user?.id;
  const {data: payment , isLoading:paymentLaoding} = useFetchSingleUserPaymentQuery(userId);
  console.log(payment);

  const total = payment?.produce?.reduce((acc ,item) => acc + item.price , 0)
  const formattedNumber = parseFloat(total).toFixed(2);
  

  
  return (
    <div>
      
      <div className="my-12 grid  grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" items-center w-full  rounded-xl h-72 bg-[#2ea630]  md:h-96 justify-between">
          <div className="flex flex-col  items-center justify-center h-full">
          {paymentLaoding && <p>Laoding....</p> }

            <Avatar  className='w-32 h-32'>
              <AvatarImage className='w-32' src={user?.profile} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl mt-5">{user.username}</h1>
          </div>
        </div>
        <div className=" items-center w-full  rounded-xl h-72 bg-[#2ea630]  md:h-96 justify-between">
          <div className="flex flex-col  items-center justify-center h-full">
          {paymentLaoding && <p>Laoding....</p> }

            <h1 className="text-2xl md:text-4xl " >Your Activities</h1>
            <h6 className="text-xl">Order : {payment?.produce.length || 0}</h6>
            <h6 className="text-xl">Booking : 1 </h6>
            <h6 className="text-xl" >Total Payment : ${formattedNumber || 0}  </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
