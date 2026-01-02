import Image from "next/image";
import React from "react";
import { TbClockHour12 } from "react-icons/tb";

const data = Array(6).fill({
  title: "Rome, Italty",
  days: "10 kun",
  price: "1 mln so’m",
  image: "/2.png",
});

export default function Qaynoqtur() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-0">
      <h2 className="font-bold text-[50px] leading-[100%] max-sm:text-[32px] text-center capitalize mb-[32px]">
        Qaynoq turlar
      </h2>

      <div className="grid justify-center grid-cols-3 max-sm:grid-cols-1 gap-[54px]">
        {data.map((item, i) => (
          <div
            key={i}
            className={`
              overflow-hidden rounded-[24px] bg-white
              shadow-[0px_1.85px_3.15px_0px_#00000001,0px_8.15px_6.52px_0px_#00000002,0px_20px_13px_0px_#00000003,0px_38.52px_25.48px_0px_#00000003,0px_64.81px_46.85px_0px_#00000004,0px_100px_80px_0px_#00000005]
              ${i >= 3 ? "max-sm:hidden" : ""}
            `}
          >
          <div className="relative w-full h-[399px]">
  <Image
    src={item.image}
    alt="tour"
    fill
    className="object-cover rounded-t-[24px]"
  />
</div>


            <div className="mt-[16px] px-[13px] pb-[22px]">
              <h2 className="text-[#5E6282] font-medium text-[18px] leading-[125%]">
                {item.title}
              </h2>

              <div className="mt-[14px] flex justify-between items-center">
                <span className="flex gap-[18px] items-center">
                  <TbClockHour12 size={24} />
                  <p className="font-medium text-[16px] text-[#5E6282]">
                    {item.days}
                  </p>
                </span>

                <p className="font-medium text-[16px] text-[#5E6282]">
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
