import Logo from "./images/favicon.png";
import vector2 from "./images/Vector (2).png";
import vector3 from "./images/Vector (3).png";
import group from "./images/Group.png";

const Footer = () => {
  return (
    <footer className="">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between my-12">
          <div className="mb-4">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="flex space-y-4 flex-col md:flex-row md:space-x-12 md:space-y-0">
            <div className="">
              <h4 className="font-bold mb-4 text-xl">Quick Link</h4>
              <ul className="space-y-2 text-lg ml-2 md:text-xl">
                <li>
                  <a href="/">Security</a>
                </li>
                <li>
                  <a href="/">Privacy Notice</a>
                </li>
                <li>
                  <a href="/">Terms & Categories</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-bold mb-4 text-xl">Categories</h4>
              <ul className="space-y-2 text-lg ml-2 md:text-xl">
                <li>
                  <a href="/">Home & Appliances</a>
                </li>
                <li>
                  <a href="/">Food Stuff</a>
                </li>
                <li>
                  <a href="/">Others</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-bold mb-4 text-xl">Location</h4>
              <p className="text-lg ml-2 md:text-xl">
                12, Beckley Street papalodun crescent
              </p>
              <div className="flex space-x-4 mt-8">
                <img src={vector2} alt="" />
                <img src={vector3} alt="" />
                <img src={group} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
