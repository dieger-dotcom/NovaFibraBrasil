import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Plans } from "./components/Plans";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Plans />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
