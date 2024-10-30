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
const UpdateUserRole = ({item, index}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { data: user } = useFetchAllUserQuery();

  const [id, setid] = useState({});

  const [updateUserRole] = useUpdateUserRoleMutation();

  const onSubmit = async (data) => {
    const role = data.name;

    try {
      const res = await updateUserRole({ id }, { role });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
  };

  return (
    <div className="flex items-center justify-between">
      <TableRow key={item._id}>
        <TableCell className="font-medium">{index + 1}</TableCell>

        <TableCell>{item.email}</TableCell>
        <TableCell>{item.role}</TableCell>
        <TableCell>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={openDialog}
              >
                {" "}
                Open Dialog
              </button>

              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-10 bg-gray-100">
                  <div className="bg-white rounded-lg p-8">
                    <h2 className="text-xl font-bold mb-4">Update Role</h2>
                    <p>
                      {" "}
                      Make changes to your role here. Click update when you're
                      done.
                    </p>
                    <div className="mt-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
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
                        onClick={() => setid(item._id)}
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
          <Button onClick={() => handleDeleteUser(item._id)} variant="delete">
            Delete
          </Button>
        </TableCell>
      </TableRow>
    </div>
  );
};

export default UpdateUserRole;
