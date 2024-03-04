const GreenBtn = ({ px, py, text }) => {
  return (
    <div>
      <button
        className={`btn uppercase px-${px} py-${py} bg-[rgb(30,109,70)] font-semibold text-white border-none`}
      >
        {text}
      </button>
    </div>
  );
};

export default GreenBtn;
