import { Link } from "react-router-dom";
import GreenBtn from "../../common/GreenBtn/GreenBtn";

const Register = ({ userType }) => {
  return (
    <div className="bg-[rgb(255,245,225)]">
      <div className="max-w-7xl lg:mx-auto py-24  mx-3">
        <div className="">
          <h4 className="uppercase font-bold text-2xl m-0">
            Register For {userType}
          </h4>
          <p className="my-4 text-xl text-gray-700">
            Forgotten your password?{" "}
            <Link className="no-underline text-green-600" to={"/"}>
              Reset it here.
            </Link>
          </p>
          {userType == "Property Owner" && (
            <p className="my-4 text-xl text-gray-700">
              Not a Property Owner?{" "}
              <Link
                className="no-underline text-green-600"
                to={"/register-for-traveler"}
              >
                Register for Traveler.
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
                  name="username"
                  id=""
                  className="lg:w-[500px] w-80 h-10 text-xl my-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="username" className="text-xl  text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id=""
                  className="lg:w-[500px] w-80 h-10 text-xl my-2"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xl  text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id=""
                  className="lg:w-[500px] w-80 h-10 text-xl my-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-xl  text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id=""
                  className="lg:w-[500px] w-80 h-10 text-xl my-2"
                />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-5">
              {userType == "Property Owner" && (
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xl  text-gray-700">
                    City of Residence
                  </label>
                  <select className="bg-white lg:w-[510px] w-[330px]  h-12 my-2 font-serif text-lg pl-3">
                    <option value=""></option>
                    <option className="text-lg" value="barcelona">
                      Barcelona
                    </option>
                    <option value="madrid" className="text-lg">
                      Madrid
                    </option>
                    <option value="valencia" className="text-lg">
                      Valencia
                    </option>
                  </select>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <input type="checkbox" name="remember" id="" />
              <p className="text-xl text-gray-700">Remember Me</p>
            </div>
            <div className="my-2">
              <GreenBtn text={"Register"} px={8} py={4}></GreenBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
