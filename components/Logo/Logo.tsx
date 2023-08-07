import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoDark from "@/public/svg/logo.svg";
import LogoLight from "@/public/svg/logo-light.svg";

import styles from "./styles.module.scss";

interface LogoProps {
  theme?: "dark" | "light";
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
  const logoImg = theme === "light" ? LogoDark : LogoLight;
  return (
    <Link href="/#" aria-label="To Homepage" className={styles.logo_wrapper}>
      <Image src={logoImg} alt="logo" />
    </Link>
  );
};

export default Logo;
