import { PiEyeDuotone } from "react-icons/pi";
import {GoArrowRight, GoGoal} from "react-icons/go";

export default function AboutUs(){
    return(
        <div className={'text-center px-[125px] py-[80px]'}>
            <span className={'text-[24px]'}>About us</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Why we are bests</span>
            <div className="flex justify-between mt-[80px]">
                <div className={'w-[620px] h-[522px] flex justify-between'}>
                    <div className={'relative'}>
                        <img src="/public/images/aboutUs/aboutUs1.png" alt="" className={'w-[302px] h-[346px]'}/>
                        <img src="/public/images/aboutUs/aboutUs2.png" alt="" className={'w-[302px] h-[160px] absolute bottom-0'}/>
                    </div>
                    <div><img src="/public/images/aboutUs/aboutUs3.png" alt="" className={'w-[302px] h-full'}/></div>
                </div>
                <div
                    className={'w-[620px] h-[522px] text-left text-[20px] grid grid-cols-1 gap-[35px] content-between'}>
                    <span>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                    </span>
                    <div className="flex justify-between">
                        <img src="/public/images/aboutUs/icons/Eye.png" alt="" className={'w-[80px] h-[80px]'}/>
                        <div className={'w-[524px]'}>
                            <span className={'font-semibold text-[32px]'}>Our Vision</span><br/>
                            <span className={'text-[20px]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque cupiditate delectus .</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <img src="/public/images/aboutUs/icons/Target.png" alt="" className={'w-[80px] h-[80px]'}/>
                        <div className={'w-[524px]'}>
                            <span className={'font-semibold text-[32px]'}>Our Mission</span><br/>
                            <span className={'text-[20px]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque cupiditate delectus .</span>
                        </div>
                    </div>
                    <button type="button"
                            className="text-white text-[24px] bg-[#003BA4] h-[82px] mb-[25px] w-[323px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center">
                        <span className={'inline-block'}><span className={'text-[24px] flex items-center mx-auto'}>Read more<GoArrowRight
                            className={'w-34px] h-[34px] ml-[10px]'}/></span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}