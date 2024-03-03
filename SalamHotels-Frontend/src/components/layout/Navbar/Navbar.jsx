import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[rgb(4,36,49)] h-28 text-white justify-center text-lg">
      <div className="h-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to={"/"} className="text-3xl">
          SalamHotels
        </Link>
        <div>
          <ul className="flex gap-8 list-none">
            <NavLink className="no-underline text-white" to={"/"}>
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
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
