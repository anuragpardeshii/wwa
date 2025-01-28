import "./App.css";
import Navbar from "./components/Comman/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Comman/Footer/Footer";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Difference from "./components/Difference/Difference";
import PreschoolProgram from "./components/More/PreschoolProgram/PreschoolProgram";
import KidsClub from "./components/More/KidsClub/KidsClub";
import BaglessSchool from "./components/More/BaglessSchool/BaglessSchool";
import ParentsSpeak from "./components/More/ParentsSpeak/ParentsSpeak";
import Enquiry from "./components/Enquiry/Enquiry.jsx";
import SeeMore from "./components/Home/SeeMore.jsx";
import Story from "./components/Story/Story.jsx";
import Franchise from "./components/Franchise/Franchise.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/difference" element={<Difference />} />
        <Route path="/preschool-programme" element={<PreschoolProgram />} />
        <Route path="/bagless-school" element={<BaglessSchool />} />
        <Route path="/parents-speak" element={<ParentsSpeak />} />
        <Route path="/see-more" element={<SeeMore />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/story" element={<Story/>} />
        <Route path="/frachise" element={<Franchise/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
