import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Benefits from "./components/Benefits";
import Comparison from "./components/Comparison";
import Ingredients from "./components/Ingredients";
import About from "./components/About";
import Reviews from "./components/Reviews";
import OrderSection from "./components/OrderSection";
import Guarantee from "./components/Guarantee";
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
        <Ingredients />
        <About />
        <Reviews />
        <OrderSection />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
