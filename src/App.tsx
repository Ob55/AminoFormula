import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
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
    <div className="relative min-h-screen text-navy-soft">
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
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
