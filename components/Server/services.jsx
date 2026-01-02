import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Viza",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "/icon/2.svg",
  },
  {
    title: "Poyezd bilet",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "/icon/2.svg",
  },
  {
    title: "Tarjimon",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    icon: "/icon/3.svg",
  },
  {
    title: "Avtomobil",
    desc: "We deliver outsourced aviation services for military customers",
    icon: "/icon/4.svg",
  },
  {
    title: "Avtomobil",
    desc: "We deliver outsourced aviation services for military customers",
    icon: "/icon/5.svg",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto ">
        <h2 className='font-bold mt-[55px] text-[42px] leading-[100%] tracking-[0%] text-center capitalize max-sm:text-[28px] mb-[95px]'>Biz eng yaxshi hizmatlarni taklif qilamiz</h2>
      <div className="grid grid-cols-5 gap-[60px] max-md:grid-cols-2 max-sm:grid-cols-1">
        {services.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-[104px] h-[57px] mb-[24px]">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-[#1E1D4C] font-normal text-[20px] leading-[100%] tracking-[0%] mb-[12px]">
              {item.title}
            </h3>
            <p className="text-[#5E6282] font-medium text-[16px] leading-[26px] tracking-[0%] text-center max-w-[181px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
