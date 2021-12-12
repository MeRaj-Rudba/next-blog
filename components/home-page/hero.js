import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/rudba.jpeg"
          alt="An image showing Rudba"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Rudba</h1>
      <p>
        I blog about web development - especially frontend framework like
        ReactJS or VueJS.
      </p>
    </section>
  );
};

export default Hero;
