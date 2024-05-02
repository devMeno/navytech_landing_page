import ResponsiveDemo from "./caroussel.jsx";

export default function Testimonial(){

    return (
        <div className={'text-center px-0  py-[35px] md:py-[80px] bg-[#F0F5FF]'}>
            <span className={'text-[24px]'}>About us</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>Why we are bests</span>
            <ResponsiveDemo/>
        </div>
    )
}