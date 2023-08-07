import React from "react";
import Image from "next/image";
import { fraunces } from "@/utils/fonts";
import OurCollection from "@/public/svg/our-collection.svg";
import { ICoffeeCollection, coffeeCollection } from "./coffeeCollection";

import styles from "./styles.module.scss";

const Collection: React.FC = () => {
  return (
    <div className={styles.collection_wrapper}>
      <Image src={OurCollection} alt="Our collection" />
      <div>
        {coffeeCollection.map((coffee: ICoffeeCollection) => (
          <div key={coffee.id} className={styles.coffee_card}>
            <Image src={coffee.img} alt={coffee.name} />
            <h5 className={fraunces.className}>{coffee.name}</h5>
            <p>{coffee.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
