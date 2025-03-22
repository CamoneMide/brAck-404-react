import React from "react";
import Container from "./Container";
import Button from "./Button";

const Nav = () => {
  const navLinks = ["Home", "About Us", "Solution", "Contact"];
  return (
    <>
      <nav className="flex justify-center items-center pt-[48px] h-[38px]">
        <Container className={"flex justify-between items-center h-full"}>
          <div className="text-[24px] font-[700] leading-[100%] tracking-[7%] text-[#006979]">
            BrAck
          </div>
          <div className="hidden lg:flex gap-[48px]">
            {navLinks.map((link) => {
              return (
                <a
                  href=""
                  key={link}
                  className="text-[18px] font-[500] leading-[100%] tracking-[0%] text-[#6B7280CC]"
                >
                  {link}
                </a>
              );
            })}
          </div>
          <div className="flex gap-[10px]">
            <Button text={"Sign in"} lite={true} icon={false} />
            <Button text={"Sign up"} lite={false} icon={false} />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Nav;
