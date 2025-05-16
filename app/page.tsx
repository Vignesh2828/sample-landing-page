import { AboutDpsSection } from "@/components/layout/sections/benefits";
import { WhatsLatestSection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { StatsSection } from "@/components/layout/sections/sponsors";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import ScrollToTopButton from "@/components/layout/sections/ScrollToTopButton";
import WhatsAppFloatingButton from "@/components/layout/sections/WhatsappFloatingButton";
import  { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "DPS Tuition Centre - Personalized One-to-One Tuition for Academic Excellence",
  description:
    "Join DPS Tuition Centre for expert personalized tuition designed to help you excel academically. Book a free class today!",
  openGraph: {
    type: "website",
    url: "https://dpstuition.com",
    title: "DPS Tuition Centre - Personalized One-to-One Tuition",
    description:
      "Experience customized tuition at DPS Tuition Centre focused on your individual learning needs and academic success.",
  },
  instagram: {
    handle: "@dpstuition",
    url: "https://instagram.com/dpstuition?igshid=YmMyMTA2M2Y",
  },
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutDpsSection />
      <FeaturesSection />
      <ServicesSection />
      <WhatsLatestSection />
      <TestimonialSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />

      <Toaster position="top-right" />
      <WhatsAppFloatingButton />
      <ScrollToTopButton />
    </>
  );
}
