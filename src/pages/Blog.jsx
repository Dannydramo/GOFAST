import React, { Fragment, useEffect } from "react";

const Blog = () => {
  const blogs = [
    {
      title: "Top 10 delivery tips for a smooth experience",
      content: "",
      url: "top-10-delivery-tips-for-a-smooth-experience",
    },
    {
      title: "How to choose the right delivery service for your need",
      content: "",
      url: "how-to-choose-the-right-delivery-service-for-your-need",
    },
    {
      title: "The impact of e-commerce on the delivery industry",
      content: "",
      url: "the-impact-of-e-commerce-on-the-delivery-industry",
    },
    {
      title:
        "The future of delivery services: emerging technologies and trends",
      content: "",
      url: "the-future-of-delivery-services:-emerging-technologies-and-trends",
    },
    {
      title: "Safe and secure delivery: best practices and recommendationse",
      content: "",
      url: "safe-and-secure-delivery:-best-practices-and-recommendations",
    },
    {
      title: "Eco-friendly delivery options and practices",
      content: "",
      url: "eco-friendly-delivery-options-and-practices",
    },
    {
      title: "The importance of reliable tracking and delivery updates",
      content: "",
      url: "the-importance-of-reliable-tracking-and-delivery-updates",
    },
    {
      title: "How to handle delivery delays and disruptions",
      content: "",
      url: "how-to-handle-delivery-delays-and-disruptions",
    },
    {
      title: "Behind the scenes of a delivery company: a day in the life",
      content: "",
      url: "behind-the-scenes-of-a-delivery-company:-a-day-in-the-life",
    },
    {
      title: "How to pack and prepare items for safe and secure delivery",
      content: "",
      url: "how-to-pack-and-prepare-items-for-safe-and-secure-delivery",
    },
  ];

  const blog = [];

  return (
    <Fragment>
      <section className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto max-w-[1600px] mt-20 md:mt-24">
        {" "}
        {/* <div className="">
          {" "}
          <p>Top 10 delivery tips for a smooth experience</p>
          <p>How to choose the right delivery service for your needs</p>
          <p>The impact of e-commerce on the delivery industry</p>
          <p>
            The future of delivery services: emerging technologies and trends
          </p>
          <p>Safe and secure delivery: best practices and recommendations</p>
          <p>Eco-friendly delivery options and practices</p>
          <p>The importance of reliable tracking and delivery updates</p>
          <p>How to handle delivery delays and disruptions</p>
          <p>Behind the scenes of a delivery company: a day in the life</p>
          <p>How to pack and prepare items for safe and secure delivery.</p>
        </div> */}
        <div className="flex min-h-[80vh] items-center justify-center flex-col">
          <h1 className="text-center text-5xl">No Blog Found</h1>
          <p className="text-center my-4 text-2xl">Try Other Categories</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;
