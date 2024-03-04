import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-[rgb(4,36,49)] h-28  text-white justify-center text-lg">
      <div className="h-full flex justify-between items-center lg:max-w-7xl lg:mx-auto mx-4">
        <Link to={"/"} className="text-3xl no-underline text-white">
          SalamHotels
        </Link>
        <div className="lg:hidden bg-black">
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            <ImMenu size={"2rem"} color="black"/>
          </button>
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 right-0 bg-black">
              <ul className="flex flex-col gap-4 list-none">
                <NavLink
                  className="no-underline text-white"
                  to={"/bookyourtravel"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Find your stay
                </NavLink>
                <NavLink
                  className="no-underline text-white"
                  to={"/"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it works
                </NavLink>
                <NavLink
                  className="no-underline text-white"
                  to={"/"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </NavLink>
                <NavLink
                  className="no-underline text-white"
                  to={"/"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  List your property
                </NavLink>
              </ul>
            </div>
          )}
        </div>
        <div className="lg:block hidden">
          <ul className="flex gap-8 list-none">
            <NavLink className="no-underline text-white" to={"/bookyourtravel"}>
              Find your stay
            </NavLink>
            <NavLink className="no-underline text-white" to={"/"}>
              How it works
            </NavLink>
            <NavLink className="no-underline text-white" to={"/"}>
              Blog
            </NavLink>
            <NavLink className="no-underline text-white" to={"/"}>
              List your property
            </NavLink>
          </ul>
        </div>

        <div className="lg:block hidden"></div>
      </div>
    </nav>
  );
};

export default Navbar;
