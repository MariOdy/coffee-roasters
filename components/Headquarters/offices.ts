import { StaticImageData } from "next/image";
import UnitedKingdom from "@/public/svg/UnitedKingdom.svg";
import Canada from "@/public/svg/Canada.svg";
import Australia from "@/public/svg/Australia.svg";

interface Office {
  id: number;
  img: StaticImageData;
  country: string;
  address: string;
  city: string;
  state: string;
  phone: string;
}

const offices: Office[] = [
  {
    id: 1,
    img: UnitedKingdom,
    country: "United Kingdom",
    address: "68 Asfordby Rd",
    city: "Alcaston",
    state: "SY 1YA",
    phone: "+44 1241 918425",
  },
  {
    id: 2,
    img: Canada,
    country: "Canada",
    address: "1528 Eglinton Avenue",
    city: "Toronto",
    state: "Ontario M4P 1A6",
    phone: "+1 416 485 2997",
  },
  {
    id: 3,
    img: Australia,
    country: "Australia",
    address: "36 Swanston Street",
    city: "Kewell",
    state: "Victoria",
    phone: "+61 4 9928 3629",
  },
];

export default offices;
