import {motion, useMotionValue, useTransform , animate} from "framer-motion";
import {useEffect} from "react";

const Projects = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))

    useEffect(() => {
        const controls = animate(count, 75 , {duration:6})

        return controls.stop
    }, [])

    return <><motion.span>{rounded}</motion.span><span>K</span></>
};

export default Projects;