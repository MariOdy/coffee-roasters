import React from "react";
import Image from "next/image";
import AboutBanner from "@/public/about-banner.png";
import CreatePlanBanner from "@/public/create-plan-banner.png";

import styles from "./styles.module.scss";
import { fraunces } from "@/app/layout";

interface PageBannerProps {
  pageTitle: "About us" | "Create plan";
  pageDescription?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  pageDescription,
}) => {
  const bannerImg = pageTitle === "About us" ? AboutBanner : CreatePlanBanner;
  return (
    <div className={styles.pagebanner_wrapper}>
      <Image src={bannerImg} alt="Coffee with kettle on table" fill priority />
      <div>
        <h1 className={fraunces.className}>{pageTitle}</h1>
        <p>{pageDescription}</p>
      </div>
    </div>
  );
};

export default PageBanner;
