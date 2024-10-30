import { Navigate, useLocation } from "react-router-dom";
import useAuth from "@/Hook/useAuth";

// privet custom routes only admin
const AdminRouts = ({ children }) => {
  const { user } = useAuth();
  const isAdmin = user?.role;
  console.log(isAdmin);

  const locatin = useLocation();

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"} state={{ form: locatin }} replace></Navigate>;
};

export default AdminRouts;
