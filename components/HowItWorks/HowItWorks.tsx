import React from "react";
import stages from "./stages";
import { fraunces, montserrat } from "@/app/layout";

import styles from "./styles.module.scss";
import CreatePlanButton from "../buttons/CreatePlanButton";

interface HowitworksProps {
  theme: "light" | "dark";
}

const HowItWorks: React.FC<HowitworksProps> = ({ theme }) => {
  return (
    <div
      className={`${fraunces.className} ${styles.howitworks_wrapper}`}
      data-theme={theme}
    >
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
      <CreatePlanButton />
    </div>
  );
};

export default HowItWorks;
