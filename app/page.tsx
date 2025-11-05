//components
import Footer from "@/components/footer";
import SectionFeedbacks from "@/components/sections/section-feedbacks";
import SectionHeader from "@/components/sections/section-header";
import Separator from "@/components/separator";
import SectionModalities from "@/components/sections/section-modalities";
import SectionFAQ from "@/components/sections/section-faq";
import SectionFinal from "@/components/sections/section-final";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh h-full bg-secondary text-primary">
      <SectionHeader />
      <Separator color="primary" words={["Urbanas", "Clássicas", "Brasileiras", "Internacionais"]}/>
      <SectionModalities />
      <Separator color="secondary" words={["Urbanas", "Clássicas", "Brasileiras", "Internacionais"]}/>
      <SectionFeedbacks />
      <Separator color="secondary" words={["Urbanas", "Clássicas", "Brasileiras", "Internacionais"]}/>
      <SectionFAQ />
      <Separator color="primary" words={["Urbanas", "Clássicas", "Brasileiras", "Internacionais"]}/>
      <SectionFinal />
      <Footer />
    </main>
  );
}
