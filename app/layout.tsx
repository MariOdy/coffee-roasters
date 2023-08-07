import Header from "@/components/Header";

import "./globals.css";
import "@/styles/colors.css";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Coffee Roasters",
  description: "Create your coffee plan with Coffee Roasters",
};
export const fraunces = localFont({
  src: "./Fraunces.ttf",
  display: "swap",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="content">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
