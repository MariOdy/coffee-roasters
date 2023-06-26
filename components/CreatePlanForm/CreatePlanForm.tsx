"use client";
import React from "react";
import { fraunces } from "@/app/layout";
import coffeeOptions from "./coffeeOptions";
import { FaChevronDown } from "react-icons/fa";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Accordion from "@radix-ui/react-accordion";

import styles from "./styles.module.scss";

const CreatePlanForm: React.FC = () => {
  return (
    <form className={styles.form_wrapper}>
      <RadioGroup.Root className={styles.opt_labels} defaultValue="01">
        {coffeeOptions.map((opt) => (
          <RadioGroup.Item
            className={fraunces.className}
            key={opt.id}
            value={opt.id}
          >
            <span>{opt.id}</span>
            {opt.label}
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>

      <Accordion.Root type="multiple" className={styles.options}>
        {coffeeOptions.map((opt) => (
          <Accordion.Item key={opt.id} value={opt.id}>
            <Accordion.Trigger className={fraunces.className}>
              {opt.title} <FaChevronDown />
            </Accordion.Trigger>
            <Accordion.Content className={styles.option_cards}>
              <RadioGroup.Root>
                {opt.options.map((option) => (
                  <RadioGroup.Item
                    key={option.id}
                    value={option.id}
                    className={styles.card_wrapper}
                  >
                    <h6 className={fraunces.className}>{option.label}</h6>
                    <p>{option.description}</p>
                  </RadioGroup.Item>
                ))}
              </RadioGroup.Root>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </form>
  );
};

export default CreatePlanForm;
