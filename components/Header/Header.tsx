import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import styles from "./styles.module.scss";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className={styles.header_wrapper}>
      <Link href="#" aria-label="To Homepage">
        <Image src={Logo} alt="logo" />
      </Link>
      <nav className={styles.nav_bar}>
        <Link href="/#">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/createPlan">Create your plan</Link>
      </nav>
    </div>
  );
};

export default Header;
