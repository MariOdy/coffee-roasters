import React from "react";
import Link from "next/link";
import { fraunces } from "@/utils/fonts";

import styles from "../styles.module.scss";

const CreatePlanButton = () => {
  return (
    <Link
      href="/subscribe"
      className={`${fraunces.className} ${styles.createPlan_btn} `}
    >
      Create your plan
    </Link>
  );
};

export default CreatePlanButton;
