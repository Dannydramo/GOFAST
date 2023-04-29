import React, { Fragment } from "react";
import Navbar from "../Navbar";

const Post = () => {
  return (
    <Fragment>
      <Navbar />
      <section className="w-[90%] mx-auto max-w-[1600px] mt-24">
        <div className="flex min-h-[80vh] items-center justify-center flex-col">
          <h1 className="text-center text-5xl">No Post Found</h1>
          <p className="text-center my-4 text-2xl">Try Other Categories</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Post;
