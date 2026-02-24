import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Trust from "@/components/sections/Trust";
import GoogleReviews from "@/components/sections/GoogleReviews";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import MobileSocialBar from "@/components/sections/MobileSocialBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <WhyChooseUs />
        <Trust />
        <GoogleReviews />
        <CTA />
      </main>
      <Footer />
      <MobileSocialBar />
    </>
  );
}
