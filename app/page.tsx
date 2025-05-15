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

export const metadata = {
  title: "sample - Landing template",
  description: "Free Shadcn landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
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

        <WhatsAppFloatingButton />
       <ScrollToTopButton />
    </>
  );
}
