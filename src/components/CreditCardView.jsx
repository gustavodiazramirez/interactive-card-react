import React from "react";

const CreditCardView = ({ values }) => {
  return (
    <>
      <div className="bg-card-front lg:mt-0 mt-36 mr-[50px] bg-contain bg-center bg-no-repeat lg:w-[400px] lg:h-[200px] lg:mr-[550px] lg:-mb-48 w-[320px] h-[160px]">
        <svg
          width="84"
          className="ml-10 mt-4"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="20" cy="20" rx="20" ry="20" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff"
          />
        </svg>
        <div className="lg:ml-8 lg:mt-14 ml-6 mt-6">
          <p className="text-white lg:text-2xl text-xl tracking-widest">
            {values.cardNumber ? values.cardNumber : "0000 0000 0000 0000"}
          </p>
          <div className="flex flex-row mt-2">
            <p className="text-white text-sm tracking-widest">
              {values.cardholderName ? values.cardholderName : "JANE APPLESEED"}
            </p>
          </div>
          <div className="w-[50px] h-[20px] -mt-6 ml-56">
            <p className="text-white">
              {values.expMonth ? values.expMonth : "00"}/
              {values.expYear ? values.expYear : "00"}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-card-back -mt-56 bg-contain bg-center bg-no-repeat lg:w-[400px] lg:h-[200px] lg:mr-[480px] lg:mt-56 lg:-mb-96 w-[300px] h-[150px]">
        <p className="text-white lg:ml-[310px] lg:mt-[85px] ml-[230px] mt-[60px]">{values.cvc ? values.cvc : "000"}</p>
      </div>
    </>
  );
};

export default CreditCardView;
