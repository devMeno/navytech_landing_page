import {motion, useMotionValue, useTransform , animate} from "framer-motion";
import {useEffect} from "react";

const Years = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))

    useEffect(() => {
        const controls = animate(count, 20 , {duration:6})

        return controls.stop
    }, [])

    return <motion.span>{rounded}</motion.span>
};

export default Years;