import "./Difference.css";
import Mentors from "./Mentors";
import Preschool from "./Preschool";
import bg4 from "/src/assets/images/bg6.jpg";
import differenceImage from "/src/assets/images/army/DSC_0484.JPG";

export default function Difference() {
  return (
    <div style={{ marginTop: "10vh" }}>
      <img
              className="hide-img"
              src={bg4}
              alt=""
              style={{
                position: "absolute",
                width: "100vw",
                opacity: "0.5",
                zIndex: "-100",
              }}
            />
      <div className="difference-section" >
        <div className="difference">
          <h1 className="text-center">
            What Sets Wisdom World Academy Apart from Other Preschools?
          </h1>
          <div className="aligning" style={{ padding: "0" }}>
              <img
                className="text-center"
                src={differenceImage}
                alt="Difference"
                style={{width: "70%"}}
              />
            <div className="p-6 m-4" style={{width: "90%"}}>
              <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
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
