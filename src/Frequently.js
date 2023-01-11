const Frequently = () => {
  return (
    <section className="my-12">
      <div className="container">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl my-8">
          Frequently Asked Questions
        </h1>
        <div className="sm:grid grid-cols-3 gap-8">
          <div className="">
            <h1 className="font-bold my-4 text-xl">
              Will my clients get goods on time
            </h1>
            <p className="text-lg md:text-xl">
              All clients satisfactory is our concern and we make sure we
              deliver to their door step
            </p>
          </div>
          <div className="">
            <h1 className="font-bold my-4 text-xl">Can I Track My Parcel</h1>
            <p className="text-lg md:text-xl">
              There are very various method you can track your parcels and share
            </p>
          </div>
          <div className="">
            <h1 className="font-bold my-4 text-xl">
              What Is My Shipment Number
            </h1>
            <p className="text-lg md:text-xl">
              There are varies of ways you get your shipment number either mail
              or text
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
