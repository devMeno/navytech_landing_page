import { FaPhoneAlt } from "react-icons/fa";
import BannerImage from "/public/images/banner/navytech_banner.png"
import {motion} from "framer-motion";

export default function Banner(){
    return(
        <div className={'pt-[10px] bg-[#000816] text-white pb-[80px]'}>
            <div className={'flex flex-col lg:flex-row items-center px-[25px] md:px-[50px] 2xl:px-[125px] justify-between'}>
                <div className={'lg:w-[670px] 2xl:h-[531px]'}>
                    <motion.h1 initial={{x:-1000}} animate={{x:0}} transition={{duration:1 , ease:"easeOut"}} className={'font-medium text-[40px] sm:text-[50px] 2xl:text-[64px]'}>#1 Worldwide Digital Solution Agency</motion.h1>
                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2 , ease:"easeInOut"}} className={'text-[18px] 2xl:text-[20px] mt-[15px] mb-[25px]'}>Revolutionize your global digital strategy with the #1 Worldwide Digital Solution Agency
                        , pioneering innovative solutions for unparallaled success.</motion.p>
                    <button type="button"
                            className="text-white text-[24px] bg-[#003BA4] h-[75px] 2xl:h-[82px] mb-[25px] w-[100%] md:w-[250px] 2xl:w-[323px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center">
                        <span className={'inline-block'}><span className={'text-[20px] 2xl:text-[24px] flex items-center mx-auto'}><FaPhoneAlt className={'w-34px] h-[34px] mr-[10px]'}/>Book a call</span></span>
                    </button>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:w-11/12 2xl:w-full">
                        <div className={'h-[90px] 2xl:h-[103px] bg-[#D9D9D9] rounded-[16px] text-[14px] text-center pt-3'}>
                            <h1 className={'text-[28px] 2xl:text-[36px] font-semibold'}>75K+</h1>
                            Project completed
                        </div>
                        <div className={'h-[90px] 2xl:h-[103px] bg-[#D9D9D9] rounded-[16px] text-[14px] text-center pt-3'}>
                            <h1 className={'text-[28px] 2xl:text-[36px] font-semibold'}>20+</h1>
                            Years of experience
                        </div>
                        <div className={'h-[90px] 2xl:h-[103px] bg-[#D9D9D9] rounded-[16px] text-[14px] text-center pt-3'}>
                            <h1 className={'text-[28px] 2xl:text-[36px] font-semibold'}>400+</h1>
                            Clients worldwide
                        </div>
                    </div>
                </div>
                <div className={'mt-[60px] lg:mt-0 mx-auto justify-center'}>
                    <img src={BannerImage} className={'w-[450px] h-[550px] sm:w-[516px] sm:h-[612px] rounded-tl-[80px] rounded-br-[80px]'} alt="Banner image"/>
                </div>
            </div>
        </div>
    )
}