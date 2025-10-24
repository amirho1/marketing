import HeroSection from "@/components/HeroSection";
import ModelViewerInner from "@/components/Iphone";

export default function Home() {
  return (
    <div className="md:flex md:mt-3 xl:mt-12 xl:container  md:mx-auto md:items-start md:justify-between ">
      <HeroSection />
      <ModelViewerInner />
    </div>
  );
}
