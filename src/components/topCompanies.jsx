import Google from "/public/images/topCompanies/Google Logotype.png"
import Canva from "/public/images/topCompanies/Canva Logotype.png"
import Amazon from "/public/images/topCompanies/Amazon Logotype.png"
import Sketch from "/public/images/topCompanies/Sketch Logotype.png"
import {motion} from "framer-motion";

export default function TopCompanies(){
    return(
        <div className={' bg-[#003BA4] h-[70px] md:h-[90px] 2xl:h-[156px] text-white flex items-center px-0 xl:px-[100px] 2xl:px-[125px] justify-between'}>
            <div className={'hidden xl:block'}>
                <span className={'text-[15px] 2xl:text-[24px]'}>Trusted by</span><br/>
                <span className={'font-semibold text-[20px] 2xl:text-[32px]'}>Top Companies</span>
            </div>
            <div className={'flex justify-between w-full xl:w-[80%] 2xl:w-[70%] text-left md:text-right'}>
                <motion.img initial={{y:-90 , opacity:0}} animate={{y:0 , opacity:1}} transition={{duration:0.5 , ease:"easeOut"}} src={Google} alt="" className={'h-[30px] md:h-[50px] 2xl:h-[75px]'}/>
                <motion.img initial={{y:-90 , opacity:0}} animate={{y:0 , opacity:1}} transition={{duration:0.5 , ease:"easeOut"}} src={Canva} alt="" className={'h-[30px] md:h-[50px] 2xl:h-[75px]'} />
                <motion.img initial={{y:-90 , opacity:0}} animate={{y:0 , opacity:1}} transition={{duration:0.5 , ease:"easeOut"}} src={Amazon} alt="" className={'h-[30px] md:h-[50px] 2xl:h-[75px]'}/>
                <motion.img initial={{y:-90 , opacity:0}} animate={{y:0 , opacity:1}} transition={{duration:0.5 , ease:"easeOut"}} src={Sketch} alt="" className={'h-[30px] md:h-[50px] 2xl:h-[75px]'}/>
            </div>
        </div>
    )
}