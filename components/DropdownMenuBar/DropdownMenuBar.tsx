"use client";

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { fraunces } from "@/utils/fonts";
import { BiMenu, BiX } from "react-icons/bi";
import * as Dialog from "@radix-ui/react-dialog";

import styles from "./styles.module.scss";

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
