import { useReducer } from "react";
import { RatingContainer } from "./RatingContainer";
import { RatingResultContainer } from "./RatingResultContainer";

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
