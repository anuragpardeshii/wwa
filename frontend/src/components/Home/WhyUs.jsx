import "./WhyUs.css";
export default function WhyUs() {
    const content = [
        {
            "heading": "Wisdom World Academy - Best School for Holistic Education",
            "content": "At Wisdom World Academy, we bring years of excellence in providing world-class education. Our schools have earned accolades, awards, and appreciation from both parents and students. With highly trained educators, we ensure a strong foundation for academic and personal growth, fostering an environment that is safe, nurturing, and intellectually stimulating for young minds."
        },
        {
            "heading": "Why Wisdom World Academy is a Leading Institution in Education",
            "content": "The trust and reputation we have built over the years stem from our unwavering commitment to quality education and innovative learning methodologies. We believe every child deserves an environment that nurtures creativity, confidence, and compassion. At Wisdom World Academy, we provide a safe, inclusive, and inspiring space where students can explore their potential and excel in academics, arts, and beyond."
        },
        {
            "heading": "Comprehensive Curriculum and Progressive Learning at Wisdom World Academy",
            "content": "Our unique curriculum is designed to ignite a lifelong love for learning. With a blend of modern teaching methodologies, brain-based research, and best educational practices, we ensure that students receive a well-rounded education that encourages critical thinking and creativity. Our progressive learning approach empowers students to become independent thinkers, problem solvers, and future leaders."
        }
    ];    

    return (
        <div className="max-w-6xl mx-auto px-4">
            {content.map((data, index) => (
                <div className="data" key={index}>
                    <h3>{data.heading}</h3>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{data.content}</p>
                </div>
            ))}
        </div>
    );
}
