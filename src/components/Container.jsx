import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <>
      <div
        className={twMerge(
          "mx-auto max-w-[1140px] w-full px-4 lg:px-0",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
