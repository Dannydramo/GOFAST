import vector1 from "./images/Vector (1).png";
import vector from "./images/Vector.png";

const Delivery = () => {
  return (
    <section>
      <div className="container1">
        <div className="grid sm:grid-cols-2 gap-8 my-12">
          <div className="bg-shadbg box p-8">
            <img src={vector1} alt="" />
            <h3 className="font-bold my-4 text-xl">Fast Delivery</h3>
            <p className="text-lg md:text-xl">
              Your parcels are gotten to you at due time you dont need to worry
              about your client getting his/her goods late
            </p>
          </div>
          <div className="bg-shadbg box p-8">
            <img src={vector} alt="" />
            <h3 className="font-bold my-4 text-xl">Safe & Secure</h3>
            <p className="text-lg md:text-xl">
              Your parcels are safe and secured with our trusted and eligible
              riders we make sure your parcels are 100% secure and safe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
