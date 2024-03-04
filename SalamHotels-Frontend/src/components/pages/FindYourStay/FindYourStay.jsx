import PageHeader from "../../layout/PageHeader/PageHeader";
import { MdViewList, MdViewModule } from "react-icons/md";
import { FaSortDown, FaSortUp } from "react-icons/fa6";
import SearchListItem from "../../layout/SearchListItem/SearchListItem";
import GreenBtn from "../../common/GreenBtn/GreenBtn";
import SearchGridItem from "../../layout/SearchGridItem/SearchGridItem";
const FindYourStay = () => {
  return (
    <div>
      <PageHeader
        pageTitle={"Find Your Stay"}
        pageDescription={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, commodi!"
        }
      ></PageHeader>
      <div className="bg-[rgb(255,245,225)]">
        <div className="flex max-w-7xl mx-auto ">
          <div className=" flex-1 my-10">
            <h4 className="uppercase font-extrabold">search</h4>
            <div>
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col gap-3">
                  <label className="text-xl">Destination</label>
                  <select className="bg-white w-60 h-11 font-serif text-lg pl-3">
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
                    className="w-56 h-10 text-lg pl-4 font-serif"
                    type="date"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xl">Check out</label>
                  <input
                    className="w-56 h-10 text-lg pl-4 font-serif"
                    type="date"
                  />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg">Price range</h4>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="text-xl ml-3">
                  $0 - $49
                </label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="text-xl ml-3">
                  $50 - $99
                </label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="text-xl ml-3">
                  $100+
                </label>
              </div>
            </div>
            <div className="my-8">
              <GreenBtn text={"Apply Filters"} px={16} py={4}></GreenBtn>
            </div>
          </div>
          <div className="flex-4 w-full mx-10 my-10">
            <div
              className="flex justify-between bg-orange-100  px-4 rounded-xl"
              style={{ border: "1px solid black" }}
            >
              <div>
                <h4 className="text-lg">Sort by</h4>
              </div>
              <div className="flex gap-5 items-center   ">
                <div className="flex ">
                  <p className="text-lg">Price</p>
                  <div className="flex flex-col justify-center m-2">
                    <button>
                      <FaSortUp />
                    </button>
                    <button>
                      <FaSortDown />
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <p className="text-lg">Rating</p>
                  <div className="flex flex-col justify-center m-2">
                    <button>
                      <FaSortUp />
                    </button>
                    <button>
                      <FaSortDown />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <MdViewList size={"2rem"} />
                <MdViewModule size={"2rem"} />
              </div>
            </div>
            <div>
              <div>
                <SearchListItem></SearchListItem>
              </div>
              <div className="flex w-full justify-between">
                <SearchGridItem></SearchGridItem>
                <SearchGridItem></SearchGridItem>
                <SearchGridItem></SearchGridItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourStay;
