import "./Difference.css"
import Preschool from "./Preschool";

export default function Difference() {
  return (
    <>
      <div className="difference" style={{ marginTop: "10vh" }}>
        <h1 className="text-center">What Sets Wisdom World Academy Apart from Other Preschools?</h1>
        <div className="row">
        <div className="col" style={{padding: "0"}}>
        <p>
          At Wisdom World Academy, we prioritize the holistic development of
          each child. Our approach goes beyond academics, fostering
          intellectual, emotional, social, and creative growth in a nurturing
          and dynamic environment. We blend innovative teaching methods with
          traditional values to create engaging learning experiences tailored to
          each child’s unique needs. Our passionate educators provide
          personalized attention, helping every child reach their full potential
          in a safe, supportive atmosphere.
        </p>
        <p>
          In addition to fostering creativity and critical thinking, we
          emphasize the importance of parent involvement. Through open
          communication and active participation, we ensure that parents are
          integral to their child’s learning journey. With state-of-the-art
          facilities and a focus on preparing children for lifelong success,
          Wisdom World Academy is more than just a preschool—it’s an experience
          that sets the foundation for future achievement.
        </p>
        </div>
        <div className="col-5">
        <img src="/src/assets/images/difference.jpeg" style={{width: "100%", borderRadius: "2rem", margin: "0 1rem"}} alt="" />
        </div>
        </div>
        <Preschool />
      </div>
    </>
  );
}
