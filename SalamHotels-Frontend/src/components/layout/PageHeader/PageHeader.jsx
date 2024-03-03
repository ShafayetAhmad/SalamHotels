const PageHeader = ({ pageTitle, pageDescription }) => {
  return (
    <div className="bg-[rgb(4,36,49)] h-72 text-white mb-2 flex items-center ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="m-0 text-5xl w-full text-center">{pageTitle}</h2>
        <p className="text-2xl">{pageDescription}</p>
      </div>
    </div>
  );
};

export default PageHeader;
