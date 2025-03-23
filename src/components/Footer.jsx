import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <>
      <Container className="pt-[56px] lg:pt-[96.5px] mb-[20px]">
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
          <div className="flex flex-row gap-[48px] h-[21.87px] text-[#6B7280] text-[22px] justify-between items-center">
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
      <Container className="flex flex-col items-center justify-between md:flex-row text-[12px] lg:text-[14px] font-[600] text-[#6F7B6ED6] pb-4 border-t-[0.5px] border-t-[#6B7280E5] pt-4 ">
        <p>Copyright &copy; 2025, BrAck~React.</p>
        <p className="flex flex-row items-center flex-nowrap">
          <strong>Developed by</strong>
          <a href="#" target="_blank" className="ml-1">
            <i>Camone_Mide</i>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/mide-web-developer"
            target="_blank"
            className="text-[14px] lg:text-[16px] text-[#006979] px-[4px]"
          >
            <i className="fa-brands fa-linkedin-in"></i>
            {/* <i className="bx bxl-linkedin"></i> */}
          </a>
        </p>
      </Container>
    </>
  );
};

export default Footer;
