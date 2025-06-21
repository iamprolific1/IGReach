import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesGrid from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/Pricing";
import FAQSection from "../components/FAQ";
import AboutUs from "../components/AboutUs";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";


export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturesGrid />
            <HowItWorks />
            <PricingSection />
            <AboutUs />
            <FAQSection />
            <ContactSection />
            <FooterSection />
        </>
    );
}