import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogoutUserMutation } from "@/app/features/auth/authAp";
import { useDispatch } from "react-redux";
import { logout } from "@/app/features/auth/authSlice";

const HeaderPrfileImage = ({ user }) => {
  const [position, setPosition] = React.useState("bottom");
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const nagigate = useNavigate();


  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      nagigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      {user ? (
        <div className=" rounded">
          <Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <img className="w-10 h-10" src={user?.profile} alt="" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-1 md:mr-20">
                <DropdownMenuLabel>
                  {/* {user.name} */}
                  {user?.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  {user?.role === "user" ? (
                    <Link  to="/dashboard/user-home">
                      <DropdownMenuRadioItem value="top">
                        Dashboard
                      </DropdownMenuRadioItem>
                    </Link>
                  ) : (
                    <Link to={'/dashboard'}>
                      <DropdownMenuRadioItem value="top">
                        Admin Dashboard
                      </DropdownMenuRadioItem>
                    </Link>
                  )}
                  <DropdownMenuRadioItem onClick={handleLogout} value="bottom">
                    Logout
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Right
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </Link>
        </div>
      ) : (
        <Link to={"/login"}>
          <Button variant={"cusbtn"}>Login</Button>
        </Link>
      )}
    </div>
  );
};

export default HeaderPrfileImage;
