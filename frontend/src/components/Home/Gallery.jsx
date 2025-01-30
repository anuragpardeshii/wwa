import React from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Importing images
import img1 from "/src/assets/images/army/DSC_0492.JPG";
import img2 from "/src/assets/images/army/planting.jpg";
import img3 from "/src/assets/images/ourPurpose.png";
import img4 from "/src/assets/images/army/DSC_0529.JPG";
import img5 from "/src/assets/images/army/DSC_0640.JPG";
import img6 from "/src/assets/images/army/DSC_0585.JPG";
import img7 from "/src/assets/images/army/DSC_0441.JPG";
import img8 from "/src/assets/images/army/DSC_0589.JPG";

export default function Gallery() {
  const navigate = useNavigate();
  return (
    <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
    <div className=" mx-auto p-4 max-w-6xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img className="h-auto max-w-full rounded-lg" src={img1} alt="Image 1" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <img className="h-auto max-w-full rounded-lg" src={img2} alt="Planting" />
          </motion.div>
        </div>
        <div className="grid gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img className="h-auto max-w-full rounded-lg" src={img3} alt="Our Purpose" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <img className="h-auto max-w-full rounded-lg" src={img4} alt="Image 4" />
          </motion.div>
        </div>
        <div className="grid gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img className="min-hide h-auto max-w-full rounded-lg" src={img5} alt="Image 5" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <img className="min-hide h-auto max-w-full rounded-lg" src={img6} alt="Image 6" />
          </motion.div>
        </div>
        <div className="grid gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img className="min-hide h-auto max-w-full rounded-lg" src={img7} alt="Image 7" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <img className="min-hide h-auto max-w-full rounded-lg" src={img8} alt="Image 8" />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-10">
        <motion.a
          type="button"
          href="/media"
          className="bg-blue1 mb-8 text-white flex gap-2 bg-blue-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See More
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </motion.a>
      </div>
    </div>
    </motion.div>
  );
}