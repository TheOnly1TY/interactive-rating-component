export function RatingValues({ onHandleClick, checked }) {
  const rating = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-between items-center">
      {rating.map((rateNum, id) => (
        <span
          key={id}
          onClick={() => onHandleClick(rateNum)}
          className={`grid place-content-center w-[51px] h-[51px] text-base text-medium-grey bg-dark-blue tracking-tighter font-bold my-[23px] transition duration-150 ease-in-out rounded-full cursor-pointer ${
            rateNum === checked
              ? "text-white bg-medium-grey"
              : " hover:text-white hover:bg-orange"
          }`}
        >
          {rateNum}
        </span>
      ))}
    </div>
  );
}
