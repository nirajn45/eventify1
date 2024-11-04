
import { CardStackDemo } from '@/components/CardStackDemo';
import { CompareDemo } from '@/components/CompareDemo';
import { LayoutGridDemo } from '@/components/LayoutGridDemo';
import NavbarDemo from '@/components/navbar'
import Services from '@/components/Services';
import { SparklesPreview } from "@/components/SparklesPreview";
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo';
import VisionSection from '@/components/VisionSection';
import WhyChooseUsTimeline from '@/components/WhyChooseUsTimeline';
import Process from '@/components/Process';
import EventCarousel from '@/components/EventCarousel';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <SparklesPreview />
      <div className="flex w-full justify-center items-center bg-black mt-[-20px]">
     <div className="flex flex-col lg:flex-row w-10/12 justify-center items-center space-x-0 lg:space-x-4">
    <TextGenerateEffectDemo />
    <CardStackDemo />
  </div>
</div>
<VisionSection/>
{/* <Services/> */}
<div className="flex w-full justify-center items-center mt-[-20px]">
     <div className="flex flex-col lg:flex-row w-10/12 justify-center items-center">
     <Services/>
    <LayoutGridDemo/>
  </div>
</div>
<div className="flex w-full justify-center items-center mt-[-20px]">
     <div className="flex flex-col lg:flex-row w-10/12 justify-center items-center">
     <WhyChooseUsTimeline/>
     <CompareDemo/>
  </div>
</div>
<Process />
<EventCarousel />
<Gallery />
{/* <Footer /> */}
    </main>
  );
}