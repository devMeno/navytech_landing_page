
import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { PiQuotesDuotone } from "react-icons/pi";
import {LiaStarSolid} from "react-icons/lia";
import {ProductService} from "./testimonials/testimonials.jsx";
import Elizabeth from "/public/images/testimonials/pexels-elizabeth-ferreira-20846828.webp"

export default function ResponsiveDemo() {
    const [products, setProducts] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div
                className={'w-[95%] md:w-[624px] h-[250px] md:h-[356px] text-center md:p-[24px] mx-[10px] border-[2px] border-[#F0F5FF] px-[10px] py-[10px] rounded-[15px] md:rounded-[24px] bg-white mt-[35px]'}>
                <PiQuotesDuotone
                    className={'w-[40px] md:w-[64px] h-[40px] md:h-[64px] mx-auto text-[#003BA4]'}/>
                <div className="w-full md:w-[544px] mx-auto mb-[8px] md:mb-[16px] mt-[16px] text-[14px] md:text-[20px]">
                    <span>{product.text}</span>
                </div>
                <div
                    className={'w-[115px] md:w-[233px] md:h-[100px] mx-auto flex items-center justify-between'}>
                    <img src={Elizabeth} alt=""
                         className={'w-[40px] md:w-[100px] h-[40px] md:h-[100px] rounded-full'}/>
                    <div>
                        <span className={'text-[12px] md:text-[20px] font-semibold md:mb-[10px]'}>{product.name}</span>
                        <div className="flex text-[#003BA4]">
                            <LiaStarSolid className={'w-[14px] h-[14px] md:w-[24px] md:h-[24px]'}/>
                            <LiaStarSolid className={'w-[14px] h-[14px] md:w-[24px] md:h-[24px]'}/>
                            <LiaStarSolid className={'w-[14px] h-[14px] md:w-[24px] md:h-[24px]'}/>
                            <LiaStarSolid className={'w-[14px] h-[14px] md:w-[24px] md:h-[24px]'}/>
                            <LiaStarSolid className={'w-[14px] h-[14px] md:w-[24px] md:h-[24px]'}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className=" mx-[10px] md:mx-[100px] bg-[#F0F5FF]">
            <Carousel value={products} numScroll={1} numVisible={2} responsiveOptions={responsiveOptions}
                      itemTemplate={productTemplate}/>
        </div>
    )
}
