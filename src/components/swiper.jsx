import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {PiGlobeHemisphereWestThin} from "react-icons/pi";
import {LiaStarSolid} from "react-icons/lia";

export default function Caroussel(){
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div
                    className={'w-[624px] h-[356px] text-center p-[24px] border-[2px] border-[#F0F5FF] px-[24px] py-[40px] rounded-[24px] bg-white'}>
                    <PiGlobeHemisphereWestThin
                        className={'w-[64px] h-[64px] mx-auto text-[#003BA4]'}/>
                    <div className="w-[544px] mx-auto mb-[16px] mt-[16px]">
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias cum, deleniti esse est expedita nam obcaecati omnis provident quas qui, repellendus sapiente sed, similique suscipit vel vitae. Minus, voluptate!
                                            </span>
                    </div>
                    <div
                        className={'w-[253px] h-[100px] mx-auto flex items-center justify-between'}>
                        <img src="/public/images/pexels-elizabeth-ferreira-20846828.jpg" alt=""
                             className={'w-[100px] h-[100px] rounded-full'}/>
                        <div>
                                                <span
                                                    className={'text-[20px] font-semibold mb-[10px]'}>Michael Wong</span>
                            <div className="flex text-[#003BA4]">
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className={'w-[624px] h-[356px] text-center p-[24px] border-[2px] border-[#F0F5FF] px-[24px] py-[40px] rounded-[24px] bg-white'}>
                    <PiGlobeHemisphereWestThin
                        className={'w-[64px] h-[64px] mx-auto text-[#003BA4]'}/>
                    <div className="w-[544px] mx-auto mb-[16px] mt-[16px]">
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias cum, deleniti esse est expedita nam obcaecati omnis provident quas qui, repellendus sapiente sed, similique suscipit vel vitae. Minus, voluptate!
                                            </span>
                    </div>
                    <div
                        className={'w-[253px] h-[100px] mx-auto flex items-center justify-between'}>
                        <img src="/public/images/pexels-elizabeth-ferreira-20846828.jpg" alt=""
                             className={'w-[100px] h-[100px] rounded-full'}/>
                        <div>
                                                <span
                                                    className={'text-[20px] font-semibold mb-[10px]'}>Michael Wong</span>
                            <div className="flex text-[#003BA4]">
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className={'w-[624px] h-[356px] text-center p-[24px] border-[2px] border-[#F0F5FF] px-[24px] py-[40px] rounded-[24px] bg-white'}>
                    <PiGlobeHemisphereWestThin
                        className={'w-[64px] h-[64px] mx-auto text-[#003BA4]'}/>
                    <div className="w-[544px] mx-auto mb-[16px] mt-[16px]">
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias cum, deleniti esse est expedita nam obcaecati omnis provident quas qui, repellendus sapiente sed, similique suscipit vel vitae. Minus, voluptate!
                                            </span>
                    </div>
                    <div
                        className={'w-[253px] h-[100px] mx-auto flex items-center justify-between'}>
                        <img src="/public/images/pexels-elizabeth-ferreira-20846828.jpg" alt=""
                             className={'w-[100px] h-[100px] rounded-full'}/>
                        <div>
                                                <span
                                                    className={'text-[20px] font-semibold mb-[10px]'}>Michael Wong</span>
                            <div className="flex text-[#003BA4]">
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className={'w-[624px] h-[356px] text-center p-[24px] border-[2px] border-[#F0F5FF] px-[24px] py-[40px] rounded-[24px] bg-white'}>
                    <PiGlobeHemisphereWestThin
                        className={'w-[64px] h-[64px] mx-auto text-[#003BA4]'}/>
                    <div className="w-[544px] mx-auto mb-[16px] mt-[16px]">
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias cum, deleniti esse est expedita nam obcaecati omnis provident quas qui, repellendus sapiente sed, similique suscipit vel vitae. Minus, voluptate!
                                            </span>
                    </div>
                    <div
                        className={'w-[253px] h-[100px] mx-auto flex items-center justify-between'}>
                        <img src="/public/images/pexels-elizabeth-ferreira-20846828.jpg" alt=""
                             className={'w-[100px] h-[100px] rounded-full'}/>
                        <div>
                                                <span
                                                    className={'text-[20px] font-semibold mb-[10px]'}>Michael Wong</span>
                            <div className="flex text-[#003BA4]">
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                                <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};