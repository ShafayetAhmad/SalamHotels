import { Link } from "react-router-dom";
import GreenBtn from "../../common/GreenBtn/GreenBtn";
const Login = ({ userType }) => {
  return (
    <div className="bg-[rgb(255,245,225)]">
      <div className="max-w-7xl lg:mx-auto py-24  mx-3">
        <div>
          <h4 className="uppercase font-bold text-2xl m-0">
            Login For {userType}
          </h4>
          <p className="my-4 text-xl text-gray-700">
            Forgotten your password?{" "}
            {userType == "Traveler" && (
              <Link
                className="no-underline text-green-600"
                to={"/reset-password-traveler"}
              >
                Reset it here.
              </Link>
            )}
            {userType == "Property Owner" && (
              <Link
                className="no-underline text-green-600"
                to={"/reset-password-property-owner"}
              >
                Reset it here.
              </Link>
            )}
          </p>
          {userType == "Property Owner" && (
            <p className="my-4 text-xl text-gray-700">
              Not a Property Owner?{" "}
              <Link
                className="no-underline text-green-600"
                to={"/login-for-traveler"}
              >
                Login for Traveler.
              </Link>
            </p>
          )}
        </div>
        <div className="w-full ">
          <form>
            <div className="flex lg:flex-row flex-col gap-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xl  text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id=""
                  className="lg:w-[500px] w-80 h-10 my-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-xl  text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id=""
                  className="lg:w-[500px] w-80 h-10 my-2"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" name="remember" id="" />
              <p className="text-xl text-gray-700">Remember Me</p>
            </div>
            <div className="my-2">
              <GreenBtn text={"Login"} px={8} py={4}></GreenBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
