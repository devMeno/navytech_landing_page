import { GoChevronRight } from "react-icons/go";
import Paint from "/public/images/services/PaintBrush.png"
import Globe from "/public/images/services/GlobeHemisphereWest.png"
import Mobile from "/public/images/services/DeviceMobile.png"
import CreditCard from "/public/images/services/CreditCard.png"
import {motion} from "framer-motion";

export default function Services(){
    return(
        <div className={'text-center mx-auto justify-center px-[25px] md:px-[125px] py-[35px] md:py-[70px]'}>
            <span className={'text-[24px]'}>Our services</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Growth based services</span>
            <div className={'flex flex-wrap justify-between mx-auto mt-[35px]'}>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}
                            transition={{duration: 1.2, ease: "easeIn"}}
                            className={'w-[308px] h-[377px] text-center hover:bg-[#F0F5FF] border-[2px] border-[#F0F5FF] my-[10px] py-[40px] mx-auto justify-center relative'}>
                    <div className={'px-[24px]'}><img src={Paint} alt=""
                                                      className={'w-[100px] h-[100px] mx-auto mb-[24px]'}/>
                        <span className={'font-semibold text-[24px]'}>
                        Branding and UI/UX
                    </span><br/>
                        <div className="w-[260px] mx-auto mb-[24px]"><span>Crafting unique user experiences to strengthen your brand.</span>
                        </div>
                    </div>
                    <div className={'absolute bottom-[40px] w-full'}>
                        <motion.div whileHover={{scale:1.05}} onHoverStart={e=>{}} onHoverEnd={e=>{}}  className={'mx-auto w-fit text-center'}>
                            <p className={'text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                                <div className={'flex items-center mx-auto'}>View details<GoChevronRight
                                    className={'h-[16px] w-[16px] ml-[3px]'}/></div>
                            </a></p>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}
                            transition={{duration: 1.2, ease: "easeIn"}}
                            className={'w-[308px] h-[377px] text-center hover:bg-[#F0F5FF] border-[2px] border-[#F0F5FF] my-[10px] py-[40px] mx-auto justify-center relative'}>
                    <div className={'px-[24px]'}><img src={Globe} alt=""
                                                      className={'w-[100px] h-[100px] mx-auto mb-[24px]'}/>
                        <span className={'font-semibold text-[24px]'}>
                        Web Development
                    </span><br/>
                        <div className="w-[260px] mx-auto mb-[24px]"><span>Tailored web solutions blending aesthetics and performance seamlessly.</span>
                        </div>
                    </div>
                    <div className={'absolute bottom-[40px] w-full'}>
                        <motion.div whileHover={{scale:1.05}} onHoverStart={e=>{}} onHoverEnd={e=>{}}  className={'mx-auto w-fit text-center'}>
                            <p className={'text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                                <div className={'flex items-center mx-auto'}>View details<GoChevronRight
                                    className={'h-[16px] w-[16px] ml-[3px]'}/></div>
                            </a></p>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}
                            transition={{duration: 1.2, ease: "easeIn"}}
                            className={'w-[308px] h-[377px] text-center hover:bg-[#F0F5FF] border-[2px] border-[#F0F5FF] my-[10px] py-[40px] mx-auto justify-center relative'}>
                    <div className={'px-[24px]'}><img src={Mobile} alt=""
                                                      className={'w-[100px] h-[100px] mx-auto mb-[24px]'}/>
                        <span className={'font-semibold text-[24px]'}>
                        Mobile Development
                    </span><br/>
                        <div className="w-[260px] mx-auto mb-[24px]"><span>Delivering custom mobile apps for optimal user experiences.</span>
                        </div>
                    </div>
                    <div className={'absolute bottom-[40px] w-full'}>
                        <motion.div whileHover={{scale:1.05}} onHoverStart={e=>{}} onHoverEnd={e=>{}}  className={'mx-auto w-fit text-center'}>
                            <p className={'text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                                <div className={'flex items-center mx-auto'}>View details<GoChevronRight
                                    className={'h-[16px] w-[16px] ml-[3px]'}/></div>
                            </a></p>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}
                            transition={{duration: 1.2, ease: "easeIn"}}
                            className={'w-[308px] h-[377px] text-center hover:bg-[#F0F5FF] border-[2px] border-[#F0F5FF] my-[10px] py-[40px] mx-auto justify-center relative'}>
                    <div className={'px-[24px]'}><img src={CreditCard} alt=""
                                                      className={'w-[100px] h-[100px] mx-auto mb-[24px]'}/>
                        <span className={'font-semibold text-[24px]'}>
                        Digital Marketing
                    </span><br/>
                        <div className="w-[260px] mx-auto mb-[24px]"><span>Implementing targeted digital strategies to boost online visibility and conversions.</span>
                        </div>
                    </div>
                    <div className={'absolute bottom-[40px] w-full'}>
                        <motion.div whileHover={{scale:1.05}} onHoverStart={e=>{}} onHoverEnd={e=>{}}  className={'mx-auto w-fit text-center'}>
                            <p className={'text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                                <div className={'flex items-center mx-auto'}>View details<GoChevronRight
                                    className={'h-[16px] w-[16px] ml-[3px]'}/></div>
                            </a></p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}