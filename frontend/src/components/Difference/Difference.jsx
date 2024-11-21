import "./Difference.css";
import Mentors from "./Mentors";
import Preschool from "./Preschool";

export default function Difference() {
  return (
    <div>
      <div className="difference-section" style={{ marginTop: "5vh" }}>
        <div className="difference">
          <h1 className="text-center">
            What Sets Wisdom World Academy Apart from Other Preschools?
          </h1>
          <div className="aligning" style={{ padding: "0" }}>
            <div className="text-center">
              <img
                src="/src/assets/images/difference.jpg"
                style={{ borderRadius: ".5rem", width: "75%", margin: "auto" }}
                alt=""
              />
            </div>
            <div style={{ padding: "3rem 2rem 0 2rem" }}>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                At Wisdom World Academy, we prioritize the holistic development
                of each child. Our approach goes beyond academics, fostering
                intellectual, emotional, social, and creative growth in a
                nurturing and dynamic environment. We blend innovative teaching
                methods with traditional values to create engaging learning
                experiences tailored to each child’s unique needs. Our
                passionate educators provide personalized attention, helping
                every child reach their full potential in a safe, supportive
                atmosphere. In addition to fostering creativity and critical
                thinking, we emphasize the importance of parent involvement.
                Through open communication and active participation, we ensure
                that parents are integral to their child’s learning journey.
                With state-of-the-art facilities and a focus on preparing
                children for lifelong success, Wisdom World Academy is more than
                just a preschool—it’s an experience that sets the foundation for
                future achievement.
              </p>
            </div>
          </div>
        </div>
        <Preschool />
        <Mentors />
      </div>
    </div>
  );
}
