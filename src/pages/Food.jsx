import React, { Fragment } from "react";
import Navbar from "../Navbar";

const Food = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="w-[90%] mx-auto max-w-[1600px] mt-24">
        <div className="flex min-h-[80vh] items-center justify-center flex-col">
          <h1 className="text-center text-5xl">GofastFood</h1>
          <p className="text-center my-4 text-2xl">
            We are coming soon as we are trying to expand our business
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Food;
