import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Why from '../components/Why';
import HowItWorks from '../components/HowItWorks';
import Specialties from '../components/Specialties';
import Voices from '../components/Voices';
import Safety from '../components/Safety';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Marquee />
      <Why />
      <HowItWorks />
      <Specialties />
      <Voices />
      <Safety />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
