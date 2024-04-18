import {PiCreditCardThin, PiGlobeHemisphereWestThin, PiPaintBrushThin} from "react-icons/pi";
import {GoArrowRight, GoChevronRight} from "react-icons/go";
import {IoIosPhonePortrait} from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { PiCalendarBlankLight } from "react-icons/pi";

export default function Blog(){
    return (
        <div className={'text-center px-[125px] py-[80px]'}>
            <span className={'text-[24px]'}>Our services</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Growth based services</span>
            <div className={'flex justify-between mt-[80px]'}>
                <div className={'w-[412px] h-[503px] p-[16px]'}>
                    <div>
                        <img src="/public/images/blog/blog1.png" alt=""
                             className={'h-[300px] w-[379px] rounded-[8px] mb-[15px]'}/>
                    </div>
                    <div className={'w-full flex justify-between'}>
                        <div className={'flex'}>
                            <GoPerson className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px]'}>John Doe</span>
                        </div>
                        <div className={'flex'}>
                            <PiCalendarBlankLight className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px]'}>Feb 23 , 2024</span>
                        </div>
                    </div>
                    <p className={'font-semibold text-[24px] my-[20px] text-left'}>Lorem ipsum dolor sit amet,
                        consectetur </p>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                        <div className={'flex items-center mx-auto'}>View details<GoChevronRight
                            className={'h-[16px] w-[16px] ml-[3px]'}/></div>
                    </a></p>
                </div>
                <div className={'w-[412px] h-[503px] p-[16px]'}>
                    <div>
                        <img src="/public/images/blog/blog2.png" alt=""
                             className={'h-[300px] w-[379px] rounded-[8px] mb-[15px]'}/>
                    </div>
                    <div className={'w-full flex justify-between'}>
                        <div className={'flex'}>
                            <GoPerson className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px]'}>John Doe</span>
                        </div>
                        <div className={'flex'}>
                            <PiCalendarBlankLight className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px]'}>Feb 23 , 2024</span>
                        </div>
                    </div>
                    <p className={'font-semibold text-[24px] my-[20px] text-left'}>Lorem ipsum dolor sit amet,
                        consectetur </p>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                        <div className={'flex items-center mx-auto'}>View details<GoChevronRight
                            className={'h-[16px] w-[16px] ml-[3px]'}/></div>
                    </a></p>
                </div>
                <div className={'w-[412px] h-[503px] p-[16px]'}>
                    <div>
                        <img src="/public/images/blog/blog3.png" alt=""
                             className={'h-[300px] w-[379px] rounded-[8px] mb-[15px]'}/>
                    </div>
                    <div className={'w-full flex justify-between'}>
                        <div className={'flex'}>
                            <GoPerson className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px]'}>John Doe</span>
                        </div>
                        <div className={'flex'}>
                            <PiCalendarBlankLight className={'w-[17px] h-[17px] text-[#003BA4]'}/>
                            <span className={'text-[14px]'}>Feb 23 , 2024</span>
                        </div>
                    </div>
                    <p className={'font-semibold text-[24px] my-[20px] text-left'}>Lorem ipsum dolor sit amet,
                        consectetur </p>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#">
                        <div className={'flex items-center mx-auto'}>View details<GoChevronRight
                            className={'h-[16px] w-[16px] ml-[3px]'}/></div>
                    </a></p>
                </div>
            </div>
            <button type="button"
                    className="text-white text-[24px] bg-[#003BA4] h-[82px] mb-[25px] w-[323px] mt-[80px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center">
                <span className={'inline-block'}><span
                    className={'text-[24px] flex items-center mx-auto'}>View more<GoArrowRight
                    className={'w-34px] h-[34px] ml-[10px]'}/></span></span>
            </button>
        </div>
    )
}