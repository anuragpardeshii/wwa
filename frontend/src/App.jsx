import "./App.css";
import Navbar from "./components/Comman/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Comman/Footer/Footer";
import About from "./components/About/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Difference from "./components/Difference/Difference";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/difference" element={<Difference />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;