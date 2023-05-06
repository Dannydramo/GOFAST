import { Link } from "react-router-dom";
import DeliveryBike from "../../images/DeliveryBike.svg";

const Emergency = () => {
  return (
    <section>
      <div className="w-[90%] mx-auto max-w-[1600px] mt-24">
        <div className="flex py-0 sm:py-4 flex-col-reverse sm:flex-row justify-between items-center mt-4 sm:mt-0">
          <div className="">
            <img src={DeliveryBike} alt="bikeman" className="-ml-4 md:-ml-20" />
          </div>
          <div className="sm:w-full md:w-[70%] lg:w-[60%] xl:w-2/5 bg-[url(./images/Gofast.png)] bg-center bg-contain bg-no-repeat lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl">
              Emergency Parcel Delivery Service
            </h1>
            <p className="my-4 text-base md:text-lg">
              Making delivery fast and affordable by allowing local and
              individuals having great access to delivery
            </p>
            <div className="">
              <Link
                to="/newsletter"
                className="bg-greek text-white mr-4 rounded-md py-2 px-4 text-base md:text-lg"
              >
                Newsletter
              </Link>
              <Link
                to="/post"
                className="bg-btn2 text-greek rounded-md  py-2 px-6 text-base md:text-lg"
              >
                Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
