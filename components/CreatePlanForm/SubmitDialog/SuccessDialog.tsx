"use client";
import React, { useEffect, useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

import styles from "./styles.module.scss";

interface SuccessDialogProps extends AlertDialog.AlertDialogProps {}

const SuccessDialog: React.FC<SuccessDialogProps> = ({ ...props }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleDoneClick = () => {
    setIsExiting(true);
  };

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isExiting]);

  return (
    <AlertDialog.Root defaultOpen>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className={`${styles.overlay} ${isExiting ? styles.exiting : ""}`}
        />
        <AlertDialog.Content
          className={`${styles.content} ${isExiting ? styles.exiting : ""}`}
        >
          <AlertDialog.Description className={styles.success_description}>
            <p>Thank you for choosing CoffeeRoasters!</p>
            <AlertDialog.Action>
              <button
                type="button"
                onClick={handleDoneClick}
                aria-label="Go to main page"
                className={styles.done_btn}
              >
                Done
              </button>
            </AlertDialog.Action>
          </AlertDialog.Description>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default SuccessDialog;
