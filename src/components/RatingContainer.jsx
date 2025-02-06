import iconStar from "../assets/images/icon-star.svg";

export function RatingContainer({
  checked,
  onHandleClick,
  isActive,
  SetIsActive,
}) {
  const rating = [1, 2, 3, 4, 5];

  function handleSubmit(rateNum) {
    if (!rateNum) return;
    SetIsActive(!isActive);
  }

  return (
    <div className="container">
      <figure className="logo">
        <img src={iconStar} alt="logo" />
      </figure>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        {rating.map((rateNum) => (
          <span
            key={rateNum}
            onClick={() => onHandleClick(rateNum)}
            className={rateNum === checked ? "checked" : ""}
          >
            {rateNum}
          </span>
        ))}
      </div>
      <button onClick={() => handleSubmit(checked)}>submit</button>
    </div>
  );
}
