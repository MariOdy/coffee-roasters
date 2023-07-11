import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";

import Logo from "../Logo";
import NavBar from "../NavBar";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <Logo theme="dark" />
      <NavBar />
      <div className="flex items-center gap-4">
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          aria-label="Go to Facebook"
        >
          <AiFillFacebook />
        </Link>
        <Link
          href="https://twitter.com/"
          target="_blank"
          aria-label="Go to Twitter"
        >
          <AiOutlineTwitter />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          aria-label="Go to Instagram"
        >
          <AiOutlineInstagram />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
