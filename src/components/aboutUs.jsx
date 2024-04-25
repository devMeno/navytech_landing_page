import {GoArrowRight} from "react-icons/go";

export default function AboutUs(){
    return(
        <div className={'text-center px-[25px] md:px-[50px] 2xl:px-[125px] py-[35px] md:py-[80px]'}>
            <span className={'text-[24px]'}>About us</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Why we are bests</span>
            <div className="flex justify-between mt-[35px] md:mt-[80px]">
                <div className={'hidden w-[620px] h-[522px] lg:flex justify-between'}>
                    <div className={'relative'}>
                        <img src="/public/images/aboutUs/aboutUs1.png" alt="" className={'w-[302px] h-[346px]'}/>
                        <img src="/public/images/aboutUs/aboutUs2.png" alt="" className={'w-[302px] h-[160px] absolute bottom-0'}/>
                    </div>
                    <div><img src="/public/images/aboutUs/aboutUs3.png" alt="" className={'w-[302px] h-full'}/></div>
                </div>
                <div
                    className={'w-[620px] lg:h-[522px] text-left text-[18px] sm:text-[20px] grid grid-cols-1 gap-[20px] md:gap-[35px] content-between mx-auto justify-center'}>
                    <span>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                    </span>
                    <div className="flex justify-between">
                        <img src="/public/images/aboutUs/icons/Eye.png" alt="" className={'w-[50px] md:w-[80px] h-[50px] md:h-[80px]'}/>
                        <div className={'w-[524px]'}>
                            <span className={'font-semibold text-[25px] sm:text-[32px]'}>Our Vision</span><br/>
                            <span className={'text-[18px] sm:text-[20px]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque cupiditate delectus .</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <img src="/public/images/aboutUs/icons/Target.png" alt="" className={'w-[50px] md:w-[80px] h-[50px] md:h-[80px]'}/>
                        <div className={'w-[524px]'}>
                            <span className={'font-semibold text-[25px] sm:text-[32px]'}>Our Mission</span><br/>
                            <span className={'text-[18px] sm:text-[20px]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cumque cupiditate delectus .</span>
                        </div>
                    </div>
                    <div className={'w-[200px] md:w-[323px] mx-auto 2xl:ml-0'}>
                        <button type="button"
                            className="text-white mx-auto 2xl:ml-[70px] text-[24px] bg-[#003BA4] h-[60px] md:h-[82px] md:mb-[25px] w-[200px] md:w-[323px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center">
                        <span className={'inline-block'}><span className={'text-[15px] md:text-[24px] flex items-center mx-auto'}>Read more<GoArrowRight
                            className={'w-34px] h-[34px] ml-[10px]'}/></span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}