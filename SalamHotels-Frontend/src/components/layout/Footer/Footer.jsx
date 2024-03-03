import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[rgb(4,36,49)] h-96 text-white  text-lg">
      <div className="h-full flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <h3 className="text-xl font-medium uppercase">For travellers</h3>
          <ul className="list-none text-slate-300 flex flex-col">
            <Link className="hover:text-white text-slate-300 no-underline">
              Create an account
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              Login
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              My Bookings
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              How it works
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium uppercase">For property owners</h3>
          <ul className="list-none text-slate-300 flex flex-col">
            <Link className="hover:text-white text-slate-300 no-underline">
              Create an account
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              Login
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              Submit a property
            </Link>
            <Link className="hover:text-white text-slate-300 no-underline">
              How it works
            </Link>
          </ul>
        </div>
        <div>
          <p>Follow us</p>
          <div className="flex gap-4">
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
