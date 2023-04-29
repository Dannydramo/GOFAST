import React, { Fragment, useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import Logo from "../images/favicon.png";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logInUser, googleSignUpUser, loading, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    try {
      if (emailInput.trim() === "" || passwordInput.trim() === "") {
        toast.error("Please Enter All Required Field");
      } else {
        const response = await logInUser(emailInput, passwordInput);
        if (response.user) {
          navigate("/ride");
        } else {
          toast.error("Login Was Not Successful");
          return;
        }
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleSign = async () => {
    try {
      const response = await googleSignUpUser();
      console.log(response.user);
      if (response.user) {
        navigate("/ride");
      } else {
        toast.error("Login Was Not Successful");
        return;
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row w-full text-lightGrey text-base sm:text-xl relative">
        <div className="w-[100%] md:w-[80%] mx-auto xl:w-[60%] p-4">
          <div className="md:w-[80%] xl:w-[70%] mx-auto pt-4 mt-12">
            <div className="my-4">
              <Link to="/">
                <img src={Logo} alt="" className="absolute top-8 left-8" />
              </Link>
              <p className="text-3xl sm:text-4xl font-bold text-black mt-4 mb-2">
                Sign in to your
              </p>
              <p className="my-1 text-4xl sm:text-5xl">GoFast Account</p>
              <p className="my-4">
                We Manage your goods efficiently - No matter the goods or the
                locations.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 flex flex-col text-base md:text-lg">
                <div className="my-3">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                    ref={emailRef}
                  />
                </div>

                <div className="my-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                    ref={passwordRef}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-lightBlue px-4 py-2 text-center rounded-md my-4 bg-greek text-white"
                >
                  {loading ? (
                    <div className="relative left-[50%]">
                      {" "}
                      <Oval
                        height={20}
                        width={20}
                        color="#fff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#fff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                      />
                    </div>
                  ) : (
                    <p>Login</p>
                  )}
                </button>
              </div>
            </form>
            <div className="grid">
              <button
                onClick={googleSign}
                className="flex items-center w-full text-center justify-center my-2 space-x-4 py-2 rounded-md"
              >
                <FcGoogle /> <span>Continue with Google </span>{" "}
              </button>
            </div>
            <div className="flex justify-center space-x-2">
              <p>Don't have an account?</p>
              <Link to="/signup" className="underline text-blue-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] bg-[url(./images/login.jpg)] bg-cover bg-center bg-no-repeat hidden h-screen xl:block pl-3rem"></div>
      </div>
    </Fragment>
  );
};

export default Login;
