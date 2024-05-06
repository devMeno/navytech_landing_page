import {motion, useMotionValue, useTransform , animate} from "framer-motion";
import {useEffect} from "react";

const Clients = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))

    useEffect(() => {
        const controls = animate(count, 400 , {duration:6})

        return controls.stop
    }, [])

    return <motion.span>{rounded}</motion.span>
};

export default Clients;