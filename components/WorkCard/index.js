import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-2xl p-3 laptop:p-4 first:ml-0 link border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-950/85 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-300 ease-out"
      onClick={onClick}
    >
      <div
        className="relative rounded-xl overflow-hidden transition-all ease-out duration-300 h-72 mob:h-80"
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-105 transition-all ease-out duration-500"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-2xl tablet:text-3xl font-semibold tracking-tight">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-sm tablet:text-base opacity-70 leading-6">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
