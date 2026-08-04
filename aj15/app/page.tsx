import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import EventInfo from "@/components/EventInfo";
import Schedule from "@/components/Schedule";
import DressCode from "@/components/DressCode";
import GiftList from "@/components/GiftList";
import RSVPSection from "@/components/RSVPSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Countdown />
        <Story />
        <EventInfo />
        <Schedule />
        <DressCode />
        <GiftList />
        <RSVPSection />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
