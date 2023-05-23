import Collection from "@/components/Collection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-40">
      <Hero />
      <Collection />
    </main>
  );
}
