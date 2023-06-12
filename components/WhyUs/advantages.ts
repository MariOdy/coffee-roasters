import { StaticImageData } from "next/image";
import CoffeeBean from "@/public/svg/coffee-bean.svg";
import Gift from "@/public/svg/gift.svg";
import Car from "@/public/svg/car.svg";

export interface IAdvantage {
  id: string;
  img: StaticImageData;
  name: string;
  description: string;
}

export const advantages: IAdvantage[] = [
  {
    id: "1",
    img: CoffeeBean,
    name: "Best quality",
    description:
      "Discover an endless variety of the world`s best artisan coffee from each of our roasters.",
  },
  {
    id: "2",
    img: Gift,
    name: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    id: "3",
    img: Car,
    name: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];
