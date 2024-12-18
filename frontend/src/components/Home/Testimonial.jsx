import React, { useState } from "react";

// Import images
import michaelImage from "../assets/images/michael-gouch.png";
import johnImage from "../assets/images/john-doe.png";
import janeImage from "../assets/images/jane-smith.png";
import sarahImage from "../assets/images/sarah-johnson.png";
import prevIcon from "../assets/images/slider-prev.svg";
import nextIcon from "../assets/images/slider-next.svg";

export default function Testimonial() {
    const testimonials = [
        {
            quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
            name: "Michael Gough",
            role: "CEO at Google",
            image: michaelImage,
        },
        {
            quote: "This is another great testimonial example. The components are easy to use, and the interface is intuitive and modern.",
            name: "John Doe",
            role: "CTO at Facebook",
            image: johnImage,
        },
        {
            quote: "We love using this tool! It's incredibly useful and saves us so much time building SaaS applications.",
            name: "Jane Smith",
            role: "Product Manager at Amazon",
            image: janeImage,
        },
        {
            quote: "Fantastic! The best decision we made for our application was integrating Flowbite's components.",
            name: "Sarah Johnson",
            role: "CEO at Microsoft",
            image: sarahImage,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex items-center testinominal" style={{ margin: "2% 8%" }}>
            <div>
                <button
                    onClick={handlePrev}
                    className="px-5 py-3 circle-radius text-white rounded-md "
                >
                    <img src={prevIcon} alt="Previous" />
                </button>
            </div>
            <figure className="max-w-screen-md mx-auto text-center">
                <svg
                    className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="min-text italic font-medium text-gray-900 dark:text-white">
                        "{testimonials[currentIndex].quote}"
                    </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                    <img
                        className="w-6 h-6 rounded-full"
                        src={testimonials[currentIndex].image}
                        alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">{testimonials[currentIndex].name}</cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].role}</cite>
                    </div>
                </figcaption>
            </figure>
            <div>
                <button
                    onClick={handleNext}
                    className="px-5 py-3 text-white circle-radius"
                >
                    <img src={nextIcon} alt="Next" />
                </button>
            </div>
        </div>
    );
}
