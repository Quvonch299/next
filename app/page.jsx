import FifeStar from '@/components/home/fife-star'
import HeaderSlider from '@/components/home/HeaderSlider'
import Qaynoqtur from '@/components/home/Qaynoqtur'
import Selector from '@/components/home/Selector'
import Services from '@/components/Server/services'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeaderSlider/>
      <Qaynoqtur/>
      <Services/>
      <FifeStar/>
      <Selector/>
    </div>
  )
}
