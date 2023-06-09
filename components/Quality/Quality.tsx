import React from "react";
import Image from "next/image";
import QualityImg from "@/public/quality.png";

import styles from "./styles.module.scss";
import { fraunces } from "@/app/layout";

const Quality: React.FC = () => {
  return (
    <div className={styles.quality_wrapper}>
      <div>
        <h3 className={fraunces.className}>Uncompromising quality</h3>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
      <Image src={QualityImg} alt="Cup of cappuchino on table" />
    </div>
  );
};

export default Quality;
