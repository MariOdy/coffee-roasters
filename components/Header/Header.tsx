import React from "react";

import NavBar from "../NavBar";

import styles from "./styles.module.scss";
import Logo from "../Logo";

const Header: React.FC = () => {
  return (
    <div className={styles.header_wrapper}>
      <Logo theme="light" />
      <NavBar />
    </div>
  );
};

export default Header;
