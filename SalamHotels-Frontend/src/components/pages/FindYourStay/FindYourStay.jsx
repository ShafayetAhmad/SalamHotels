import PageHeader from "../../layout/PageHeader/PageHeader";

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
        <div className="flex max-w-7xl mx-auto">
          <div className=" flex-1">
            <h4 className="uppercase">search</h4>
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
            <button className="btn uppercase px-16 py-4 my-4 bg-[rgb(30,109,70)] text-base font-semibold text-white border-none">
              Apply Filters
            </button>
          </div>
          <div className="flex-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            magni explicabo quas eaque, saepe deleniti vitae repudiandae eum
            nisi numquam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourStay;
