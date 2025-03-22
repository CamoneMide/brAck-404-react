import React from "react";

const Button = ({ text, lite, icon, imgSrc }) => {
  return (
    <>
      <button
        className={`flex items-center gap-[16px] border-[1px] border-[#006979] px-4 py-2 text-[18px] font-[600] rounded-[8px] leading-[100%] ${
          lite ? "text-[#006979] bg-[#FFF]" : "text-[#FFF] bg-[#006979]"
        }`}
      >
        {icon ? (
          <img src={imgSrc} alt="icon" className="w-[17px]" />
        ) : undefined}
        {text}
      </button>
    </>
  );
};

export default Button;
