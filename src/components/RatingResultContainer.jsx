import thankYouIcon from "../assets/images/illustration-thank-you.svg";

export function RatingResultContainer({ checked }) {
  return (
    <div className="container resultContainer">
      <img src={thankYouIcon} alt="Thank You" />
      <div className="resultTextContainer">
        <span>{`You selected ${checked} out of 5`}</span>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
