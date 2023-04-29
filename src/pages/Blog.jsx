import React, { Fragment } from "react";
import blogs from "../blog.json";
import { Link } from "react-router-dom";
import Bike from "../images/image 1.png";
import Navbar from "../Navbar";

const Blog = () => {
  const blogDel = blogs;

  return (
    <Fragment>
      <Navbar />
      <section className="w-[90%] sm:w-[80%] lg:w-[70%] mx-auto max-w-[1600px] mt-20 md:mt-24">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 text-base md:text-lg">
          {blogDel.map((blog, index) => (
            <div className="bg-gray-500 rounded-xl" key={index}>
              <Link to={`/blog/${blog.url}`}>
                <img src={Bike} alt="" />
                <p className="p-4">{blog.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
