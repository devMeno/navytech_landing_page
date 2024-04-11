export default function Banner(){
    return(
        <div className={'pt-[200px] bg-black text-white pb-[80px]'}>
            <div className={'flex flex-wrap items-center px-[80px] justify-between'}>
                <div className={'w-[670px] h-[531px]'}>
                    <h1 className={'font-medium text-[64px]'}>#1 Worldwide Digital Solution Agency</h1>
                    <p className={'text-[20px] mt-[15px] mb-[25px]'}>Revolutionize your global digital strategy with the #1 Worldwide Digital Solution Agency
                        , pioneering innovative solutions for unparallaled success.</p>
                    <button type="button"
                            className="text-white text-[24px] bg-[#003BA4] h-[82px] mb-[25px] w-[323px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Book a call
                    </button>
                    <div className="grid gap-4 grid-cols-3">
                        <div className={'bg-blue-100 h-[103px] bg-[#D9D9D9] rounded-[16px] text-[14px] text-center pt-3'}>
                            <h1 className={'text-[36px] font-semibold'}>75K+</h1>
                            Project completed
                        </div>
                        <div className={'bg-blue-100 h-[103px] bg-[#D9D9D9] rounded-[16px] text-[14px] text-center pt-3'}>
                            <h1 className={'text-[36px] font-semibold'}>20+</h1>
                            Years of experience
                        </div>
                        <div className={'bg-blue-100 h-[103px] bg-[#D9D9D9] rounded-[16px] text-[14px] text-center pt-3'}>
                            <h1 className={'text-[36px] font-semibold'}>400+</h1>
                            Clients worldwide
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/public/images/pexels-tima-miroshnichenko-5725433.jpg" className={'w-[516px] h-[612px] rounded-tl-[80px] rounded-br-[80px]'} alt=""/>
                </div>
            </div>
        </div>
    )
}