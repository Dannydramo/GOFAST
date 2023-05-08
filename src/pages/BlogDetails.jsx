import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import blogs from "../blog.json";
import Navbar from "../Navbar";

const BlogDetails = () => {
  const { blogid } = useParams();
  const blogDetails = blogs;

  //  Using the blogid params from the useParams to filter a particular blog post from the blog.json file
  const filteredBlog = blogDetails.filter((blog) => blog.url === blogid);

  return (
    <Fragment>
      <Navbar />
      <section className="w-[90%] mx-auto max-w-[1600px] mt-24">
        <div className="">
          {filteredBlog.map((blogDetail, index) => (
            <div className="" key={index}>
              <h1 className="my-8 text-center font-bold text-2xl md:text-3xl lg:text-4xl w-full md:w-[80%] lg:w-[70%] mx-auto leading-[1.7]">
                {blogDetail.title.toUpperCase()}
              </h1>
              {/* <img src={blogDetail.img} alt="" /> */}
              <div
                className={`bg-${blogDetail.img} w-[100vw] h-[400px] bg-cover bg-no-repeat`}
              ></div>
              <p className="my-8 text-base md:text-lg">{blogDetail.content}</p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default BlogDetails;
