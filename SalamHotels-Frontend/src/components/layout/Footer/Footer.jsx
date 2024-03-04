import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[rgb(4,36,49)] lg:h-96 h-full py-8 text-white  text-lg">
      <div className="h-full flex lg:flex-row flex-col justify-between lg:items-center items-center lg:max-w-7xl lg:mx-auto mx-3">
        <div>
          <h3 className="text-xl font-medium uppercase text-center ">
            For travellers
          </h3>
          <div className="list-none text-slate-300 flex flex-col text-center">
            <Link
              to={"register-for-traveler"}
              className="hover:text-white text-slate-300 no-underline"
            >
              Create an account
            </Link>
            <Link
              to={"/login-for-traveler"}
              className="hover:text-white text-slate-300 no-underline"
            >
              Login
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              My Bookings
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              How it works
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium uppercase text-center ">
            For property owners
          </h3>
          <div className="list-none text-slate-300 flex flex-col text-center">
            <Link
              to={"/register-for-property-owners"}
              className="hover:text-white text-slate-300 no-underline"
            >
              Create an account
            </Link>
            <Link
              to={"/login-for-property-owners"}
              className="hover:text-white text-slate-300 no-underline"
            >
              Login
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              Submit a property
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              How it works
            </Link>
          </div>
        </div>
        <div>
          <p className="text-center">Follow us</p>
          <div className="flex gap-4 text-center">
            <FaFacebook size="2em" />
            <FaTwitter size="2em" />
            <FaInstagram size="2em" />
            <FaYoutube size="2em" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
