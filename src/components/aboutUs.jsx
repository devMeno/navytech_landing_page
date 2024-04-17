import { PiEyeDuotone } from "react-icons/pi";
import { GoGoal } from "react-icons/go";

export default function AboutUs(){
    return(
        <div className={'text-center px-[125px] py-[80px]'}>
            <span className={'text-[24px]'}>About us</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Why we are bests</span>
            <div className="flex justify-between mt-[80px]">
                <div className={'w-[620px] h-[522px] flex justify-between'}>
                    <div className={'relative'}>
                        <img src="/public/images/pexels-line-knipst-19008730.jpg" alt="" className={'w-[302px] h-[346px]'}/>
                        <img src="/public/images/pexels-tatiana-fet-1105766.jpg" alt="" className={'w-[302px] h-[160px] absolute bottom-0'}/>
                    </div>
                    <div><img src="/public/images/pexels-elizabeth-ferreira-20846828.jpg" alt="" className={'w-[302px] h-full'}/></div>
                </div>
                <div className={'w-[620px] h-[522px] text-left text-[20px] grid grid-cols-1 gap-[35px] content-between'}>
                    <span>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                    </span>
                    <div className="flex justify-between">
                        <PiEyeDuotone className={'w-[80px] h-[80px] text-[#003BA4]'}/>
                        <div className={'w-[524px]'}>
                            <span className={'font-semibold text-[32px]'}>Our Vision</span><br/>
                            <span className={'text-[20px]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque cupiditate delectus .</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <GoGoal className={'w-[80px] h-[80px] text-[#003BA4]'}/>
                        <div className={'w-[524px]'}>
                            <span className={'font-semibold text-[32px]'}>Our Mission</span><br/>
                            <span className={'text-[20px]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque cupiditate delectus .</span>
                        </div>
                    </div>
                    <button type="button"
                            className="text-white text-[24px] bg-[#003BA4] h-[82px] mb-[25px] w-[323px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Book a call
                    </button>
                </div>
            </div>
        </div>
    )
}