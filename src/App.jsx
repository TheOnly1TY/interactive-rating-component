import { useReducer } from "react";
import thankYouIcon from "./assets/images/illustration-thank-you.svg";
import iconStar from "./assets/images/icon-star.svg";

const initialState = { isActive: false, checked: null };
function reducer(state, action) {
  switch (action.type) {
    case "isActive":
      return { ...state, isActive: !state.isActive };
    case "getRatedValue":
      return { ...state, checked: action.payload };
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isActive, checked } = state;

  function handleClick(rateNum) {
    dispatch({ type: "getRatedValue", payload: rateNum });
  }
  function handleSubmit(rateNum) {
    if (!rateNum) return;
    dispatch({ type: "isActive" });
  }
  return (
    <div>
      {!isActive ? (
        <RatingContainer
          checked={checked}
          onHandleClick={handleClick}
          handleSubmit={handleSubmit}
        />
      ) : (
        <RatingResultContainer checked={checked} />
      )}
    </div>
  );
}

function RatingContainer({ checked, onHandleClick, handleSubmit }) {
  const rating = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <figure className="grid place-content-center w-10 h-10 bg-dark-blue rounded-full md:w-12 md:h-12">
        <img src={iconStar} alt="logo" />
      </figure>
      <h1 className="text-2xl text-white md:text-[1.75rem]">How did we do?</h1>
      <p className="text-[0.9375rem] text-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between items-center">
        {rating.map((rateNum, id) => (
          <span
            key={id}
            onClick={() => onHandleClick(rateNum)}
            className={`grid place-content-center w-[51px] h-[51px] text-base text-medium-grey bg-dark-blue tracking-tighter font-bold transition duration-150 ease-in-out rounded-full cursor-pointer hover:text-white hover:bg-orange ${
              rateNum === checked ? "text-white bg-medium-grey" : ""
            }`}
          >
            {rateNum}
          </span>
        ))}
      </div>
      <button
        onClick={() => handleSubmit(checked)}
        className="w-full h-11 text-[0.9375rem] text-white text-center bg-orange font-medium uppercase transition duration-150 ease-in-out cursor-pointer rounded-[22.5px] hover:text-orange hover:bg-white"
      >
        submit
      </button>
    </div>
  );
}

function RatingResultContainer({ checked }) {
  return (
    <div className="container flex flex-col justify-center items-center text-center">
      <img src={thankYouIcon} alt="Thank You" />
      <div className="grid place-content-center w-48 h-8 mt-6 bg-dark-blue rounded-[22px]">
        <span className="text-orange">{`You selected ${checked} out of 5`}</span>
      </div>
      <h1 className="text-2xl text-white">Thank you!</h1>
      <p className="text-[0.9375rem] text-light-grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
