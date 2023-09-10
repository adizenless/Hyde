import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Organize from "./components/Organize";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Prototyping from "./components/Prototyping";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Organize />
        <Prototyping />
        <Partners />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
