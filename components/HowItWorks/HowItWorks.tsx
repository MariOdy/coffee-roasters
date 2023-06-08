import React from "react";
import stages from "./stages";

import styles from "./styles.module.scss";
import { fraunces, montserrat } from "@/app/layout";

const HowItWorks: React.FC = () => {
  return (
    <div className={`${fraunces.className} ${styles.howitworks_wrapper}`}>
      <h5>How it works</h5>
      <div className={styles.separator}>
        <span />
        <div />
        <div />
        <div />
      </div>
      <ul className={styles.stages_wrapper}>
        {stages.map((stage) => (
          <li key={stage.id}>
            <h3>{stage.num}</h3>
            <div>{stage.title}</div>
            <p className={montserrat.className}>{stage.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorks;
