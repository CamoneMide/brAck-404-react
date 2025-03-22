import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <>
      <Container className="pt-[96.5px] mb-[48px]">
        <section className="flex flex-col lg:flex-row justify-between items-center w-full gap-[16px]">
          <div className="flex flex-row gap-[8px] text-[12px] text-[#6B7280] tracking-[0%] font-[500] leading-[100%] justify-center h-[15px]">
            <span className="text-[10px] w-[10px] h-[10px]"> &copy; </span>
            <p>2024 BrAck, Inc.</p>
            <span className="text-[3px] w-[3px] h-[3px]">
              <i className="fa-solid fa-circle"></i>
            </span>
            <p>Privacy</p>
            <span className="text-[3px] w-[3px] h-[3px]">
              <i className="fa-solid fa-circle"></i>
            </span>
            <p>Terms</p>
            <span className="text-[3px] w-[3px] h-[3px]">
              <i className="fa-solid fa-circle"></i>
            </span>
            <p>Roadmap</p>
          </div>
          <div className="flex flex-row gap-[48px] h-[21.87px] text-[#6B7280] text-[23px] justify-between items-center">
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i className="fa-brands fa-youtube"></i>
            </span>
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
            <span>
              <i className="fa-brands fa-x-twitter"></i>
            </span>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Footer;
