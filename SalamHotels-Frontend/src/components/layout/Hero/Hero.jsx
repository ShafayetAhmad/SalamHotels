import HeroImg from "../../../assets/images/hero.jpg";
import GreenBtn from "../../common/GreenBtn/GreenBtn";
const Hero = () => {
  return (
    <div>
      <div className="bg-[rgb(7,58,36)]">
        <img
          src={HeroImg}
          alt=""
          className="w-full object-cover h-[580px] bg-red-500"
        />
        <div className="max-w-7xl mx-auto">
          <p className="absolute  top-60 left-32  text-left text-8xl font-extrabold text-white font-serif  mt-8 o">
            SalamHotels, <br />
            Your next stay.
          </p>
        </div>
      </div>
      <div className="bg-[rgb(7,58,36)] m-0 h-52 w-full ">
        <div className="flex max-w-7xl mx-auto h-full items-center ">
          <div className="w-full ">
            <form>
              <div className="flex text-white justify-between w-full items-end">
                <div className="flex flex-col gap-3">
                  <label className="text-xl">Destination</label>
                  <select className="bg-white w-80 h-11 font-serif text-lg pl-3">
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
                <div className="flex flex-col gap-3">
                  <label className="text-xl">Check in</label>
                  <input
                    className="w-72 h-10 text-lg pl-4 font-serif"
                    type="date"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xl">Check out</label>
                  <input
                    className="w-72 h-10 text-lg pl-4 font-serif"
                    type="date"
                  />
                </div>
                <div className=" justify-center flex-col">
                  <GreenBtn text={"search"} px={16} py={4}></GreenBtn>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
