import React, { useState } from "react";
import signupIcons from "../assests/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageToBase64 from "../helpers/imageToBase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImg: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];

    const profilePhoto = await imageToBase64(file);
    console.log(profilePhoto);

    setData((prev) => {
      return {
        ...prev,
        profileImg: profilePhoto,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section id="signup">
        <div className="mx-auto container p-4">
          <div className="bg-white p-5 w-full max-w-sm mx-auto">
            <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
              <div>
                <img src={data.profileImg || signupIcons} alt="signup icon" />
              </div>
              <form>
                <label>
                  <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                    <p className="text-indigo">Upload Photo</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleUploadPhoto}
                  />
                </label>
              </form>
            </div>

            <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
              <div className="grid">
                <label>name : </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="text"
                    placeholder="Enter full name"
                    name="name"
                    value={data.name}
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid">
                <label>Email : </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={data.email}
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label>Password : </label>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={data.password}
                    name="password"
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                    required
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                  </div>
                </div>
              </div>

              <div>
                <label>Confirm Password : </label>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={"password"}
                    placeholder="Enter password"
                    value={data.confirmPassword}
                    name="confirm-password"
                    onChange={handleOnChange}
                    className="w-full h-full outline-none bg-transparent"
                    required
                  />
                </div>
                <Link
                  to={"/forgot-password"}
                  className="block w-fit ml-auto hover:underline hover:text-blue-600"
                >
                  Forgot password ?
                </Link>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                signup
              </button>
            </form>

            <p className="my-5">
              Already have an account ?{" "}
              <Link
                to={"/login"}
                className=" text-blue-600 hover:text-blue-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
