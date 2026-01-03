'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Serverbox() {
  const [activeTab, setActiveTab] = useState('Viza');

  const tabs = [
    { name: 'Viza', label: 'Viza' },
    { name: 'AviaBilet', label: 'Avia bilet' },
    { name: 'PoyezdBilet', label: 'Poyezd bilet' },
    { name: 'Avtomobil', label: 'Avtomobil' },
    { name: 'Tarjimon', label: 'Tarjimon' },
  ];

  const sections = [
    { tab: 'Viza', img: '/icon/1.svg', title: 'Vizalarni olib berish' },
    { tab: 'AviaBilet', img: '/icon/2.svg', title: 'Avia biletlar' },
    { tab: 'PoyezdBilet', img: '/icon/3.svg', title: 'Poyezd biletlar' },
    { tab: 'Avtomobil', img: '/icon/4.svg', title: 'Avtomobil xizmatlari' },
    { tab: 'Tarjimon', img: '/icon/5.svg', title: 'Tarjimon xizmatlari' },
  ];

  const textContent = `
O'zbekiston fuqarolari uchun viza xizmatlari

Mamlakatlar o'rtasidagi viza rejimi xalqaro munosabatlar va sayohatlarning muhim jihati hisoblanadi. O‘zbekiston fuqarolari uchun ham, boshqa davlat fuqarolari uchun ham xorijiy davlatlarga borish uchun viza olishning ma’lum talab va tartiblari mavjud.

Viza olish tartibi
O‘zbekiston fuqarolari viza olish uchun muayyan tartib-qoidalarga rioya qilishlari kerak. Bunga ariza topshirish, pasport va fotosuratlar kabi kerakli hujjatlarni taqdim etish va viza to'lovini to'lash kiradi. Ba'zi hollarda siz sayohat qilishingiz rejalashtirilayotgan mamlakatning konsulligi yoki elchixonasida shaxsiy suhbat talab qilinishi mumkin.

Elektron vizalar (eVisa)
Viza jarayonini soddalashtirish uchun ko'plab mamlakatlar elektron viza (eVisa) xizmatini taklif qiladi. Bu O‘zbekiston fuqarolariga onlayn tarzda viza olish va uni elektron shaklda olish imkonini beradi. eVisa uchun ariza berish va olish jarayoni odatda standart viza tartibiga qaraganda tezroq va qulayroqdir.

O‘zbekiston fuqarolari uchun viza xizmatlari boradigan davlatga qarab turli tartib va talablarni o‘z ichiga oladi. Barcha kerakli hujjatlar o'z vaqtida va to'g'ri bajarilishini ta'minlash uchun viza qoidalari va talablari bilan oldindan tanishib chiqish muhimdir. Elektron vizalar O‘zbekiston fuqarolari uchun xalqaro sayohatlarni yanada qulayroq qilib, kirish ruxsatnomasini olishning qulay va tezkor usulini taklif etadi.

ATLAS LUXE kompaniyasi viza xizmatlarini taqdim etadi; agar sizga malakali yordam kerak bo'lsa, bizning operatorlarimizga murojaat qiling.
`;

  const activeSection = sections.find(sec => sec.tab === activeTab);

  return (
    <div className="max-w-[952px] mx-auto px-4 sm:px-6 lg:px-0">
      <div className="rounded-[8px] flex flex-wrap sm:flex-nowrap items-center bg-gray-100 w-full sm:w-[684px] h-[56px] mx-auto mb-10">
        <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-4 justify-center w-full px-2 sm:px-0 gap-2 sm:gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`
                flex-1 sm:flex-none max-sm:text-[10px] w-full sm:w-[109px] h-[52px] rounded-[8px] font-medium text-base sm:text-lg transition-all duration-300
                ${activeTab === tab.name
                  ? 'bg-[linear-gradient(90deg,#BD8E2B_1%,#737373_100%)] text-white shadow-md'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeSection && (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-[18px] mb-6">
          <Image 
            src={activeSection.img} 
            width={145} 
            height={134} 
            alt={activeSection.title} 
            className="w-[87px] sm:w-[145px] h-[80px] sm:h-[134px]" 
          />
          <h2 className="font-bold text-[28px] sm:text-[50px] leading-[100%] tracking-[0%] text-[#14183E] capitalize text-center sm:text-left">
            {activeSection.title}
          </h2>
        </div>
      )}
      <p className="font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-[0%] whitespace-pre-line">
        {textContent}
      </p>
    </div>
  );
}
