import React, { Fragment, useContext, useRef, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Payment from "../components/BookingRidePage/Payment";
import { toast } from "react-toastify";

const RequestRide = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    toast.success(`Welcome ${user.displayName}`);
  }, []);

  return (
    <Fragment>
      <section className="w-[100vw] h-[100vh] relative flex flex-col bg-transparent">
        <div className="w-[90%] md:w-[50%] mx-auto">
          {" "}
          <Payment />
        </div>
      </section>
    </Fragment>
  );
};

export default RequestRide;
