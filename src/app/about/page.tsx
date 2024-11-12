import React from 'react'
import { SparklesPreview } from "@/components/SparklesPreview";
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo';
import { CardStackDemo } from '@/components/CardStackDemo';
import MulCharts from '@/components/ManagementDesk';
import Philosophy from '@/components/Philosophy';
import { TextRevealCardPreview } from '@/components/TextRevealCardPreview';


function page() {
  return (
    <div>
      <SparklesPreview />
      <div className="flex w-full justify-center items-center bg-black mt-[-20px]">
     <div className="flex flex-col lg:flex-row w-10/12 justify-center items-center space-x-0 lg:space-x-4">
    <TextGenerateEffectDemo />
    <CardStackDemo />
  </div>
</div>
<MulCharts/>
<TextRevealCardPreview/>
<Philosophy/>
    </div>
  )
}

export default page
