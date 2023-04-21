import { Fragment, useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import Footer from "../Footer";

const Signup = () => {
  const emailRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Firebase Signup User Authentication
  const { signUpUser, googleSignUpUser } = useContext(AuthContext);

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
        // console.log(userInput, passwordInput, emailInput, confirmPasswordInput);
        await signUpUser(emailInput, passwordInput, userInput).then((user) => {
          setUser(user);

          if (!user || user === null || user === undefined) {
            toast.error("No User Found");
            console.log("NO USER FOUND");
            return;
          } else {
            toast.success("No User Found");
            console.log("USER FOUND");
            navigate("/ride");
          }
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Firebase User Google Auth
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
        <div className="w-[90%] max-w-[600px] mx-auto mt-[6rem] md:mt-24 md:p-8">
          <h1 className="text-3xl">SignUp</h1>
          <form onSubmit={handleSubmit}>
            <div className="my-4 flex flex-col text-base md:text-lg">
              <div className="my-4">
                <label htmlFor="Username">Username</label>
                <input
                  type="text"
                  className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                  ref={userRef}
                />
              </div>

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

              <div className="my-4">
                <label htmlFor="Password">Confirm Password</label>
                <input
                  type="password"
                  className="bg-transparent outline-none borderCols w-full p-2 rounded-md"
                  ref={confirmPasswordRef}
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 rounded-md my-4 bg-greek text-white"
              >
                SignUp
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
            <p>Already have an account?</p>
            <Link to="/login" className="underline text-blue-700">
              Login
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Signup;
