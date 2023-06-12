import Image from "next/image";
import Barista from "@/public/images/barista.png";
import PageBanner from "@/components/PageBanner";

import styles from "./styles.module.scss";
import { fraunces } from "../layout";
import Quality from "@/components/Quality";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <PageBanner
        pageTitle="About us"
        pageDescription="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
      />
      <div className={styles.commitment}>
        <Image src={Barista} alt="Barista making coffee" />
        <div>
          <h3 className={fraunces.className}>Our commitment</h3>
          <p>
            We`re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world`s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
      <Quality />
    </div>
  );
};
export default AboutPage;
