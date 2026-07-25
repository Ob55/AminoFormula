import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Comparison from "./components/Comparison";
import Testimonials from "./components/Testimonials";
import Ingredients from "./components/Ingredients";
import OrderSection from "./components/OrderSection";
import Guarantee from "./components/Guarantee";
import TrustBadges from "./components/TrustBadges";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Comparison />
        <Testimonials />
        <Ingredients />
        <OrderSection />
        <Guarantee />
        <TrustBadges />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
