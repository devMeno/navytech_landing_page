"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "/src/utils/cn.js";
import Clients from "./clients.jsx";

const Direction = "TOP" || "LEFT" || "BOTTOM" || "RIGHT";

export default function BannerNumbers({
                                        children,
                                        containerClassName,
                                        className,
                                        as: Tag = "button",
                                        duration = 1,
                                        clockwise = true,
                                        text,
                                        ...props
                                    }) {
    const [hovered, setHovered] = useState(false);
    const [direction, setDirection] = useState("TOP");

    const rotateDirection = (currentDirection) => {
        const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise
            ? (currentIndex - 1 + directions.length) % directions.length
            : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };

    const movingMap = {
        TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM:
            "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT:
            "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    };

    const highlight =
        "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

    useEffect(() => {
        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered]);
    return (
        <Tag
            onMouseEnter={(event) => {
                setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex rounded-[18px] border  content-center transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-full",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "w-full text-white z-10  rounded-[inherit]",
                    className
                )}
            >
                <div className={'h-[90px] 2xl:h-[103px] bg-[#4d4c4b] rounded-[16px] text-[14px] text-center pt-3'}>
                    <h1 className={'text-[28px] 2xl:text-[36px] font-semibold'}>{children}+</h1>
                    {text}
                </div>
            </div>
            <motion.div
                className={cn(
                    "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                )}
                style={{
                    filter: "blur(2px)",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                }}
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered
                        ? [movingMap[direction], highlight]
                        : movingMap[direction],
                }}
                transition={{ ease: "linear", duration: duration ?? 1 }}
            />
        </Tag>
    );
}
