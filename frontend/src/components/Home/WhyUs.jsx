import "./WhyUs.css";
export default function WhyUs() {
    const content = [
        {
            heading: "Kangaroo Kids - Best International Preschool in Education for Kids",
            content: "We at Kangaroo Kids bring over 30 years of experience in the preschool space. Kangaroo Kids International Preschools as well as Billabong High International Schools have received accolades, awards and appreciation from parents as well as students. With specially trained teachers, our centres ensure that their foundation for preschool and eventually school, is well-rounded, while also being a safe and colourful environment for children to get acquainted with others of their age."
        },
        {
            heading: "Why Kangaroo Kids is one of the top Kindergarten Schools",
            content: "The trust and goodwill that we have built over the years is based on the passion we have invested in education and evolved learning systems. We believe that every child deserves an atmosphere of creativity, compassion and confidence. At all Kangaroo Kids play schools, nursery schools and kindergartens across India and abroad, we ensure a safe, bias-free environment for children to learn and blossom in."
        },
        {
            heading: "Preschool Education / Preschool Curriculum / Kindergarten Learning",
            content: "Our unique curriculum is designed with the objective to make children addicted to learning! The methodology ensures that learning is thought provoking and empowering since it is based on the latest theories, brain research and best practices in education."
        }
    ];

    return (
        <div className="whyus-section">
            {content.map((data, index) => (
                <div className="data" key={index}>
                    <h3>{data.heading}</h3>
                    <p>{data.content}</p>
                </div>
            ))}
        </div>
    );
}
