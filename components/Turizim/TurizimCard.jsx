'use client'
import { LocationEdit } from "lucide-react";
import Image from "next/image";
import { FaMoneyBillAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../modal";

const data = Array(4).fill({
  title: "CLUB PRIVE BY RIXOS GOCEK",
  location: "Antalya",
  price: "1 mln so‘m",
  image: "/2.png",
  description: `Mehmonxona Naama ko'rfazidan 8 km uzoqlikda, Hadaba hududida,
  ko'plab restoran va kafelar joylashgan El Merkato markazidan 5 daqiqalik piyoda,
  Naama ko'rfazi markazidan 6 km va Eski shahardan 4 km uzoqlikda joylashgan.
  Mehmonxona birinchi marta 2005 yilda ochilgan va 2017 yilda ta'mirlangan.
  Oilaviy va iqtisodiy dam olish uchun mos.`,
});

export default function TurizimCard() {
      const[open,setOpen]=useState(false)
    
  return (
    <div className="flex flex-col gap-6 px-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-md overflow-hidden
          flex flex-col lg:flex-row gap-6"
        >
          {/* IMAGE */}
          <div className="relative w-full lg:w-[387px] h-[220px] lg:h-[340px] flex-shrink-0 rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col flex-1 p-4 lg:p-0">
            <h2 className="text-lg lg:text-xl mt-2 lg:mt-[25px] font-semibold text-gray-900">
              {item.title}
            </h2>

            <div className="flex flex-col gap-3 text-sm text-gray-500 mt-2">
              <span className="flex items-center gap-1">
                <LocationEdit size={16} /> {item.location}
              </span>
              <span className="flex items-center gap-1 text-[#BD8E2B] font-medium">
                <FaMoneyBillAlt /> {item.price}
              </span>
            </div>

            <p className="mt-3 text-sm lg:text-base leading-relaxed capitalize">
              {item.description}
            </p>

            <button
                  onClick={()=>setOpen(true)}
              className="mt-4 bg-gradient-to-r from-[#BD8E2B] to-[#737373]
              text-white w-full sm:w-[203px] h-[52px]
              rounded-lg text-sm font-medium transition hover:opacity-90"
            >
              Joy band qilish
            </button>
          </div>
        </div>
      ))}
        { open&&<Modal setOpen={setOpen}/> }
    </div>
  );
}
