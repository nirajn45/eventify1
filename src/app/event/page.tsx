import React from 'react'
import { SparklesPreview } from "@/components/SparklesPreview";
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo';
import { CardStackDemo } from '@/components/CardStackDemo';
import Main from './EventListing/Main';


function page() {
  return (
    <div>
      <SparklesPreview />
      <Main/>
    </div>
  )
}

export default page
