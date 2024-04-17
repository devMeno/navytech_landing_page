

export default function Portfolio(){
    return(
        <div className={'text-center text-white bg-black px-[80px] py-[80px]'}>
            <span className={'text-[24px]'}>Porfolio</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Our previous works</span>
            <div className={'flex flex-wrap  mt-[80px] justify-between'}>
                <img src="public/images/pexels-tima-miroshnichenko-5725433.jpg" alt="" className={'w-[435px] h-[320px] mb-[25px]'}/>
                <img src="public/images/pexels-tima-miroshnichenko-5725433.jpg" alt="" className={'w-[435px] h-[320px] mb-[25px]'}/>
                <img src="public/images/pexels-tima-miroshnichenko-5725433.jpg" alt="" className={'w-[435px] h-[320px] mb-[25px]'}/>
                <img src="public/images/pexels-tima-miroshnichenko-5725433.jpg" alt="" className={'w-[435px] h-[320px]'}/>
                <img src="public/images/pexels-tima-miroshnichenko-5725433.jpg" alt="" className={'w-[435px] h-[320px]'}/>
                <img src="public/images/pexels-tima-miroshnichenko-5725433.jpg" alt="" className={'w-[435px] h-[320px]'}/>
            </div>
            <button type="button"
                    className="text-white text-[24px] bg-[#003BA4] h-[82px] mb-[25px] w-[323px] mt-[80px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                View more
            </button>
        </div>
    )
}