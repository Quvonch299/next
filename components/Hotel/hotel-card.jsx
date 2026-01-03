'use client'

import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

const hotels = Array.from({ length: 6 }, () => ({
  city: 'Antalya',
  title: 'CLUB PRIVE BY RIXOS GOCEK',
  image: '/2.png',
  description:
    "Mehmonxona Naama ko'rfazidan 8 km uzoqlikda, Hadaba hududida, El Merkato markazidan 5 daqiqalik piyoda, Naama ko'rfazi markazidan 6 km va Eski shahardan 4 km uzoqlikda joylashgan. Mehmonxona birinchi marta 2005 yilda mehmonlarga o'z eshiklarini ochgan va oxirgi ta'mirlash 2017 yilda amalga oshirilgan. Mehmonxona faol, oilaviy va iqtisodiy dam olish uchun mos keladi.",
}))

export default function HotelCard() {
  return (
    <section className="">
      <h2 className='text-[#14183E] mb-8 font-bold text-[50px] leading-[100%] text-center capitalize max-sm:text-[32px]'>Mehmonxonalar</h2>

      <div className="max-w-7xl m-auto px-3 sm:px-0 grid gap-6 pb-[190px] sm:grid-cols-3 grid-cols-1">
        {hotels.map((item, index) => (
          <motion.div
            key={index}
            className="relative h-[453px]  overflow-hidden cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* IMAGE */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <motion.div
              variants={{
                rest: { opacity: 1 },
                hover: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            />
            <motion.div
              variants={{
                rest: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 text-white"
            >
              <div className="flex items-center gap-1 text-[#FFA90F] mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
              </div>

              <h3 className="font-semibold text-[18px] leading-[130%] mb-1">{item.title}</h3>
              <p className="text-[14px] opacity-90">{item.city}</p>
            </motion.div>
            <motion.div
              variants={{
                rest: { y: '-100%', opacity: 0 },
                hover: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="absolute inset-0 bg-black/85 text-white p-6 flex flex-col justify-center text-[14px] leading-[170%]"
            >
              <p className="opacity-95">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
