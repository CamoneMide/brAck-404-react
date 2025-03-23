import React from "react";
import Container from "./Container";
import heroImg from "../assets/images/image 17.png";
import Button from "./Button";
import leftArrow from "../assets/icons/Vector.png";
import house from "../assets/icons/Group 163.png";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col pt-21 lg:pt-[163px] w-full">
        <Container>
          <section className="flex flex-col lg:flex-row justify-between w-full gap-[40px]">
            <div className="flex w-full lg:w-[499.9px] h-[333px]">
              <img
                src={heroImg}
                alt={"HeroImg"}
                className="flex w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[40px] lg:pt-[70px] max-w-[533px] lg:max-h-[240px]">
              <div className="flex flex-col gap-[16px] tracking-[7%]">
                <h6 className="text-[26px] font-[700] leading-[100%] text-[#006979]">
                  Uh oh...
                </h6>
                <h4 className="text-[42px] font-[700] leading-[100%] text-[#000000]">
                  Something went wrong
                </h4>
                <p className="text-[18px] font-[500] leading-[24px] text-[#6B7280]">
                  Looks like this page doesn’t exist or was removed. Don’t
                  worry, we can help you find your way back.
                </p>
              </div>
              <div className="flex flex-row gap-[16px]">
                <Button
                  text={"Take me Back"}
                  lite={true}
                  icon={true}
                  imgSrc={leftArrow}
                />
                <Button
                  text={"Go Home"}
                  lite={false}
                  icon={true}
                  imgSrc={house}
                />
              </div>
            </div>
          </section>
        </Container>
        <Container
          className={
            "mt-[56px] lg:mt-[76.5px] border-t-[#6B7280E5] border-t-[0.5px] flex flex-col"
          }
        >
          <h4 className="text-[24px] font-[700] leading-[100%] text-[#000000E5] tracking-[7%] pt-[40px]">
            You might find these helpful:
          </h4>
          <div className="flex justify-between items-center w-full lg:w-[719px] mx-auto pt-[44px] lg:pt-[64px] gap-[10px]">
            <button
              className={
                "border-[1px] border-[#006979] text-[14px] lg:text-[18px] font-[600] rounded-[8px] tracking-[0%] leading-[100%] text-[#006979] bg-[#FFF] w-full lg:w-[181px] h-[38px] flex justify-center items-center"
              }
            >
              Refresh the Page
            </button>
            <button
              className={
                "border-[1px] border-[#006979] text-[14px] lg:text-[18px] font-[600] rounded-[8px] tracking-[0%] leading-[100%] text-[#006979] bg-[#FFF] w-full lg:w-[181px] h-[38px] flex justify-center items-center"
              }
            >
              Contact Support
            </button>
            <button
              className={
                "border-[1px] border-[#006979] text-[14px] lg:text-[18px] font-[600] rounded-[8px] tracking-[0%] leading-[100%] text-[#006979] bg-[#FFF] w-full lg:w-[181px] h-[38px] flex justify-center items-center"
              }
            >
              FAQ
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
