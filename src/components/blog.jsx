import {GoArrowRight, GoChevronRight} from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { PiCalendarBlankLight } from "react-icons/pi";
import BlogImage1 from "/public/images/blog/blog1.webp"
import BlogImage2 from "/public/images/blog/blog2.webp"
import BlogImage3 from "/public/images/blog/blog3.webp"
import {motion} from "framer-motion";
import {useEffect} from "react";
import aos from "aos"
import "aos/dist/aos.css"

export default function Blog(){
    useEffect(()=>{
        aos.init();
    },[])

    return (
        <div className={'text-center px-[25px] md:px-[50px] 2xl:px-[125px] py-[35px] md:py-[80px]'}>
            <span className={'text-[24px]'}>Blog</span><br/>
            <span className={'font-semibold text-[36px] '}>Browse articles</span>
            <div className={'md:flex justify-between mt-[35px] md:mt-[80px] mx-auto'}>
                <div className={'md:w-[412px] h-[503px] p-[16px] mx-auto justify-center max-w-[379px]'}>
                    <div>
                        <img data-aos="fade-right" src={BlogImage1} alt=""
                             className={'h-[300px] w-[379px] rounded-[8px] mb-[15px]'}/>
                    </div>
                    <div className={'w-full flex justify-between'}>
                        <div className={'flex'}>
                            <GoPerson className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px] ml-[5px]'}>John Doe</span>
                        </div>
                        <div className={'flex items-center'}>
                            <PiCalendarBlankLight className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px] ml-[5px]'}>Feb 23 , 2024</span>
                        </div>
                    </div>
                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2 , ease:"easeInOut"}} className={'font-semibold text-[22px] md:text-[24px] my-[20px] text-left'}>Our dedicated team is here for you</motion.p>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                        <motion.div whileHover={{scale:1.05}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className={'flex items-center mx-auto'}>View details<GoChevronRight
                            className={'h-[16px] w-[16px] ml-[3px]'}/></motion.div>
                    </a></p>
                </div>
                <div className={'md:w-[412px] h-[503px] p-[16px] mx-auto justify-center  max-w-[379px]'}>
                    <div>
                        <img data-aos="fade-down" src={BlogImage2} alt=""
                             className={'h-[300px] w-[379px] rounded-[8px] mb-[15px]'}/>
                    </div>
                    <div className={'w-full flex justify-between'}>
                        <div className={'flex'}>
                            <GoPerson className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px] ml-[5px]'}>John Doe</span>
                        </div>
                        <div className={'flex items-center'}>
                            <PiCalendarBlankLight className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px] ml-[5px]'}>Feb 23 , 2024</span>
                        </div>
                    </div>
                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2 , ease:"easeInOut"}} className={'font-semibold text-[22px] md:text-[24px] my-[20px] text-left'}>Top-notch equipment for superior performance</motion.p>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                        <motion.div whileHover={{scale:1.05}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className={'flex items-center mx-auto'}>View details<GoChevronRight
                            className={'h-[16px] w-[16px] ml-[3px]'}/></motion.div>
                    </a></p>
                </div>
                <div className={'md:w-[412px] h-[503px] p-[16px] mx-auto justify-center  max-w-[379px]'}>
                    <div>
                        <img data-aos="fade-left" src={BlogImage3} alt=""
                             className={'h-[300px] w-[379px] rounded-[8px] mb-[15px]'}/>
                    </div>
                    <div className={'w-full flex justify-between'}>
                        <div className={'flex'}>
                            <GoPerson className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px] ml-[5px]'}>John Doe</span>
                        </div>
                        <div className={'flex items-center'}>
                            <PiCalendarBlankLight className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px] ml-[5px]'}>Feb 23 , 2024</span>
                        </div>
                    </div>
                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2 , ease:"easeInOut"}} className={'font-semibold text-[22px] md:text-[24px] my-[20px] text-left'}>Our devoted team make a difference</motion.p>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                        <motion.div whileHover={{scale:1.05}} onHoverStart={e=>{}} onHoverEnd={e=>{}} className={'flex items-center mx-auto'}>View details<GoChevronRight
                            className={'h-[16px] w-[16px] ml-[3px]'}/></motion.div>
                    </a></p>
                </div>
            </div>
            <motion.button whileHover={{scale:1.05}} onHoverStart={e=>{}} onHoverEnd={e=>{}} type="button"
                    className="mt-[35px] md:mt-[80px] text-white text-[24px] bg-[#003BA4] h-[60px] md:h-[82px] md:mb-[25px] w-[200px] md:w-[323px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center mx-auto justify-center">
                        <span className={'inline-block'}><span
                            className={'text-[15px] md:text-[24px] flex items-center mx-auto'}>View more<GoArrowRight
                            className={'w-34px] h-[34px] ml-[10px]'}/></span></span>
            </motion.button>
        </div>
    )
}