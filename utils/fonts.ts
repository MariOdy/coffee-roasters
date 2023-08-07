import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const fraunces = localFont({
  src: "./Fraunces.ttf",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
