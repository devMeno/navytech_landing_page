export default function TopCompanies(){
    return(
        <div className={' bg-[#003BA4] h-[156px] text-white flex items-center px-[125px] justify-between'}>
            <div>
                <span className={'text-[24px]'}>Trusted by</span><br/>
                <span className={'font-semibold text-[32px]'}>Top Companies</span>
            </div>
            <div className={'flex justify-between w-[70%] text-right'}>
                <img src="/public/images/topCompanies/Google%20Logotype.png" alt="" className={'h-[75px]'}/>
                <img src="/public/images/topCompanies/Canva%20Logotype.png" alt="" className={'h-[75px]'} />
                <img src="/public/images/topCompanies/Amazon Logotype.png" alt="" className={'h-[75px]'}/>
                <img src="/public/images/topCompanies/Sketch%20Logotype.png" alt="" className={'h-[75px]'}/>
            </div>
        </div>
    )
}