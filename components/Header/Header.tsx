import React from "react";
import Logo from "../Logo";

import styles from "./styles.module.scss";
import DropdownMenuBar from "../DropdownMenuBar";
import Link from "next/link";

export const navigation = [
  {
    id: 1,
    name: "Home",
    pathTo: "/#",
    label: "To Homepage",
  },
  {
    id: 2,
    name: "About Us",
    pathTo: "/about",
    label: "To About page",
  },
  {
    id: 3,
    name: "Create your plan",
    pathTo: "/subscribe",
    label: "To Create your plan page",
  },
];

const Header: React.FC = () => {
  return (
    <div className={styles.header_wrapper}>
      <Logo theme="light" />
      <nav className={styles.nav_bar}>
        {navigation.map(({ id, name, pathTo, label }) => (
          <Link key={id} href={pathTo} aria-label={label}>
            {name}
          </Link>
        ))}
      </nav>
      <DropdownMenuBar links={navigation} />
    </div>
  );
};

export default Header;
