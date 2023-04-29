import { Fragment, useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import Logo from "../images/favicon.png";

const Signup = () => {
  const emailRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  // Firebase Signup User Authentication
  const { signUpUser, googleSignUpUser, loading, setLoading } =
    useContext(AuthContext);

  // Handle Signup submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = userRef.current.value;
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    const confirmPasswordInput = confirmPasswordRef.current.value;

    //Check if Input has values

    try {
      if (
        userInput.trim() === "" ||
        emailInput.trim() === "" ||
        passwordInput.trim() === "" ||
        confirmPasswordInput.trim() === ""
      ) {
        toast.error("Please Enter All Required Field");
      } else if (passwordInput.length < 8) {
        // check if password input has upto 8 characters
        toast.error("Please password must contain upto 8 characters");
      } else if (passwordInput !== confirmPasswordInput) {
        // Check if password and confirm password  value matches
        toast.error("Please password must be the same");
      } else {
        const response = await signUpUser(emailInput, passwordInput, userInput);
        console.log(response.user);
        setLoading(true);
        if (response.user) {
          navigate("/ride");
          setLoading(false);
        } else {
          setLoading(false);
          toast.error("Login Was Not Successful");
          return;
        }
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  // Firebase User Google Auth
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
                Get Started with GoFast
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 flex flex-col text-base md:text-lg">
                <div className="my-3">
                  <label htmlFor="Username">Username</label>
                  <input
                    type="text"
                    placeholder="Enter Your Username"
                    className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                    ref={userRef}
                  />
                </div>

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

                <div className="my-3">
                  <label htmlFor="Password">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Your Password"
                    className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                    ref={confirmPasswordRef}
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-md my-3 bg-greek text-white"
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
                    <p>SignUp</p>
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
              <p>Already have an account?</p>
              <Link to="/login" className="underline text-blue-700">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] bg-[url(./images/signup.jpg)] bg-cover bg-center bg-no-repeat hidden h-screen xl:block pl-3rem"></div>
      </div>
    </Fragment>
  );
};

export default Signup;
