import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoDark from "@/public/logo.svg";
import LogoLight from "@/public/logo-light.svg";

interface LogoProps {
  theme?: "dark" | "light";
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
  const logoImg = theme === "light" ? LogoDark : LogoLight;
  return (
    <Link href="#" aria-label="To Homepage">
      <Image src={logoImg} alt="logo" />
    </Link>
  );
};

export default Logo;
