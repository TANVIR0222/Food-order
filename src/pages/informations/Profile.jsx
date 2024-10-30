import { useLogoutUserMutation } from "@/app/features/auth/authAp";
import { logout } from "@/app/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const nagigate = useNavigate();


  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      nagigate("/");
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form>
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              className="h-32 w-32 rounded-full object-cover border-4 border-indigo-600"
              src={user?.profile}
              alt="Profile Image"
            />
           
          </div>

          {/* User Information */}
          <div className="text-center mt-4 space-y-2">
           
            <div className=" flex items-center justify-between">
              <h1 className="text-2xl  text-gray-800">Name : </h1>
              <h1 className="text-2xl  text-gray-800">{user?.username} </h1>
            </div>
            <div className=" flex items-center justify-between">
              <p className="text-gray-500">
                {" "}
                Email{" "}
                <span className=" ml-7 text-black font-semibold text-xl">
                  {" "}
                  :
                </span>{" "}
              </p>
              <p className="text-gray-500"> {user?.email}</p>
            </div>
            <div className=" flex items-center justify-between">
              <p className="text-gray-500 ">
                Role{" "}
                <span className="ml-9 font-semibold text-black text-xl">
                  {" "}
                  :
                </span>
              </p>
              <p className="text-gray-500 ">
                <span className="text-center">{user?.role}</span>{" "}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleLogout}
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-5"
            >
              Logout
            </button>
            {/*  */}
            <Link  to="/update-profile">
              <button
                type="submit"
                className=" border-2 border-blue-600 text-black px-6 py-2 rounded-md  transition duration-300 mt-5"
              >
                Uploade
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
