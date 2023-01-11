import iphone from "./images/iphone.png";
import Ellispe from "./images/Ellipse 18.png";

const Parcel = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="">
            <img src={iphone} alt="" className="-ml-4 md:-ml-20" />
          </div>
          <div className="sm:w-full md:w-3/4 lg:w-2/5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl">We Are Best</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl">
              Parcel Service Ever
            </h1>
            <p className="my-4 text-lg md:text-xl">
              We make delivery within Nigeria very easy especially in tracking
              your goods real - time, individuals and local transporters can
              deliver goods accross Nigeria safely
            </p>
            <div className="flex justify-between">
              <div className="space-y-4">
                <div className="flex items-center">
                  <img src={Ellispe} alt="" />
                  <p className="text-lg ml-2 md:text-xl">Total free account</p>
                </div>
                <div className="flex items-center">
                  <img src={Ellispe} alt="" />
                  <p className="text-lg ml-2 md:text-xl">Easy to use</p>
                </div>
                <div className="flex items-center">
                  <img src={Ellispe} alt="" />
                  <p className="text-lg ml-2 md:text-xl">100% guaranteed</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <img src={Ellispe} alt="" />
                  <p className="text-lg ml-2 md:text-xl">
                    Cheap Delivery Price
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={Ellispe} alt="" />
                  <p className="text-lg ml-2 md:text-xl">Safe & Secure</p>
                </div>
                <div className="flex items-center">
                  <img src={Ellispe} alt="" />
                  <p className="text-lg ml-2 md:text-xl">Total free account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcel;
