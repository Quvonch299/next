'use client';

export default function Modal() {

  return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className='bg-[#FFFFFF] w-[505px]'> 
            <div className='w-[384px] m-auto'>

<h2 className='font-medium mb-[39px] text-2xl leading-[1.25] mt-[65px] tracking-normal text-center '>Bron qilish</h2>
<span className=' '>
    <p className='text-[#14183E]  font-medium text-base leading-tight tracking-norma'>FISH:</p>
    <input 
    className='font-medium text-base outline-none mb-[24px] leading-[1.25] tracking-normal w-full h-[56px] bg-[#F1F1F1] rounded-[8px] px-[16px] text-[#00000099]'
    type="email" placeholder="FISH:" name="" id=""/>
</span>
<span className=''>
    <p className='text-[#14183E]  font-medium text-base leading-tight tracking-norma'>Telefon raqam</p>
    <input 
    className='font-medium mb-[24px] outline-none text-base leading-[1.25] tracking-normal w-full h-[56px] bg-[#F1F1F1] rounded-[8px] px-[16px] text-[#00000099]'
    type="email" placeholder="+998 --- -- --" name="" id=""/>
</span>
<span className=''>
    <p className='text-[#14183E]  font-medium text-base leading-tight tracking-norma'>Kishi soni</p>
    <input 
    className='font-medium mb-[24px] text-base outline-none leading-[1.25] tracking-normal w-full h-[56px] bg-[#F1F1F1] rounded-[8px] px-[16px] text-[#00000099]'
    type="email" placeholder="Kishi soni" name="" id=""/>
</span>
<button className='w-full h-[52px] bg-gradient-to-r from-[#BD8E2B] via-[#BD8E2B] to-[#737373] from-1% via-1% rounded-[12px] font-medium text-base leading-[1.25] tracking-normal text-[#FFFFFF] cursor-pointer mb-[66px]'>
Jo’natish
</button>
            </div>
          </div>
        </div>
  
  );
}