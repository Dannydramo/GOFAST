import React, { Fragment, useContext } from "react";
import PaystackPop from "@paystack/inline-js";
import AuthContext from "../../context/AuthContext";
import { toast } from "react-toastify";

const Payment = () => {
  const { user } = useContext(AuthContext);
  const handlePayment = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      amount: 5000 * 100,
      email: `${user.email}`,
      firstname: `${user.displayName}`,
      lastname: "",
      onSuccess(transaction) {
        toast.success(
          `Dear ${user.displayName}, Your Payment was Successful With Reference No: ${transaction.reference} `
        );
      },
      onCancel() {
        toast.error("Payment was not Successful. Please Try Again Later");
      },
    });
  };

  return (
    <Fragment>
      <div className="">
        {" "}
        <button
          onClick={handlePayment}
          className="w-[80%] mx-auto flex justify-center py-2 rounded-md my-2 md:my-4 bg-greek text-white p-4"
        >
          Continue With Payment
        </button>
      </div>
    </Fragment>
  );
};

export default Payment;
