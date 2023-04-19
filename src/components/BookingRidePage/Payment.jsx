import React, { Fragment, useContext } from "react";
import PaystackPop from "@paystack/inline-js";
import AuthContext from "../../context/AuthContext";

const Payment = () => {
  const { user } = useContext(AuthContext);
  const handlePayment = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      amount: 500 * 100,
      email: user.email,
      firstname: user.displayname,
      lastname: "Dan",
    });
  };

  return (
    <Fragment>
      <button
        onClick={handlePayment}
        className="w-full py-2 rounded-md my-2 md:my-4 bg-greek text-white"
      >
        Continue With Payment
      </button>
    </Fragment>
  );
};

export default Payment;
