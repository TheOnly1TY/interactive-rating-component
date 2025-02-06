import { useState } from "react";
import { RatingResultContainer } from "./RatingResultContainer";
import { RatingContainer } from "./RatingContainer";
export default function App() {
  const [checked, setChecked] = useState(null);
  const [isActive, SetIsActive] = useState(false);
  function handleClick(rateNum) {
    setChecked(rateNum);
  }
  return (
    <>
      {!isActive ? (
        <RatingContainer
          checked={checked}
          onHandleClick={handleClick}
          isActive={isActive}
          SetIsActive={SetIsActive}
        />
      ) : (
        <RatingResultContainer checked={checked} />
      )}
    </>
  );
}
