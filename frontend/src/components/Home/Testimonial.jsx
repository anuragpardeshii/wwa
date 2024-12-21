import React, { useState } from "react";

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
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/john-doe.png",
    },
    {
      quote:
        "We love using this tool! It's incredibly useful and saves us so much time building SaaS applications.",
      name: "Jane Smith",
      role: "Product Manager at Amazon",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jane-smith.png",
    },
    {
      quote:
        "Fantastic! The best decision we made for our application was integrating Flowbite's components.",
      name: "Sarah Johnson",
      role: "CEO at Microsoft",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sarah-johnson.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <img
      className="hide-img"
        src="/src/assets/images/formbg.png"
        alt=""
        style={{
          position: "absolute",
          width: "100vw",
          opacity: "0.5",
          marginTop: "-10vh",
          zIndex: "-100"
        }}
      />
      <div
        className="flex items-center testinominal"
        style={{ margin: "2% 8%", minHeight: "35vh" }}
      >
        <div>
          <button
            onClick={handlePrev}
            className="px-5 py-3 circle-radius text-white rounded-md "
            style={{zIndex: "100000"}}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              alt="Previous"
              style={{zIndex: "100000"}}
            />
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
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                {testimonials[currentIndex].name}
              </cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                {testimonials[currentIndex].role}
              </cite>
            </div>
          </figcaption>
        </figure>
        <div>
          <button
            onClick={handleNext}
            className="px-5 py-3 text-white circle-radius"
            style={{zIndex: "100000"}}
          >
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              alt="Next"
              style={{zIndex: "100000"}}
            />
          </button>
        </div>
      </div>
    </>
  );
}
