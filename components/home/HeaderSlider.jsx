'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
  {
    src: 'https://iqplanet.ru/upload/iblock/2d6/2d6ae71725acbcff88f56ef3495d35be.jpg',
    title: 'Angliya',
    desc: 'Tarix va zamonaviylik uyg‘unlashgan, sayyohlar uchun betakror shahar.'
  },
  {
    src: 'https://res.cloudinary.com/djcyhbk2e/image/upload/c_fit,f_auto,h_800,q_35,w_800/v1/gvv/prod/emr1iucgvvjslubrluvj',
    title: 'Spain',
    desc: 'Hashamatli osmono‘par binolar va zamonaviy turizm markazi.'
  },
  {
    src: 'https://storage.kun.uz/source/1/Fqq4GCr-VIP3YVTnyCTjasINpY5N0nWv.jpg',
    title: 'Samarqand',
    desc: 'Buyuk Ipak yo‘lining yuragi, tarix va madaniyat markazi.'
  },
  {
    src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg',
    title: 'Parij',
    desc: 'Muhabbat shahri, san’at va moda markazi.'
  },
]

export default function HeaderSlider() {
  return (
    <div className="relative max-w-7xl mx-auto px-3 sm:px-0">
      <Swiper modules={[Autoplay, Navigation]} slidesPerView={1} speed={1500} loop
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.slider-prev',
          nextEl: '.slider-next',
        }}
        className="rounded-2xl sm:rounded-[32px] overflow-hidden
                   h-[200px] sm:h-[320px] lg:h-[494px]
                   shadow-2xl"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="relative w-full h-full"
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={i === 0}
                unoptimized
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute bottom-14 sm:bottom-20 left-4 sm:left-10
                           max-w-[90%] sm:max-w-[460px]
                           text-white z-20"
              >
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/90">
                  {slide.desc}
                </p>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20
                           py-2 sm:py-3 px-4 sm:px-6
                           text-sm sm:text-base
                           rounded-full text-white font-semibold shadow-xl"
                style={{
                  background: 'linear-gradient(90deg, #BD8E2B 1%, #737373 100%)',
                }}
              >
                Joy band qilish
              </motion.button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="slider-prev absolute left-2 sm:left-6 top-1/2 z-30
                         -translate-y-1/2 rounded-full
                         bg-white/80 p-2 sm:p-4
                         backdrop-blur-md transition-all
                         hover:bg-white hover:scale-110">
        <AiOutlineLeft size={22} className="sm:size-[28px] text-gray-800" />
      </button>
      <button className="slider-next absolute right-2 sm:right-6 top-1/2 z-30
                         -translate-y-1/2 rounded-full
                         bg-white/80 p-2 sm:p-4
                         backdrop-blur-md transition-all
                         hover:bg-white hover:scale-110">
        <AiOutlineRight size={22} className="sm:size-[28px] text-gray-800" />
      </button>
    </div>
  )
}
