import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Collection from "@/components/Collection";

export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <Hero />
      <Collection />
      <WhyUs />
      <HowItWorks />
    </main>
  );
}
