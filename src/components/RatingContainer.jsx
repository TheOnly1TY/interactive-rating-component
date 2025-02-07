import iconStar from "../assets/images/icon-star.svg";
import { RatingValues } from "./RatingValues";

export function RatingContainer({ checked, onHandleClick, handleSubmit }) {
  return (
    <div className="container rounded-[15px] p-[1.4375rem] md:p-9 md:rounded-[30px] ">
      <figurse className="grid place-content-center w-10 h-10 bg-dark-blue rounded-full md:w-12 md:h-12">
        <img src={iconStar} alt="logo" />
      </figurse>
      <h1 className="text-2xl text-white my-[23px] md:text-[1.75rem]">
        How did we do?
      </h1>
      <p className="text-[0.9375rem] text-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingValues onHandleClick={onHandleClick} checked={checked} />
      <button
        onClick={() => handleSubmit(checked)}
        className="w-full h-11 text-[0.9375rem] text-white text-center bg-orange font-medium uppercase transition duration-150 ease-in-out cursor-pointer rounded-[22.5px] hover:text-orange hover:bg-white"
      >
        submit
      </button>
    </div>
  );
}
