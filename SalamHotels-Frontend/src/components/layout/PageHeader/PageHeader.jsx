const PageHeader = ({ pageTitle, pageDescription }) => {
  return (
    <div className="bg-[rgb(4,36,49)] h-72 text-white mb-2 flex items-center ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="m-0 lg:text-5xl text-3xl w-full text-center">
          {pageTitle}
        </h2>
        <p className="text-2xl lg:text-left text-center">{pageDescription}</p>
      </div>
    </div>
  );
};

export default PageHeader;
