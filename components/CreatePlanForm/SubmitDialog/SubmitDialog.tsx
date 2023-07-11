"use client";
import React from "react";
import { HiXMark } from "react-icons/hi2";
import { Blank } from "../OrderSummary";
import { fraunces } from "@/app/layout";
import coffeeOptions from "../coffeeOptions";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import styles from "./styles.module.scss";
import SuccessDialog from "./SuccessDialog";

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface SubmitDialogProps extends AlertDialog.AlertDialogProps {
  submitInfo: string[];
}

const SubmitDialog: React.FC<SubmitDialogProps> = ({
  submitInfo,
  ...props
}) => {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleCheckout = async () => {
    await sleep(1000);

    setIsSuccess(true);
  };

  const [preference, bean, quantity, grind, delivery] = coffeeOptions.map(
    (opt, i) => opt.options.find((option) => submitInfo[i] === option.id)?.label
  );
  const total = coffeeOptions.reduce((acc, curr, i) => {
    const price = curr.options.find(
      (option) => submitInfo[i] === option.id
    )?.price;
    return acc + (price || 0);
  }, 0);
  const handleChange = () => {
    setIsSuccess(false);
  };

  if (isSuccess) {
    return <SuccessDialog onOpenChange={handleChange} />;
  }

  return (
    <AlertDialog.Root {...props}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />
        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title
            className={`${styles.title} ${fraunces.className}`}
          >
            Order Summary
            <AlertDialog.Cancel className={styles.cancel}>
              <button type="button">
                <HiXMark />
              </button>
            </AlertDialog.Cancel>
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.description}>
            <div className={fraunces.className}>
              “I drink my coffee as <Blank>{preference}</Blank>, with a{" "}
              <Blank>{bean}</Blank> type of bean. <Blank>{quantity}</Blank>{" "}
              ground ala <Blank>{grind}</Blank>, sent to me{" "}
              <Blank>{delivery}</Blank>
              .”
            </div>
            <p>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
            <AlertDialog.Action
              className={`${styles.total} ${fraunces.className}`}
            >
              <div>${total}.00/ mo</div>
              <button type="button" onClick={handleCheckout}>
                Checkout
              </button>
            </AlertDialog.Action>
          </AlertDialog.Description>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default SubmitDialog;
