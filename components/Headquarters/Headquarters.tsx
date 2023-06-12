import React from "react";

import styles from "./styles.module.scss";
import { fraunces } from "@/app/layout";
import offices from "./offices";
import Image from "next/image";

const Headquarters: React.FC = () => {
  return (
    <div className={styles.headquarters_wrapper}>
      <h5 className={fraunces.className}>Our headquarters</h5>
      <div className={styles.offices_wrapper}>
        {offices.map(({ id, img, country, address, city, state, phone }) => (
          <div key={id} className={styles.office}>
            <Image src={img} alt={country} />
            <h4 className={fraunces.className}>{country}</h4>
            <div>
              <p>{address}</p>
              <p>{city}</p>
              <p>{state}</p>
              <p>{phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headquarters;
