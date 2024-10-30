import {
  useCartDeleteMutation,
  useFetchAllCartQuery,
  usePaymentDataMutation,
} from "@/app/features/cart/cartApi";
import { formateDate } from "@/utils/formateDate";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import useAuth from "@/Hook/useAuth";
const CartView = () => {
  const { user } = useAuth();
  const id = user?.id;

  const { data: cartData } = useFetchAllCartQuery(id);

  const formattedNumber = parseFloat(cartData?.total).toFixed(2);

  const [cartDelete, isLoading] = useCartDeleteMutation();

  const handlerDelete = async (id) => {
    await cartDelete(id);
  };

  const [paymentData] = usePaymentDataMutation();

  const handlePayment = async () => {
    // console.log("ok");

    try {
      const res = await paymentData(id).unwrap();
      console.log(res);
      window.location.href = res?.session
    
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className=" items-center justify-center h-auto">
        <section className=" h-72 md:h-80 bg-primarybg ">
          <div className=" flex flex-col items-center justify-center h-full">
            <div className="">
              <h1 className=" text-3xl capitalize">Cart View</h1>
            </div>
          </div>
        </section>
      </div>

      <div className=" flex flex-col md:flex-row-reverse gap-4">
        {/* cart */}
        <div className="md:w-1/6 w-full mt-2 items-center  justify-center ">
          <div className=" space-y-4 p-2  bg-primary rounded">
            <p className="text-2xl capitalize p-2 font-bold  bg-slate-500 text-white">
              Order Summary
            </p>
            <div className="flex justify-center border border-white items-center p-2">
              <p className=" mx-2 text-white capitalize text-xl">
                item in cart :
              </p>
              <p className=" mr-2  capitalize text-white ">
                {cartData?.cart.length}
              </p>
            </div>
            <div className="flex justify-center border border-white mx-auto items-center p-2">
              <p className=" mx-2  capitalize text-white ">Total Price : </p>
              <p className=" mr-2   capitalize  text-white ">
                ${formattedNumber}{" "}
              </p>
            </div>
            <div className=" flex items-center justify-center">
              <Button onClick={handlePayment} variant={"cusbtn"}>
                Payment
              </Button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="md:w-5/6 w-full ">
          {cartData?.cart.map((item) => (
            <div
              key={item._id}
              className=" flex items-center w-full justify-between my-2 bg-gray-200 rounded p-2"
            >
              <img className="w-24 h-24 rounded" src={item.image} alt="" />
              <p className="text-sm">{item.name}</p>
              <p className="text-sm">{formateDate(item.createdAt)}</p>
              <p className="text-sm">${item.price}</p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  {isLoading ? (
                    <Button variant="outline">Delete</Button>
                  ) : (
                    "loadding"
                  )}
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handlerDelete(item._id)}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartView;
