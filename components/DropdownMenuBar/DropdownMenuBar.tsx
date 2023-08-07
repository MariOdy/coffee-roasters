"use client";

import React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { BiMenu, BiX } from "react-icons/bi";

import styles from "./styles.module.scss";
import { fraunces } from "@/app/layout";
import Logo from "../Logo";

interface DropdownMenuBarProps {
  links: {
    id: number;
    name: string;
    pathTo: string;
    label: string;
  }[];
}

const DropdownMenuBar: React.FC<DropdownMenuBarProps> = ({ links }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.trigger}>
        <BiMenu />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className={styles.dialog_content}>
          <div className={styles.header_wrapper}>
            <Logo theme="light" />
            <Dialog.Close className={styles.trigger}>
              <BiX />
            </Dialog.Close>
          </div>

          {links.map(({ id, name, pathTo, label }) => (
            <Dialog.Close asChild key={id}>
              <Link
                href={pathTo}
                aria-label={label}
                className={fraunces.className}
              >
                {name}
              </Link>
            </Dialog.Close>
          ))}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DropdownMenuBar;
