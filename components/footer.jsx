// src/app/components/Footer.tsx

import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-[38px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-6">
      <Image
                 src="/icon/navbaricon.svg"
                 width={237}
                 height={52}
                 alt="logo"
                 className="max-sm:w-[134px] max-sm:h-[29px]"
               />

            <div className="flex space-x-4">
              <Image src="/guvohnoma.png" alt="Certificate 1" width={113} height={159} className="opacity-80" />
              <Image src="/guvohnoma.png" alt="Certificate 2" width={113} height={159} className="opacity-80" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-[14px] text-[16px] leading-[125%] tracking-normal">Biz haqimizda</h3>
            <ul className="space-y-[24px]">
              <li><a href="#" className="font-normal text-[16px] leading-[125%] tracking-normal text-[#000000]">Home</a></li>
              <li><a href="#" className="font-normal text-[16px] leading-[125%] tracking-normal text-[#000000]">Biz haqimizda</a></li>
              <li><a href="#" className="font-normal text-[16px] leading-[125%] tracking-normal text-[#000000]">Xizmatlar</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-[14px] text-[16px] leading-[125%] tracking-normal">Turizm turlari</h3>
            <ul className="space-y-[24px]">
              <li><a href="#" className="font-normal text-[16px] leading-[125%] tracking-normal text-[#000000]">Ichki turizm</a></li>
              <li><a href="#" className="font-normal text-[16px] leading-[125%] tracking-normal text-[#000000]">Tashqi turizm</a></li>
              <li><a href="#" className="font-normal text-[16px] leading-[125%] tracking-normal text-[#000000]">Kruvchi turizm</a></li>
              <li><a href="#" className="font-normal text-[16px] leading-[125%] tracking-normal text-[#000000]">Mehmonhonalar</a></li>
            </ul>
          </div>

          {/* Kontaktlar */}
          <div>
            <h3 className="font-semibold mb-[12px] text-[16px] leading-[125%] tracking-normal">Kontaktlar</h3>
            <div className="space-y-[27px]">
              <span className="flex gap-3">

                <MapPin />
                <h2 className='font-normal text-[14px] leading-[125%] tracking-normal text-[#00000099]'> Abdulla Qodiriy kochasi, 12A uy</h2>
              </span>
              <span className="flex gap-3">

                <Mail />
                <h2 className='font-normal text-[14px] leading-[125%] tracking-normal text-[#00000099]'>elyorabdumalikoy@gmail.com</h2>
              </span>
              <span className="flex gap-3">

                <Phone />
                <h2 className='font-normal text-[14px] leading-[125%] tracking-normal text-[#00000099]'>+998 90 010-85-10</h2>
              </span>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-[conic-gradient(from_180deg_at_50%_50%,#B8D2F1_0deg,#F289AA_60deg,#C68BF0_106.09deg,#D164DA_153.75deg,#C963E8_221.25deg,#BFC2E8_258.75deg,#FFC999_288.75deg,#D0D8C9_315deg,#BAD0F1_334.13deg,#CED8CB_358.97deg,rgba(255,255,255,0)_360deg)] rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                <Twitter   size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}