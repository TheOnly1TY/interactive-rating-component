import thankYouIcon from "../assets/images/illustration-thank-you.svg";

export function RatingResultContainer({ checked }) {
  return (
    <div className="container flex flex-col justify-center items-center text-center rounded-[15px] p-[1.4375rem] md:p-9 md:rounded-[30px]">
      <img src={thankYouIcon} alt="Thank You" />
      <div className="grid place-content-center w-48 h-8 mt-6 bg-dark-blue rounded-[22px]">
        <span className="text-orange">{`You selected ${checked} out of 5`}</span>
      </div>
      <h1 className="text-2xl text-white my-[23px] md:text-[1.75rem]">
        Thank you!
      </h1>
      <p className="text-[0.9375rem] text-light-grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
