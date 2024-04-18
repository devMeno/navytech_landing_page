import { FaPhoneAlt } from "react-icons/fa";

export default function Banner(){
    return(
        <div className={'pt-[200px] bg-[#000816] text-white pb-[80px]'}>
            <div className={'flex flex-wrap items-center px-[25px] md:px-[125px] justify-between'}>
                <div className={'w-[670px] md:h-[531px]'}>
                    <h1 className={'font-medium text-[50px] md:text-[64px]'}>#1 Worldwide Digital Solution Agency</h1>
                    <p className={'text-[20px] mt-[15px] mb-[25px]'}>Revolutionize your global digital strategy with the #1 Worldwide Digital Solution Agency
                        , pioneering innovative solutions for unparallaled success.</p>
                    <button type="button"
                            className="text-white text-[24px] bg-[#003BA4] h-[82px] mb-[25px] w-[100%] md:w-[323px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center">
                        <span className={'inline-block'}><span className={'text-[24px] flex items-center mx-auto'}><FaPhoneAlt className={'w-34px] h-[34px] mr-[10px]'}/>Book a call</span></span>
                    </button>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                        <div className={'h-[103px] bg-[#D9D9D9] rounded-[16px] text-[14px] text-center pt-3'}>
                            <h1 className={'text-[36px] font-semibold'}>75K+</h1>
                            Project completed
                        </div>
                        <div className={'h-[103px] bg-[#D9D9D9] rounded-[16px] text-[14px] text-center pt-3'}>
                            <h1 className={'text-[36px] font-semibold'}>20+</h1>
                            Years of experience
                        </div>
                        <div className={'h-[103px] bg-[#D9D9D9] rounded-[16px] text-[14px] text-center pt-3'}>
                            <h1 className={'text-[36px] font-semibold'}>400+</h1>
                            Clients worldwide
                        </div>
                    </div>
                </div>
                <div className={'mt-[60px] md:mt-0 mx-auto justify-center'}>
                    <img src="/public/images/pexels-tima-miroshnichenko-5725433.jpg" className={'w-[516px] md:h-[612px] rounded-tl-[80px] rounded-br-[80px]'} alt=""/>
                </div>
            </div>
        </div>
    )
}