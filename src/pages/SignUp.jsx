import { Fragment, useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../context/AuthContext";
import Footer from "../Footer";

const Signup = () => {
  const emailRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [errMessage, setErrMessage] = useState("");
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
        setErrMessage("Please Enter All Required Field");
        setTimeout(() => {
          setErrMessage("");
        }, 3000);
      } else if (passwordInput.length < 8) {
        // check if password input has upto 8 characters
        setErrMessage("Please password must contain upto 8 char");
        setTimeout(() => {
          setErrMessage("");
        }, 3000);
      } else if (passwordInput !== confirmPasswordInput) {
        // Check if password and confirm password  value matches
        setErrMessage("Please password must be the same");
        setTimeout(() => {
          setErrMessage("");
        }, 3000);
      } else {
        // console.log(userInput, passwordInput, emailInput, confirmPasswordInput);
        await signUpUser(emailInput, passwordInput, userInput).then((user) => {
          setUser(user);

          if (!user || user === null || user === undefined) {
            console.log("NO USER FOUND");
            return;
          } else {
            console.log("USER FOUND");
            navigate("/ride");
          }
        });
      }
    } catch (error) {
      setErrMessage(error.message);
      setTimeout(() => {
        setErrMessage("");
      }, 3000);
    }
  };

  // Firebase User Google Auth
  const googleSign = async () => {
    try {
      await googleSignUpUser().then((user) => {
        setUser(user);
        if (!user || user === null || user === undefined) {
          console.log("NO USER FOUND");
          return;
        } else {
          console.log("USER FOUND");
          navigate("/ride");
        }
      });
    } catch (error) {
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
              <p className="text-red-600">{errMessage}</p>

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
          </form>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Signup;
