import useAuth from "@/Hook/useAuth";
import React from "react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useAuth();
  const isAdmin = user?.role;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {isAdmin === "admin" ? (
        <>
          <div className=" space-y-5 bg-white p-8 min-h-screen shadow-xl shadow-red-400  flex flex-col ">
            {/* header part */}
            <div className="md-5">
              <img className=" size-14" src="/admin.png" alt="" />
              <p className=" font-semibold">Admin</p>
            </div>
            {/* navigation part */}
            <hr />
            <ul className=" space-y-5 ">
              <li>
                <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                  end
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/add-item"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Add New Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/booking-item"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Update Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/manage-item"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/user"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  All User
                </NavLink>
              </li>
              {/* Home menu */}
              <hr />
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/shop"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Menu
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className=" space-y-5 bg-white p-8 min-h-screen shadow-xl shadow-red-400  flex flex-col ">
            {/* header part */}
            <div className="md-5">
              <img className=" size-14" src="/admin.png" alt="" />
              <p className=" font-semibold">Hi , User</p>
            </div>
            {/* navigation part */}
            <hr />
            <ul className=" space-y-5 ">
              <li>
                <NavLink
                  to={"/dashboard/user-home"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                  end
                >
                  My Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/user-payment"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/user-review"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Review
                </NavLink>
              </li>

              {/* Home menu */}
              <hr />
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/shop"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Menu
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive ? " text-blue-600 font-semibold" : " text-black"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* logout */}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
