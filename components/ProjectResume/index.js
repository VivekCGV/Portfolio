import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const bulletsLocal = Array.isArray(bullets)
    ? bullets
    : String(bullets)
        .split(/\n|,/)
        .map((bullet) => bullet.trim())
        .filter(Boolean);

  return (
    <div className="mt-6 w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-950/85 p-5 tablet:p-6 shadow-sm backdrop-blur-sm flex mob:flex-col desktop:flex-row justify-between gap-4">
      <div className="text-lg w-full desktop:w-2/5">
        <h2 className="font-semibold tracking-tight">{dates}</h2>
        <h3 className="text-sm uppercase tracking-[0.2em] opacity-60 mt-2">
          {type}
        </h3>
      </div>
      <div className="w-full desktop:w-3/5">
        <h2 className="text-lg tablet:text-xl font-semibold tracking-tight">
          {position}
        </h2>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="mt-3 space-y-2 list-disc pl-5">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm tablet:text-base leading-7 opacity-80">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
