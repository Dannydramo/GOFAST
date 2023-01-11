import Logo from "./images/favicon.png";
import OpenMenu from "./images/icon-menu.svg";
import Close from "./images/icon-close.svg";
import { useState } from "react";
const Navbar = () => {

  let [open, setOpen] = useState(false)

  const Links = [
    {name: "Home"},
    {name: "Service"},
    {name: "FAQS"},
    {name: "Blog"},
  ]

  return (
    <div className="container">
      <nav className="flex items-start sm:items-center justify-between py-5">
        <img src={Logo} alt="Logo" />

        <img src={open ? Close : OpenMenu} className="z-20 sm:hidden" onClick={()=>setOpen(!open)}/>
        
       

        <div className={`flex  md:text-xl flex-col md:w-3/5 sm:justify-between items-center  sm:flex-row sm:space-x-8 bg-bgCol sm:bg-transparent space-y-5 sm:space-y-0 sm:static fixed top-0 sm:h-auto h-screen w-screen duration-500 ease-linear sm:w-auto px-11 py-12 sm:py-0 sm:px-0 ${!open ? 'right-[-100%]' : 'right-0'}`}>
          <ul className="space-x-0 mt-12 space-y-4 sm:flex sm:space-x-6 text-lg sm:space-y-0 sm:mt-0">
         
          {
            Links.map((link, index) => (
              <li key={index}><a href="/">{link.name}</a></li>
            ))
          }

        </ul>
        

          <div className="flex-col space-x-0 space-y-5 mt-12  sm:mt-0 flex sm:flex-row sm:space-x-12 sm:space-y-0 text-lg">
            <button>Login</button>
            <button className="border-greek border rounded-md py-2 px-4">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
