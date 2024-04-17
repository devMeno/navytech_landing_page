import {PiCreditCardThin, PiGlobeHemisphereWestThin, PiPaintBrushThin} from "react-icons/pi";
import {GoChevronRight} from "react-icons/go";
import {IoIosPhonePortrait} from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { PiCalendarBlankLight } from "react-icons/pi";

export default function Blog(){
    return (
        <div className={'text-center px-[80px] py-[80px]'}>
            <span className={'text-[24px]'}>Our services</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Growth based services</span>
            <div className={'flex justify-between mt-[80px]'}>
                <div className={'w-[412px] h-[503px] p-[16px]'}>
                    <div>
                        <img src="/public/images/pexels-tatiana-fet-1105766.jpg" alt=""
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
                        <img src="/public/images/pexels-tatiana-fet-1105766.jpg" alt=""
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
                        <img src="/public/images/pexels-tatiana-fet-1105766.jpg" alt=""
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
        </div>
    )
}