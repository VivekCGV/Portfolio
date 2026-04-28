import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-5 mob:p-6 rounded-2xl border transition-all ease-out duration-300 shadow-sm ${
        mounted && theme === "dark"
          ? "border-white/10 bg-zinc-950/85 hover:bg-zinc-900/90"
          : "border-black/10 bg-white/70 hover:bg-white"
      } hover:-translate-y-1 hover:shadow-xl link backdrop-blur-sm`}
    >
      <h1 className="text-2xl tablet:text-3xl font-semibold tracking-tight">
        {name ? name : "Heading"}
      </h1>
      <p className="mt-4 opacity-75 text-base tablet:text-lg leading-7 max-w-xl">
        {description
          ? description
          : "A concise summary of the service, focused on outcomes and production-grade execution."}
      </p>
    </div>
  );
};

export default ServiceCard;
