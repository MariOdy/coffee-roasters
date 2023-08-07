import React from "react";
import { fraunces } from "@/utils/fonts";
import styles from "./styles.module.scss";
import { advantages } from "./advantages";
import Image from "next/image";

const WhyUs: React.FC = () => {
  return (
    <div className={styles.why_us}>
      <div className={styles.why_info}>
        <h3 className={fraunces.className}>Why choose us?</h3>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className={styles.advantages_wrapper}>
        {advantages.map((adv) => (
          <div key={adv.id}>
            <Image src={adv.img} alt={adv.name} />
            <div className={fraunces.className}>{adv.name}</div>
            <p>{adv.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
