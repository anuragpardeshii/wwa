import "./Difference.css";
import Mentors from "./Mentors";
import Preschool from "./Preschool";
// import bg4 from "/src/assets/images/bg6.jpg";
import differenceImage from "/src/assets/images/army/DSC_0484.JPG";

export default function Difference() {
  return (
    <div>
      {/* <img
              className="hide-img"
              src={bg4}
              alt=""
              style={{
                position: "absolute",
                width: "100vw",
                opacity: "0.5",
                zIndex: "-100",
              }}
            /> */}
      <div className="difference-section">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl p-4">
            What Sets Wisdom World Academy Apart from Other Preschools?
          </h1>
          <div className="p-4 max-w-6xl mx-auto">
            <img
              className="text-center m-2 mx-auto rounded-lg"
              style={{ maxHeight: "25rem" }}
              src={differenceImage}
              alt="Difference"
            />
            <div className="mx-auto m-4 p-2">
              <h4 className="text-lg text-center lg:text-xl ">
                At Wisdom World Academy, we prioritize the holistic development
                of each child. Our approach goes beyond academics, fostering
                intellectual, emotional, social, and creative growth in a
                nurturing and dynamic environment. We blend innovative teaching
                methods with traditional values to create engaging learning
                experiences tailored to each child’s unique needs. Our passionate educators provide personalized attention, helping
                every child reach their full potential in a safe, supportive
                atmosphere.
              </h4>
            </div>
          </div>
        </div>
        <Preschool />
        <Mentors />
      </div>
    </div>
  );
}
