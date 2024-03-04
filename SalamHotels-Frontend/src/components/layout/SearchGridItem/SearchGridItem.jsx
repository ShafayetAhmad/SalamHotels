import thumb1 from "../../../assets/images/a15-600x600.jpg";
import GreenBtn from "../../common/GreenBtn/GreenBtn";

const SearchGridItem = () => {
  return (
    <div>
      <div
        className="m-1 p-2 rounded-xl"
        style={{ border: "2px solid LightGray" }}
      >
        <div>
          <div className="w-full h-full flex justify-center">
            <img src={thumb1} className="lg:w-72 w-96 h-96 lg:h-72" alt="" />
          </div>
        </div>
        <div className="px-4">
          <div style={{ borderBottom: "2px solid LightGray" }} className="pb-4">
            <div>
              <h3 className="font-extrabold text-2xl lg:my-0 my-3 lg:text-left text-center">
                Title of Place
              </h3>
            </div>
            <div className="font-extralight lg:text-left text-center text-gray-700">
              Address bin React Al Internet
            </div>
          </div>
          <div className="flex gap-3">
            <p className="text-xl font-extralight">From</p>{" "}
            <p className="font-bold text-xl">$ 44</p>
          </div>
          <div
            style={{
              borderBottom: "2px solid LightGray",
              borderTop: "2px solid LightGray",
            }}
            className="py-4 text-lg font-extralight text-gray-700"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            quaerat sint, in eius libero amet?
          </div>
          <div>
            <div className="flex justify-center  my-4 ">
              <GreenBtn text={"BOOK NOW"} px={4} py={4}></GreenBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchGridItem;
