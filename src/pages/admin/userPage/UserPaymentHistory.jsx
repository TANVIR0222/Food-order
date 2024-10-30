import { useFetchAllPaymentQuery } from "@/app/features/cart/cartApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAuth from "@/Hook/useAuth";
import { formateDate } from "@/utils/formateDate";
const UserPaymentHistory = () => {
  const {user} = useAuth()
  const userId = user?.id;
  const {data: payment , isLoading: paymentLaoding} = useFetchAllPaymentQuery(userId);
  const total = payment?.produce?.reduce((acc ,item) => acc + item.price , 0)
  return (
    <div>
      <div>
        <div className="border-2  ">
          <div className="flex items-center rounded-b-xl bg-[#6EACDA] p-7 justify-between">
          </div>
          <div className="">
          {paymentLaoding && <p className="text-center mt-5">Laoding....</p> }

            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">index</TableHead>
                  <TableHead>Item Image</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                  <TableHead className="text-right">Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
               {
                payment?.produce.map((item,index) => (
                  <TableRow key={item._id}>
                  <TableCell>{index+1}</TableCell>

                  <TableCell className="font-medium">
                    <img
                    className="w-10"
                      src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                      alt=""
                    />
                  </TableCell>
                  <TableCell>${ parseFloat(total).toFixed(2)}</TableCell>
                  <TableCell className="text-right">{formateDate(item.createdAt)}</TableCell>
                  <TableCell className="text-right">{item.email}</TableCell>
                </TableRow>
                ))
               }
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPaymentHistory;
