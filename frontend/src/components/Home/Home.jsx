import ImageSlider from "./ImageSlider";
import React from 'react';
import Pioneers from "./Pioneers";
import OurProgrammes from "../Comman/OurPrograms/OurProgrammes";
import Purpose from "./Purpose";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Awards from "./Awards";
import WhyUs from "./WhyUs";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <ImageSlider />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                viewport={{ once: true }}
            >
                <Pioneers />
            </motion.div>
            {/* <WhyUs /> */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <OurProgrammes />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <Purpose />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <Gallery />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
            >
                <Awards />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
            >
                <Testimonial />
            </motion.div>
        </>
    );
}