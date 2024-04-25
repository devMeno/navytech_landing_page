export default function TopCompanies(){
    return(
        <div className={' bg-[#003BA4] h-[70px] md:h-[90px] 2xl:h-[156px] text-white flex items-center px-0 2xl:px-[125px] justify-between'}>
            <div className={'hidden 2xl:block'}>
                <span className={'text-[24px]'}>Trusted by</span><br/>
                <span className={'font-semibold text-[32px]'}>Top Companies</span>
            </div>
            <div className={'flex justify-between w-full 2xl:w-[70%] text-left md:text-right'}>
                <img src="/public/images/topCompanies/Google%20Logotype.png" alt="" className={'h-[30px] md:h-[50px] 2xl:h-[75px]'}/>
                <img src="/public/images/topCompanies/Canva%20Logotype.png" alt="" className={'h-[30px] md:h-[50px] 2xl:h-[75px]'} />
                <img src="/public/images/topCompanies/Amazon Logotype.png" alt="" className={'h-[30px] md:h-[50px] 2xl:h-[75px]'}/>
                <img src="/public/images/topCompanies/Sketch%20Logotype.png" alt="" className={'h-[30px] md:h-[50px] 2xl:h-[75px]'}/>
            </div>
        </div>
    )
}