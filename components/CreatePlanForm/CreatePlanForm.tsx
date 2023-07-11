"use client";
import React, { useState } from "react";
import { fraunces } from "@/app/layout";
import OrderSummary from "./OrderSummary";
import coffeeOptions from "./coffeeOptions";
import { FaChevronDown } from "react-icons/fa";
import SubmitButton from "../buttons/SubmitButton";
import * as Accordion from "@radix-ui/react-accordion";
import * as RadioGroup from "@radix-ui/react-radio-group";

import styles from "./styles.module.scss";
import SubmitDialog from "./SubmitDialog";

const CreatePlanForm: React.FC = () => {
  const [active, setActive] = useState(coffeeOptions[0].id);
  const [state, setState] = useState<string[]>(() =>
    coffeeOptions.map(() => "")
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.every((opt) => opt !== "")) setSubmitted(true);
  };

  return (
    <form className={styles.form_wrapper} onSubmit={handleSubmit}>
      <SubmitDialog
        submitInfo={state}
        open={submitted}
        onOpenChange={setSubmitted}
      />
      <RadioGroup.Root
        className={styles.opt_labels}
        value={active}
        onValueChange={setActive}
      >
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
      <div className="gap-12">
        <Accordion.Root
          className={styles.options}
          value={active}
          onValueChange={setActive}
          type="single"
        >
          {coffeeOptions.map((opt, i) => (
            <Accordion.Item key={opt.id} value={opt.id}>
              <Accordion.Trigger className={fraunces.className}>
                {opt.title} <FaChevronDown />
              </Accordion.Trigger>
              <Accordion.Content className={styles.option_cards}>
                <RadioGroup.Root
                  required
                  value={state[i]}
                  onValueChange={(value) =>
                    setState((prev) => {
                      const next = [...prev];
                      next[i] = value;
                      return next;
                    })
                  }
                >
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
        <OrderSummary selectedOptions={state} />
        <SubmitButton disabled={state.some((val) => !val)} />
      </div>
    </form>
  );
};

export default CreatePlanForm;
