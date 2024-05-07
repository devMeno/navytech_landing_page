import ResponsiveDemo from "./caroussel.jsx";

export default function Testimonial(){

    return (
        <div className={'text-center px-0  py-[35px] md:py-[80px] bg-[#F0F5FF]'}>
            <span className={'text-[24px]'}>Testimonial</span><br/>
            <span className={'font-semibold text-[36px] -mt-[50px]'}>What our clients say</span>
            <ResponsiveDemo/>
        </div>
    )
}