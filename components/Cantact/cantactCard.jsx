import React from 'react';

const ContactCard = () => {
  return (
    <div>
<h2 className='text-[#14183E] font-bold text-[50px] leading-[100%] tracking-normal text-center capitalize mb-[34px]'>Bog’lanish</h2>
    <div className=" max-w-7xl grid grid-cols-2  mt-[64px] m-auto">
      <div className=" w-[576px] ">
        <h2 className="font-bold text-[24px] leading-[32px] tracking-normal mb-[32px]">ATLAS LUXE travel sayyohlik agentligi</h2>
      
        <div className="grid grid-cols-2 mb-[32px]">
          <div className='w-[270px]'>
            <p className="font-normal text-[16px] leading-[18px] tracking-[0] text-gray-600 mb-[16px]">Ish vaqti:</p>
            <a
              href="tel:+79454344343"
              className="font-medium text-[18px] leading-[24px] tracking-normal"
            >
        Dushanbadan-shanbagacha
09:00 dan 18:00 gacha
            </a>
          </div>
          <div>
            <p className="font-normal text-[16px] leading-[18px] tracking-[0] text-gray-600 mb-[16px]">Transport:</p>
            <a
              href="mailto:info@geniusselectro.ru"
              className="font-medium text-[18px] leading-[24px] tracking-normal "
            >
131-avtobus, 13-yo`nalishli taksi.            </a>
          </div>
        </div>
        <div className="flex    gap-[137px]  ">
<div>
          <h2 className="font-normal text-[16px] leading-[18px] tracking-[0] text-[#272727] mb-[12px] ">Telefon:</h2>
          <p className="font-medium text-[18px] leading-[24px] tracking-normal ">+998 71 230-12-91</p>
</div>
<div>
          <h2 className="font-normal text-[16px] leading-[18px] tracking-[0] text-[#272727] mb-[12px] ">Telefon:</h2>
          <p className="font-medium text-[18px] leading-[24px] tracking-normal mb-[22px] ">+998 71 230-12-91</p>
</div>
        </div>
        <div>
            <h2 className='font-normal text-[16px] leading-[18px] tracking-[0] text-[#272727] mb-[12px]'>E-mail:</h2>
            <p className='font-medium text-[18px] leading-[24px] tracking-normal '>atlasluxe@gmail.uz, 
</p>
        </div>
      </div>
      <div className=' rounded-[16px] overflow-hidden w-[614px] '>
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d25215.773210401363!2d64.62409127280725!3d40.23793602581625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d40.2694784!2d64.6856316!4m3!3m2!1d40.1866485!2d64.70485769999999!5e1!3m2!1suz!2s!4v1766989847104!5m2!1suz!2s"
      width="817"
      height="366"
     
    />
      </div>
    </div>
    </div>
  );
};

export default ContactCard;