'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const hotels = [
  {
    city: 'Italy',
    image: '/italya.png',
  },
  {
    city: 'Indonesia',
    image: '/indonesia.png',
  },
  {
    city: 'Italy',
    image: '/italya.png',
  },
]

export default function Selector() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <h2 className="font-bold text-[50px] max-sm:text-[32px] leading-[100%] text-center capitalize pt-[134px] pb-[34px]">
          Sayohat uchun tanlovlar
        </h2>

        <motion.div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 pb-[50px]">
          {hotels.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-[16px] bg-white shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={item.image}
                width={350}
                height={290}
                alt={item.city}
                className="rounded-t-[16px] object-cover w-full"
              />

              <h2 className="mt-4 pb-4 font-medium text-[30px] leading-[100%] text-center">
                {item.city}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
