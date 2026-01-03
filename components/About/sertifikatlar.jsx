import Image from 'next/image'
import React from 'react'

export default function Sertifikatlar() {
  return (
    <div className='mt-[69px] mb-[63px] px-3  sm:px-0'>
        <h2 className='text-[#14183E] mb-[46px] font-bold text-4xl leading-[100%] tracking-normal text-center capitalize'>Bizning sertifikatlarimiz</h2>
        <div className="flex justify-center max-sm:gap-[30px] gap-[125px]">
                      <Image src="/mygovuz.png" alt="Certificate 1" width={285} height={408} className="opacity-80" />
                      <Image src="/guvohnoma.png" alt="Certificate 1" width={285} height={408} className="opacity-80" />
                    </div>
    </div>
  )
}
