
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import {PiGlobeHemisphereWestThin} from "react-icons/pi";
import {LiaStarSolid} from "react-icons/lia";
import {ProductService} from "./testimonials/testimonials.jsx";

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
                className={'md:w-[624px] h-[250px] md:h-[356px] text-center md:p-[24px] mx-[10px] border-[2px] border-[#F0F5FF] px-[24px] py-[40px] rounded-[24px] bg-white'}>
                <PiGlobeHemisphereWestThin
                    className={'w-[40px] md:w-[64px] h-[40px] md:h-[64px] mx-auto text-[#003BA4]'}/>
                <div className="w-[544px] mx-auto mb-[16px] mt-[16px]">
                    <span>{product.text}</span>
                </div>
                <div
                    className={'w-[150px] md:w-[253px] h-[100px] mx-auto flex items-center justify-between'}>
                    <img src="/public/images/pexels-elizabeth-ferreira-20846828.jpg" alt=""
                         className={'w-[40px] md:w-[100px] h-[40px] md:h-[100px] rounded-full'}/>
                    <div>
                        <span className={'text-[20px] font-semibold mb-[10px]'}>{product.name}</span>
                        <div className="flex text-[#003BA4]">
                            <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                            <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                            <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                            <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                            <LiaStarSolid className={'w-[24px] h-[24px]'}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className=" mx-[25px] md:mx-[100px] bg-green-500">
            <Carousel value={products} numScroll={1} numVisible={2} responsiveOptions={responsiveOptions}
                      itemTemplate={productTemplate}/>
        </div>
    )
}
