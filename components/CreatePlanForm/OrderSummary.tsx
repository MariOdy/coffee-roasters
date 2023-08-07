import React from "react";
import coffeeOptions from "./coffeeOptions";
import { fraunces } from "@/utils/fonts";

import styles from "./styles.module.scss";

interface BlankProps {
  children: React.ReactNode;
}

export const Blank: React.FC<BlankProps> = ({ children }) => {
  if (!children) return <span className="blank">______</span>;
  return <span className="text-[#0E8784]">{children}</span>;
};

interface OrderSummaryProps {
  selectedOptions: string[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ selectedOptions }) => {
  const [preference, bean, quantity, grind, delivery] = coffeeOptions.map(
    (opt, i) =>
      opt.options.find((option) => selectedOptions[i] === option.id)?.label
  );

  return (
    <div className={styles.summary_wrapper}>
      <div>Order Summary</div>
      <p className={fraunces.className}>
        “I drink my coffee as <Blank>{preference}</Blank>, with a{" "}
        <Blank>{bean}</Blank> type of bean. <Blank>{quantity}</Blank> ground ala{" "}
        <Blank>{grind}</Blank>, sent to me <Blank>{delivery}</Blank>
        .”
      </p>
    </div>
  );
};

export default OrderSummary;
