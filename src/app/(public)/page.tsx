import HeaderFX from "@/components/layout/HeaderFX";
import HeroFX from "@/components/hero/HeroFX";
import Keynotes from "@/components/sections/Keynotes";
import Speakers from "@/components/sections/Speakers";
import LastYear from "@/components/sections/LastYear";
import SocialLinks from "@/components/sections/SocialLinks";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Page() {
  return (
    <main>
      <HeaderFX />
      <CustomCursor />
      <HeroFX />
      <Keynotes />
      <Speakers />
      <LastYear />
      <SocialLinks />
      <Footer />
    </main>
  );
}