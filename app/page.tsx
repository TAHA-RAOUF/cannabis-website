import { SiteNavbar } from "@/components/ui/site-navbar";
import HeroCannamed from "@/components/ui/HeroCannamed";
import StorySection from "@/components/ui/story-section";
import FarmSection from "@/components/ui/farm-section";
import StrainsSection from "@/components/ui/strains-section";
import ProcessSection from "@/components/ui/process-section";
import GallerySection from "@/components/ui/gallery-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <HeroCannamed />
      <StorySection />
      <FarmSection />
      <StrainsSection />
      <ProcessSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
}
