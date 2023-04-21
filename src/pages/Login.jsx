import React, { Fragment, useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import Footer from "../Footer";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logInUser, googleSignUpUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    try {
      if (emailInput.trim() === "" || passwordInput.trim() === "") {
        toast.error("Please Enter All Required Field");
      } else {
        await logInUser(emailInput, passwordInput).then((user) => {
          setUser(user);
          if (!user || user === null || user === undefined) {
            toast.error("No User Found");
            console.log("NO USER FOUND");
            return;
          } else {
            console.log("USER FOUND");
            toast.success("User Found");
            navigate("/ride");
          }
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const googleSign = async () => {
    try {
      await googleSignUpUser().then((user) => {
        setUser(user);
        if (!user || user === null || user === undefined) {
          toast.error("No User Found");
          console.log("NO USER FOUND");
          return;
        } else {
          toast.success("User Found");
          console.log("USER FOUND");
          navigate("/ride");
        }
      });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <Fragment>
      <section>
        <div className="w-[90%] max-w-[600px] mx-auto mt-[6rem] md:mt-24 p-8">
          <h1 className="text-3xl">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="my-4 flex flex-col text-base md:text-lg">
              <div className="my-4">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                  ref={emailRef}
                />
              </div>

              <div className="my-4">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                  ref={passwordRef}
                />
              </div>

              <button
                type="submit"
                className="bg-lightBlue px-4 py-2 rounded-md my-4 bg-greek text-white"
              >
                Login
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

          <div className="flex justify-center">
            <p>Don't have an account?</p>
            <Link to="/signup" className="underline text-blue-700">
              Signup
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Login;
