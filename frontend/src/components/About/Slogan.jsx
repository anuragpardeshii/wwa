import "./About.css";
import patternDown from "/src/assets/images/wave-down.svg";

export default function Slogan() {
  return (
    <>
    <div className="slogan">
      
<blockquote className="small-text text-3xl text-center max-w-6xl mx-auto  font-semibold text-gray-900 text-white">
    <p>"Empowering Young Minds, Building Bright Futures – At Wisdom World
        Academy, we nurture curiosity, inspire growth, and instill values,
        creating compassionate leaders ready to shape tomorrow. Where learning
        meets heart, and every child’s journey begins with purpose."</p>
</blockquote>
      </div>
      <img src={patternDown} style={{ width: "100%" }} alt="Pattern Down" />
    </>
  );
}
