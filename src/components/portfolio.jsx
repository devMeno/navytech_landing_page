import {GoArrowRight} from "react-icons/go";


export default function Portfolio(){
    return(
        <div className={'text-center text-white bg-[#000816] px-[25px] xl:px-[125px] py-[35px] md:py-[80px]'}>
            <span className={'text-[24px]'}>Porfolio</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Our previous works</span>
            <div className={'flex flex-wrap mt-[35px]  md:mt-[80px] justify-between'}>
                <img src="/public/images/portfolio/portfolioPicture1.png" alt=""
                     className={'w-[405.33px] h-[320px] mb-[12px] mt-[12px] mx-auto justify-center'}/>
                <img src="/public/images/portfolio/portfolioPicture2.png" alt=""
                     className={'w-[405.33px] h-[320px] mb-[12px] mt-[12px] mx-auto justify-center'}/>
                <img src="/public/images/portfolio/portfolioPicture3.png" alt=""
                     className={'w-[405.33px] h-[320px] mb-[12px] mt-[12px] mx-auto justify-center'}/>
                <img src="/public/images/portfolio/portfolioPicture4.png" alt=""
                     className={'w-[405.33px] h-[320px] mb-[12px] mt-[12px] mx-auto justify-center'}/>
                <img src="/public/images/portfolio/portfolioPicture5.png" alt=""
                     className={'w-[405.33px] h-[320px] mb-[12px] mt-[12px] mx-auto justify-center'}/>
                <img src="/public/images/portfolio/portfolioPicture6.png" alt=""
                     className={'w-[405.33px] h-[320px] mb-[12px] mt-[12px] mx-auto justify-center'}/>
            </div>
            <button type="button"
                    className="mt-[35px] md:mt-[80px] text-white text-[24px] bg-[#003BA4] h-[60px] md:h-[82px] md:mb-[25px] w-[200px] md:w-[323px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center mx-auto justify-center">
                        <span className={'inline-block'}><span
                            className={'text-[15px] md:text-[24px] flex items-center mx-auto'}>View more<GoArrowRight
                            className={'w-34px] h-[34px] ml-[10px]'}/></span></span>
            </button>
        </div>
    )
}