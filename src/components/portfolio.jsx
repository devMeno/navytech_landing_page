import {GoArrowRight} from "react-icons/go";


export default function Portfolio(){
    return(
        <div className={'text-center text-white bg-[#000816] px-[25px] md:px-[125px] py-[80px]'}>
            <span className={'text-[24px]'}>Porfolio</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Our previous works</span>
            <div className={'flex flex-wrap  mt-[80px] justify-between'}>
                <img src="/public/images/portfolio/portfolioPicture1.png" alt=""
                     className={'w-[405.33px] h-[320px] mb-[25px]'}/>
                <img src="/public/images/portfolio/portfolioPicture2.png" alt=""
                     className={'w-[405.33px] h-[320px] mb-[25px]'}/>
                <img src="/public/images/portfolio/portfolioPicture3.png" alt=""
                     className={'w-[405.33px] h-[320px] mb-[25px]'}/>
                <img src="/public/images/portfolio/portfolioPicture4.png" alt="" className={'w-[405.33px] h-[320px]'}/>
                <img src="/public/images/portfolio/portfolioPicture5.png" alt="" className={'w-[405.33px] h-[320px]'}/>
                <img src="/public/images/portfolio/portfolioPicture6.png" alt="" className={'w-[405.33px] h-[320px]'}/>
            </div>
            <button type="button"
                    className="text-white text-[24px] bg-[#003BA4] h-[82px] mb-[25px] w-[323px] mt-[80px] font-medium rounded-lg text-sm px-5 py-2.5 me-2 text-center">
                <span className={'inline-block'}><span className={'text-[24px] flex items-center mx-auto'}>View more<GoArrowRight className={'w-34px] h-[34px] ml-[10px]'}/></span></span>
            </button>
        </div>
    )
}