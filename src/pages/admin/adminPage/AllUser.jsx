import React, { useState } from "react";

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
  useDeleteUserMutation,
  useFetchAllUserQuery,
  useUpdateUserRoleMutation,
} from "@/app/features/auth/authAp";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const AllUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { data: user } = useFetchAllUserQuery();

  const [updateUserRole] = useUpdateUserRoleMutation();

  const onSubmit = async (item) => {
    setIsOpen(true);

    try {
      // const res = await updateUserRole(
      //   { id: item._id },
      //   { role: item.role }
      // ).unwrap();
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
  };

  return (
    <div>
      <div className="border-2  ">
        <div className="flex items-center rounded-b-xl bg-[#6EACDA] p-2 justify-between">
          <h1 className="text-2xl md:text-3xl">Total User : {user?.length} </h1>
        </div>
        <div className="">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">index</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Role Update</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user?.map((item, index) => (
                <TableRow key={item._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>

                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => onSubmit(item)}
                        >
                          {" "}
                          Open Dialog
                        </button>

                        {isOpen && (
                          <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-10 bg-gray-900">
                            <div className="bg-white rounded-lg p-8">
                              <h2 className="text-xl font-bold mb-4">
                                Update Role
                              </h2>
                              <p>
                                {" "}
                                Make changes to your role here. Click update
                                when you're done.
                              </p>
                              <div className="mt-4">
                                <label
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                  htmlFor="name"
                                >
                                  Role
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  className="input "
                                  {...register("name", { required: true })}
                                  placeholder="User role"
                                />
                              </div>
                              <div className="flex items-center justify-between mt-4">
                                <button
                                  // onClick={}
                                  className="bg-black text-white font-bold py-2 px-4 rounded"
                                >
                                  Update
                                </button>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                  onClick={closeDialog}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDeleteUser(item._id)}
                      variant="delete"
                    >
                      Delete
                    </Button>
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

export default AllUser;
