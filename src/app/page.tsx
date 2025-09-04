import AbstractBackground from "@/components/AbstractBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WalletsSection from "@/components/WalletsSection";
import Footer from "@/components/Footer";
import TwitterButton from '@/components/TwitterButton';

export default function Home() {
  return (
    <>
      <AbstractBackground />
      <Header />
      <main>
        <Hero />
        <WalletsSection />
      </main>
      <Footer />
    </>
  );
}
