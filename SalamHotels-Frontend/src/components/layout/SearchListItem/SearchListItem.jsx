import thumb1 from "../../../assets/images/a15-600x600.jpg";
import GreenBtn from "../../common/GreenBtn/GreenBtn";
const SearchListItem = () => {
  return (
    <div>
      <div className="grid grid-cols-5 my-4 ">
        <div className="col-span-1">
          <img src={thumb1} className="w-full" alt="" />
        </div>
        <div className="col-span-3" style={{ borderRight: "1px solid slate" }}>
          <div className="px-6 flex flex-col justify-center h-full ">
            <div>
              <h3 className="font-extrabold text-2xl my-0">Title of Place</h3>
            </div>
            <div className="font-extralight text-gray-700">
              Address bin React Al Internet
            </div>
            <div>
              <p className="text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                similique veritatis officia. Tempora dolor, libero culpa
                praesentium totam inventore laborum?
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center flex-col gap-10">
          <div className="flex flex-col items-center justify-center">
            <h4 className="m-0 font-extralight text-xl">From</h4>
            <h4 className="m-0 font-bold text-3xl">$ 57</h4>
          </div>
          <div>
            <GreenBtn text={"Book Now"} px={6} py={4}></GreenBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
