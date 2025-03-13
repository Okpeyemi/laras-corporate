import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Composant from "@/components/sections/Composant";
import NosProduit from "@/components/sections/NosProduit";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Composant />
      <NosProduit />
      <Footer />
    </div>
  );
}