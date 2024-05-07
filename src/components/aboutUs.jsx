import {GoArrowRight} from "react-icons/go";
import AboutUs1 from "/public/images/aboutUs/aboutUs1.webp"
import AboutUs2 from "/public/images/aboutUs/aboutUs2.webp"
import AboutUs3 from "/public/images/aboutUs/aboutUs3.webp"
import Eye from "/public/images/aboutUs/icons/Eye.png"
import Target from "/public/images/aboutUs/icons/Target.png"
import {motion} from "framer-motion";
import {useEffect} from "react";
import aos from 'aos'
import "aos/dist/aos.css"

export default function AboutUs(){
    useEffect(()=>{
        aos.init();
    },[])

    return(
        <div className={'text-center px-[25px] md:px-[50px] 2xl:px-[125px] py-[35px] md:py-[80px]'}>
            <span className={'text-[24px]'}>About us</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Why we are bests</span>
            <div className="flex justify-between mt-[35px] md:mt-[80px]">
                <div className={'hidden w-[620px] h-[522px] lg:flex justify-between'}>
                    <div className={'relative'}>
                        <img data-aos="zoom-in-up" src={AboutUs1} alt="" className={'w-[302px] h-[346px]'}/>
                        <img data-aos="zoom-in-up" src={AboutUs2} alt="" className={'w-[302px] h-[160px] absolute bottom-0'}/>
                    </div>
                    <div><img data-aos="zoom-in-up" src={AboutUs3} alt="" className={'w-[302px] h-full'}/></div>
                </div>
                <div
                    className={'w-[620px] lg:h-[522px] text-left text-[18px] sm:text-[20px] grid grid-cols-1 gap-[20px] md:gap-[35px] content-between mx-auto justify-center'}>
                    <span>
                          We stand out through our commitment to excellence and innovation. With a passionate team and tailor-made solutions, we craft exceptional digital experiences to propel our clients to online success.
                    </span>
                    <div className="flex justify-between">
                        <img src={Eye} alt="" className={'w-[50px] md:w-[80px] h-[50px] md:h-[80px]'}/>
                        <div className={'w-[524px]'}>
                            <span className={'font-semibold text-[25px] sm:text-[32px]'}>Our Vision</span><br/>
                            <span className={'text-[18px] sm:text-[20px]'}>Shaping the digital landscape through innovation and meaningful connections.</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <img src={Target} alt="" className={'w-[50px] md:w-[80px] h-[50px] md:h-[80px]'}/>
                        <div className={'w-[524px]'}>
                            <span className={'font-semibold text-[25px] sm:text-[32px]'}>Our Mission</span><br/>
                            <span className={'text-[18px] sm:text-[20px]'}>Transforming ideas into digital reality to empower businesses and enhance their online presence.</span>
                        </div>
                    </div>
                    <div className={'w-[200px] md:w-[323px] mx-auto 2xl:ml-0'}>
                        <motion.button whileHover={{scale:1.05}} onHoverStart={e=>{}} onHoverEnd={e=>{}} type="button"
                            className="text-white mx-auto 2xl:ml-[70px] text-[24px] bg-[#003BA4] h-[60px] md:h-[82px] md:mb-[25px] w-[200px] md:w-[323px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center">
                        <span className={'inline-block'}><span className={'text-[15px] md:text-[24px] flex items-center mx-auto'}>Read more<GoArrowRight
                            className={'w-34px] h-[34px] ml-[10px]'}/></span></span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}