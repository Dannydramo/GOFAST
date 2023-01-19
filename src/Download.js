import Apple from "./images/image 2.png";
import Playstore from "./images/image 4.png";

const Download = () => {
  return (
    <section className="bg-greek py-8">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
              Our app has moved from great to super
            </h1>
            <p className="my-4 text-lg md:text-xl text-white">
              We made our app super so we could serve you better
            </p>
          </div>
          <div className="">
            <div className="flex py-2 px-4 rounded-md border-2 border-white items-center text-white">
              <img src={Apple} alt="" />
              <p className="text-lg md:text-xl">
                Download on the <br /> <span>APP STORE</span>
              </p>
            </div>
            <div className="flex py-2 px-4 rounded-md my-3 border-2 border-white items-center text-white">
              <img src={Playstore} alt="" className="ml-6 mr-2" />
              <p className="text-lg md:text-xl">
                Get it on <br /> <span>PLAYSTORE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
