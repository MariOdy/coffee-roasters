import React from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav_bar}>
      <Link href="/#" aria-label="To Homepage">
        Home
      </Link>
      <Link href="/about" aria-label="To About page">
        About Us
      </Link>
      <Link href="/subscribe" aria-label="To Create your plan page">
        Create your plan
      </Link>
    </nav>
  );
};

export default NavBar;
