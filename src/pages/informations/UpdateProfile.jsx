import useAuth from "@/Hook/useAuth";
import { useRef , useState} from "react";
import { useSelector } from "react-redux";

const UpdateProfile = () => {
  const fileref = useRef(null);
  const { user } = useAuth();

  const [file, setFile] = useState();
  // console.log(file);

  const profileChange = (e) =>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', user.id);

    console.log(formData);
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Update Profile
        </h1>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-4">
          <div className=" flex">
            <img
              className="h-24 border border-black text-indigo-600 px-4 py-2  hover:bg-indigo-50 transition duration-300 w-24 rounded-full object-cover mb-2"
              // src={user?.profile}
              src=""
              onClick={() => fileref.current.click()}
              alt=""
            />
            <p
              onClick={() => fileref.current.click()}
              className="text-2xl cursor-pointer font-semibold"
            >
              +
            </p>
          </div>
        </div>

        <form className="space-y-4">
          <input
            name="profileImage"
            type="file"
            accept="image/*"
            ref={fileref}
            hidden
            onChange={(e) => setFile(e.target.files[0])}
            className="text-sm text-gray-500"
          />
          {/* Name Field */}

          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              defaultValue={user?.username}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              // onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
            onClick={profileChange}
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
