import { Link } from "react-router-dom";
import GreenBtn from "../../common/GreenBtn/GreenBtn";

const PasswordReset = ({ userType }) => {
  return (
    <div className="bg-[rgb(255,245,225)]">
      <div className="max-w-7xl mx-auto py-24">
        <div>
          <h4 className="uppercase font-bold text-2xl m-0">
            {userType} Password Reset
          </h4>
        </div>
        <div className="w-full">
          <form>
            <div className="flex gap-5">
              <div className="flex flex-col my-12">
                <label htmlFor="email" className="text-xl  text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id=""
                  className="lg:w-[1000px] w-96 h-10 my-2"
                />
              </div>
            </div>

            <div className="my-2">
              <GreenBtn text={"RESET PASSWORD"} px={8} py={4}></GreenBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
