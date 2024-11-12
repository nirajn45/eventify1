import React from 'react'
import { SparklesPreview } from "@/components/SparklesPreview";
import Services from '@/components/Services';
import { LayoutGridDemo } from '@/components/LayoutGridDemo';
import TestimonialsSection from '@/components/InfiniteMovingCardsDemo';
import { InfiniteMovingCardsDemo } from '@/components/services/InfiniteMovingCardsDemo';
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo';
import Gallery from '@/components/Gallery';



function page() {
  return (
    <div>
      <SparklesPreview />
      <div className="flex w-full justify-center items-center mt-[-20px]">
     <div className="flex flex-col lg:flex-row w-10/12 justify-center items-center">
     <Services/>
    <LayoutGridDemo/>
  </div>
</div>
{/* <TestimonialsSection/> */}
<CardHoverEffectDemo/>
<Gallery/>
<InfiniteMovingCardsDemo/>
    </div>
  )
}

export default page
