import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
import {
  useDeleteProductMutation,
  useFetchAllProductQuery,
} from "@/app/features/product/productApi";

const ManageItem = () => {
  const { data: product , isLoading} = useFetchAllProductQuery();

  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = async (id) => {
    console.log(id);

    try {
      await deleteProduct(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="border-2  ">
        <div className="flex items-center rounded-b-xl bg-[#6EACDA] p-2 justify-between">
          <h1 className="text-3xl">Total Item : {product?.products.length} </h1>
         
        </div>
        <div className="">
        {isLoading &&   <p className="text-center mt-5">Loading......</p>  }

          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">index</TableHead>
                <TableHead>Product Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {product?.products.map((item, index) => (
                <TableRow key={item._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <img className="w-16" src={item.image} alt="" />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>
                    <Link to={`/dashboard/booking-item/${item._id}`} >
                      <Button variant="outline">Edit</Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <AlertDialog>
                      <AlertDialogTrigger className="bg-red p-2 rounded text-white">
                        Delete
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your product and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <Button
                            onClick={() => handleDeleteProduct(item._id)}
                            variant="delete"
                          >
                            Delete
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
