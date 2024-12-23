import React, { useState } from "react";
import formbg1 from "/src/assets/images/formbg.png";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
      name: "Michael Gough",
      role: "CEO at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "This is another great testimonial example. The components are easy to use, and the interface is intuitive and modern.",
      name: "John Doe",
      role: "CTO at Facebook",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "We love using this tool! It's incredibly useful and saves us so much time building SaaS applications.",
      name: "Jane Smith",
      role: "Product Manager at Amazon",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "Fantastic! The best decision we made for our application was integrating Flowbite's components.",
      name: "Sarah Johnson",
      role: "CEO at Microsoft",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)
    );
  };

  return (
    <>
      <img
        className="hide-img"
        src={formbg1}
        alt=""
        style={{
          position: "absolute",
          width: "100vw",
          opacity: "0.5",
          zIndex: "-100",
        }}
      />
      <div className="relative w-full">
        <div className="relative overflow-hidden rounded-lg h-56 md:h-96">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <figure className="max-w-screen-md mx-auto text-center">
                <blockquote>
                  <p className="min-text italic font-medium text-gray-900 dark:text-white">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={testimonial.image}
                    alt="profile"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </cite>
                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{backgroundColor: "rgb(255, 199, 1)", zIndex: "1"}}>
            <svg
              className="w-4 h-4 text-white"
              style={{zIndex: "1"}}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{backgroundColor: "rgb(255, 199, 1)"}}>
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}
