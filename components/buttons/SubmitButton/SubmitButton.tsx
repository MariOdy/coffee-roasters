import React from "react";
import styles from "../styles.module.scss";
import { fraunces } from "@/app/layout";

interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SubmitButton: React.FC<SubmitButtonProps> = ({ ...props }) => (
  <button
    type="submit"
    className={`${fraunces.className} ${styles.createPlan_btn} self-end max-[750px]:self-center `}
    {...props}
  >
    Create me plan!
  </button>
);

export default SubmitButton;
