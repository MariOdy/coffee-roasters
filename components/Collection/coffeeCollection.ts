import { StaticImageData } from "next/image";

import Danche from "@/public/images/danche.png";
import Picollo from "@/public/images/picollo.png";
import Planalto from "@/public/images/planalto.png";
import GranEspresso from "@/public/images/gran-espresso.png";

export interface ICoffeeCollection {
  id: string;
  img: StaticImageData;
  name: string;
  description: string;
}

export const coffeeCollection: ICoffeeCollection[] = [
  {
    id: "1",
    img: GranEspresso,
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
  },
  {
    id: "2",
    img: Planalto,
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
  },
  {
    id: "3",
    img: Picollo,
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
  },
  {
    id: "4",
    img: Danche,
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
  },
];
