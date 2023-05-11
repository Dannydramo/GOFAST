import Apple from "../../images/image 2.png";
import Playstore from "../../images/image 4.png";

const Download = () => {
  return (
    <section className="bg-greek py-8">
      <div className="w-[90%] mx-auto max-w-[1600px]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
              Our app has moved from great to super
            </h1>
            <p className="my-4 text-base md:text-lg text-white">
              We made our app super so we could serve you better
            </p>
          </div>
          <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0">
            <div className="flex py-2 pr-4 sm:px-4 rounded-md my-3 border-2 border-white items-center min-w-[150px] text-white sm:max-w-[300px]">
              <img
                src={Apple}
                alt="Apple Download"
                width="50"
                height="50"
                className=""
              />
              <p className="text-base md:text-lg">
                Get it on <br /> <span>APP STORE</span>
              </p>
            </div>
            <div className="flex py-2 px-2 sm:px-4 rounded-md my-3 border-2 border-white items-center min-w-[150px] text-white sm:max-w-[300px]">
              <img
                src={Playstore}
                alt="PlayStore Download"
                className="sm:ml-2 sm:mr-2"
                width="40"
                height="40"
              />
              <p className="text-base md:text-lg">
                Get it on <br /> <span>PLAY STORE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
