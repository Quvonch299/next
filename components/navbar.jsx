'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlinePhone } from 'react-icons/ai'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { MdOutlineEmail } from "react-icons/md"
import { IoIosArrowDown } from "react-icons/io"
import { FaRoute } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-[66px]">
      <div className="flex justify-center gap-[32px]">
        <span className="flex gap-[12px] items-center">
          <HiOutlineLocationMarker size={24} />
          <h2 className="text-[14px] text-[#00000099]">
            Abdulla qodiry ko‘chasi, 12A uy
          </h2>
        </span>

        <span className="flex gap-[12px] items-center">
          <MdOutlineEmail size={24} />
          <h2 className="text-[14px] text-[#00000099]">
            info@example.com
          </h2>
        </span>

        <span className="flex gap-[12px] items-center">
          <AiOutlinePhone size={24} />
          <h2 className="text-[14px] text-[#00000099]">
            +998 90 123 45 67
          </h2>
        </span>
      </div>
      <div className="bg-[#1A2031] mt-[11px] p-[20px]">
        <div className="max-w-7xl m-auto flex justify-between items-center text-white">

          <Image
            src="/icon/navbaricon.svg"
            width={237}
            height={52}
            alt="logo"
          />
          <div className="flex gap-[32px] items-center relative">
            <a href="#">Biz haqimizda</a>
            <a href="#">Mehmonxonalar</a>

            <div className="relative">
              <motion.div
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 cursor-pointer select-none"
                whileTap={{ scale: 0.95 }}
              >
                <FaRoute size={18} />
                <span>Turizm turlari</span>
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full mt-3 bg-white text-black rounded-xl z-10 shadow-xl w-[200px] overflow-hidden"
                  >
                    <a className="block px-4 py-3 hover:bg-gray-100">
                      Ichki turizm
                    </a>
                    <a className="block px-4 py-3 hover:bg-gray-100">
                      Tashqi turizm
                    </a>
                    <a className="block px-4 py-3 hover:bg-gray-100">
                      Ziyorat turlari
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#">Xizmatlar</a>
            <a href="#">Bog‘lanish</a>

            {/* LANGUAGE */}
            <span className="flex gap-2 items-center cursor-pointer">
              <Image src="/icon/uzbicon.svg" width={24} height={24} alt="uz" />
              <span>UZB</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
