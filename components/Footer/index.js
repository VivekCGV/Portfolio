import React from "react";
import Socials from "../Socials";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Footer = ({}) => {
  const emailLink = data.contactEmail
    ? `mailto:${data.contactEmail}`
    : "mailto:vivekchinnaswamy6@gmail.com";

  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Contact.</h1>
          <div className="mt-10">
            <h1 className="max-w-4xl text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl font-semibold tracking-tight leading-none">
              Let&apos;s build something that can ship, scale, and impress.
            </h1>
            <p className="mt-5 max-w-2xl text-base tablet:text-lg opacity-70 leading-7">
              Available for backend, product, and full-stack roles where performance,
              reliability, and good taste in engineering matter.
            </p>
            <Button type="primary" onClick={() => window.open(emailLink)}>
              Schedule a call
            </Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm mt-2 laptop:mt-10 p-2 laptop:p-0 opacity-60">
        Crafted by Vivek C.
      </h1>
    </>
  );
};

export default Footer;
