import Collection from "@/components/Collection";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <Hero />
      <Collection />
      <WhyUs />
    </main>
  );
}
