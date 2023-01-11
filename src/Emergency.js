import image1 from "./images/image 1.png";

const Emergency = () => {
  return (
    <section>
      <div className="container">
        <div className="flex py-8 flex-col-reverse sm:flex-row justify-between items-center mt-8 sm:mt-14">
          <div className="">
            <img src={image1} alt="" className="-ml-4 md:-ml-20" />
          </div>
          <div className="sm:w-full md:w-5/6 xl:w-2/5 bg-[url(./images/Gofast.png)] bg-center bg-contain bg-no-repeat lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl">
              Emergency Parcel Delivery Service
            </h1>
            <p className="my-4 text-lg md:text-xl">
              Making delivery fast and affordable by allowing local and
              individuals having great access to delivery
            </p>
            <div className="">
              <button className="bg-greek text-white mr-4 rounded-md text-lg py-2 px-4 md:text-xl">
                Newsletter
              </button>
              <button className="bg-btn2 text-greek rounded-md text-lg py-2 px-6 md:text-xl">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
