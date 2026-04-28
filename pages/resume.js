import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mount, setMount] = useState(false);
  const { name, showResume, resume } = data;

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme === "dark"
                  ? "bg-zinc-950 text-white"
                  : "bg-gray-50 text-gray-900"
              } max-w-5xl p-6 mob:p-5 desktop:p-12 rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-xl`}
            >
              <h1 className="text-3xl tablet:text-4xl font-semibold tracking-tight">
                {name}
              </h1>
              <h2 className="text-lg tablet:text-2xl mt-5 font-medium">
                {resume.tagline}
              </h2>
              <h2 className="w-full tablet:w-4/5 text-base tablet:text-xl mt-5 opacity-70 leading-8">
                {resume.description}
              </h2>
              <div className="mt-4">
                <Socials />
              </div>
              <div className="mt-8">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Experience
                </h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-10">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Education
                </h1>
                <div className="mt-3 rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-zinc-950/70">
                  <h2 className="text-lg font-medium">
                    {resume.education.universityName}
                  </h2>
                  <h3 className="text-sm opacity-70 mt-1">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-70">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-2xl font-semibold tracking-tight">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between gap-6">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5 flex-1">
                      <h2 className="text-lg font-medium">Languages</h2>
                      <ul className="list-disc pl-5">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="py-2 opacity-80">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5 flex-1">
                      <h2 className="text-lg font-medium">Frameworks</h2>
                      <ul className="list-disc pl-5">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="py-2 opacity-80">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5 flex-1">
                      <h2 className="text-lg font-medium">Others</h2>
                      <ul className="list-disc pl-5">
                        {resume.others.map((other, index) => (
                          <li key={index} className="py-2 opacity-80">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {resume.certifications && (
                <div className="mt-10">
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Certifications
                  </h1>
                  <ul className="mt-4 space-y-3">
                    {resume.certifications.map((certification, index) => (
                      <li
                        key={index}
                        className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-950/70 p-4 text-sm leading-7 opacity-80"
                      >
                        {certification}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};


export default Resume;
