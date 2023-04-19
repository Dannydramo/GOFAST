import React, { Fragment } from "react";
import blogs from "../blog.json";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogDel = blogs;

  console.log(blogDel);

  // blogDel.map((blog) => {
  //   console.log(blog);
  // });

  return (
    <Fragment>
      <section className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto max-w-[1600px] mt-20 md:mt-24">
        {" "}
        {blogDel.map((blog, index) => (
          <div className="" key={index}>
            <Link to={`/blog/${blog.url}`}>{blog.title}</Link>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Blog;
