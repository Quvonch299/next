'use client'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

const hotels = Array(4).fill({
  city: 'Antalya',
  title: 'CLUB PRIVE BY RIXOS GOCEK',
  image: '/2.png',
})

export default function FifeStar() {
  return (
    <div className="bg-[#1A2031] mt-[163px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <h2 className="font-bold text-[50px] max-sm:text-[32px] leading-[100%] text-center capitalize pt-[59px] pb-[50px] text-white">
          Ekskluziv mehmonxonalar
        </h2>

        {/* Desktop: grid */}
        <div className="hidden sm:grid grid-cols-4 gap-6 pb-[190px]">
          {hotels.map((item, index) => (
            <div key={index} className="bg-white rounded-[16px]">
              <Image
                src={item.image}
                width={350}
                height={290}
                alt="hotel"
                className="rounded-t-[16px]"
              />
              <div className="flex justify-between mt-3 px-4">
                <h2 className="font-medium text-[16px] leading-[132%] capitalize">
                  {item.city}
                </h2>
                <div className="text-[#FFA90F] flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
              </div>
              <h2 className="mt-2 mb-6 px-4 font-semibold text-[18px] leading-[132%] capitalize">
                {item.title}
              </h2>
            </div>
          ))}
        </div>

        <motion.div 
          className="flex sm:hidden gap-6 overflow-x-auto pb-[50px] scrollbar-none"
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ left: -300, right: 0 }}
        >
          {hotels.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[16px] flex-shrink-0 w-[280px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={item.image}
                width={350}
                height={290}
                alt="hotel"
                className="rounded-t-[16px]"
              />
              <div className="flex justify-between mt-3 px-4">
                <h2 className="font-medium text-[16px] leading-[132%] capitalize">
                  {item.city}
                </h2>
                <div className="text-[#FFA90F] flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
              </div>
              <h2 className="mt-2 mb-6 px-4 font-semibold text-[18px] leading-[132%] capitalize">
                {item.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
