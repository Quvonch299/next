import HeaderSlider from '@/components/home/HeaderSlider'
import Qaynoqtur from '@/components/home/Qaynoqtur'
import Services from '@/components/Server/services'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeaderSlider/>
      <Qaynoqtur/>
      <Services/>
    </div>
  )
}
