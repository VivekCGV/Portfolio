import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base px-4 py-2 m-1 laptop:m-2 rounded-full font-medium tracking-wide border border-transparent shadow-sm ${
          theme === "dark"
            ? "bg-white text-black hover:bg-zinc-200"
            : "bg-black text-white hover:bg-zinc-900"
        } transition-all duration-300 ease-out first:ml-0 hover:scale-[1.02] active:scale-100 link ${
          data.showCursor && "cursor-none"
        }  ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base px-4 py-2 m-1 laptop:m-2 rounded-full flex items-center font-medium tracking-wide transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-white/10 text-white"
          : "hover:bg-black/5"
      } hover:scale-[1.02] active:scale-100 tablet:first:ml-0 ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
