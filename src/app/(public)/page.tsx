import Header from "@/src/components/layout/Header";
import Hero from "@/src/components/hero/Hero";
import Keynotes from "@/src/components/sections/Keynotes";
import Speakers from "@/src/components/sections/Speakers";
import LastYear from "@/src/components/sections/LastYear";
import SocialLinks from "@/src/components/sections/SocialLinks";
import Footer from "@/src/components/layout/Footer";


export default function Page() {
return (
<main>
<Header />
<Hero />
<Keynotes />
<Speakers />
<LastYear />
<SocialLinks />
<Footer />
</main>
);
}