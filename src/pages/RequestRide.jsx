import React, { Fragment } from "react";

import Payment from "../components/BookingRidePage/Payment";
import { toast } from "react-toastify";
import MapComponent from "../components/BookingRidePage/MapComponent";

const RequestRide = () => {
  return (
    <Fragment>
      <section className="w-[100vw] h-[100vh] relative flex flex-col bg-transparent">
        <div>
          {" "}
          <MapComponent />
          <Payment />
        </div>
      </section>
    </Fragment>
  );
};

export default RequestRide;
