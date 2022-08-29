import React from "react";
import PhoneImg from "./images/phone.svg";
import { useGlobalContext } from "./Context";

const Hero = () => {
  const { closeSubmenuHandler } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenuHandler}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the World</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s-use
            Stripe's software and APIs to accept payments,send payouts, and
            manage their bussinesses online
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={PhoneImg} alt="Phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
