import { PiPaintBrushThin } from "react-icons/pi";
import { GoChevronRight } from "react-icons/go";
import { PiGlobeHemisphereWestThin } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { PiCreditCardThin } from "react-icons/pi";

export default function Services(){
    return(
        <div className={'text-center px-[25px] md:px-[125px] py-[70px]'}>
            <span className={'text-[24px]'}>Our services</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Growth based services</span>
            <div className={'flex flex-wrap justify-between mt-[80px]'}>
                <div className={'w-[308px] h-[377px] text-center hover:bg-[#F0F5FF] border-[2px] border-[#F0F5FF] my-[10px] px-[24px] py-[40px]'}>
                    <img src="/public/images/services/PaintBrush.png" alt="" className={'w-[100px] h-[100px] mx-auto mb-[24px]'}/>
                    <span className={'font-semibold text-[24px]'}>
                        Branding and UI/UX
                    </span><br/>
                    <div className="w-[260px] mx-auto mb-[24px]"><span>Lorem ipsum dolor sit amet consectetur . Quam diam augue letus vivamus metus</span></div>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#"><div className={'flex items-center mx-auto'}>View details<GoChevronRight className={'h-[16px] w-[16px] ml-[3px]'}/></div></a></p>
                </div>
                <div className={'w-[308px] h-[377px] text-center hover:bg-[#F0F5FF] border-[2px] border-[#F0F5FF] my-[10px] px-[24px] py-[40px]'}>
                    <img src="/public/images/services/GlobeHemisphereWest.png" alt="" className={'w-[100px] h-[100px] mx-auto mb-[24px]'}/>
                    <span className={'font-semibold text-[24px]'}>
                        Web Development
                    </span><br/>
                    <div className="w-[260px] mx-auto mb-[24px]"><span>Lorem ipsum dolor sit amet consectetur . Quam diam augue letus vivamus metus</span></div>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#"><div className={'flex items-center mx-auto'}>View details<GoChevronRight className={'h-[16px] w-[16px] ml-[3px]'}/></div></a></p>
                </div>
                <div className={'w-[308px] h-[377px] text-center hover:bg-[#F0F5FF] border-[2px] border-[#F0F5FF] my-[10px] px-[24px] py-[40px]'}>
                    <img src="/public/images/services/DeviceMobile.png" alt="" className={'w-[100px] h-[100px] mx-auto mb-[24px]'}/>
                    <span className={'font-semibold text-[24px]'}>
                        Mobile Development
                    </span><br/>
                    <div className="w-[260px] mx-auto mb-[24px]"><span>Lorem ipsum dolor sit amet consectetur . Quam diam augue letus vivamus metus</span></div>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#"><div className={'flex items-center mx-auto'}>View details<GoChevronRight className={'h-[16px] w-[16px] ml-[3px]'}/></div></a></p>
                </div>
                <div className={'w-[308px] h-[377px] text-center hover:bg-[#F0F5FF] border-[2px] border-[#F0F5FF] my-[10px] px-[24px] py-[40px]'}>
                    <img src="/public/images/services/CreditCard.png" alt="" className={'w-[100px] h-[100px] mx-auto mb-[24px]'}/>
                    <span className={'font-semibold text-[24px]'}>
                        Digital Marketing
                    </span><br/>
                    <div className="w-[260px] mx-auto mb-[24px]"><span>Lorem ipsum dolor sit amet consectetur . Quam diam augue letus vivamus metus</span></div>
                    <p className={'mx-auto mt-[25px] text-[#003BA4] w-[148px] flex justify-center'}><a href="#"><div className={'flex items-center mx-auto'}>View details<GoChevronRight className={'h-[16px] w-[16px] ml-[3px]'}/></div></a></p>
                </div>
            </div>
        </div>
    )
}