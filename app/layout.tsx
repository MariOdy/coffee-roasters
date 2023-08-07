import Header from "@/components/Header";

import "./globals.css";
import "@/styles/colors.css";

import Footer from "@/components/Footer";
import { montserrat } from "@/utils/fonts";

export const metadata = {
  title: "Coffee Roasters",
  description: "Create your coffee plan with Coffee Roasters",
};

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
