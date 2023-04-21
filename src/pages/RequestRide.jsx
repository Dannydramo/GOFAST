import React, { Fragment, useContext, useRef } from "react";
import AuthContext from "../context/AuthContext";
import BookMap from "../components/BookingRidePage/BookMap";
import Payment from "../components/BookingRidePage/Payment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RequestRide = () => {
  const { user } = useContext(AuthContext);
  const destinationRef = useRef();
  const pickupRef = useRef();
  const navigate = useNavigate();

  const bookingRide = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("You must be Signed In before booking a ride");
      navigate("/signup");
    } else {
      toast.success("Booking Ride");
      console.log("Booking Ride");
    }
  };

  return (
    <Fragment>
      <section className="w-[100vw] h-[100vh] relative flex flex-col">
        {/* ====== MAP COMPONENT =========*/}
        <BookMap />

        {/* ===== PickUp Form ====== */}
        <div className="sm:w-[90%] mx-auto max-w-[1600px] mt-20 md:mt-24">
          <div className="bg-white p-4 sm:p-8 sm:rounded-xl w-[100%] sm:w-[60%] md:w-[50%] sm:h-[80vh] lg:w-[45%] xl:w-[30%] sm:z-[1] absolute bottom-[0rem] left-0 sm:relative sm:top-0">
            <p className="font-bold text-base md:text-lg">
              {user && `Hey ${user.displayName},`}
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-4">
              Where Can We Pick Up Your Delivery?
            </h1>
            <form onSubmit={bookingRide}>
              <input
                type="text"
                className="w-full px-[1rem] py-[.5rem] text-base md:text-lg my-2 sm:my-3 bg-gray-200 rounded-md"
                placeholder="Enter Pick Up Location"
                ref={pickupRef}
              />
              <input
                type="text"
                className="w-full px-[1rem] py-[.5rem] text-base md:text-lg my-2 sm:my-3 bg-gray-200 rounded-md"
                placeholder="Enter Delivery Location"
                ref={destinationRef}
              />
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-greek my-2 text-white"
              >
                Book Ride
              </button>
            </form>
            <Payment />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default RequestRide;
