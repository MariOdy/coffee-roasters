import React from "react";
import Image from "next/image";
import HeroHome from "@/public/images/hero-home.png";

import styles from "./styles.module.scss";
import { fraunces } from "@/app/layout";
import CreatePlanButton from "../buttons/CreatePlanButton";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero_wrapper}>
      <Image src={HeroHome} alt="Coffee with kettle on table" fill priority />
      <div>
        <h1 className={fraunces.className}>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world&apos;s best coffees. Try our
          expertly curated artisan coffees from our best roasters delivered
          directly to your door, at your schedule.
        </p>
        <CreatePlanButton />
      </div>
    </div>
  );
};

export default Hero;
