import Logo from "/src/assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import "../../../styles/Navbar.css"
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/enquiry');
  };
  return (
    <>
    <nav className="relative w-full z-20 top-0 start-0" style={{zIndex: "1000000"}}>
      <div className="flex items-center flex-wrap mx-auto p-2 py-4" style={{ justifyContent: "space-around"}}>
        <NavLink
          to="/"
          className="flex items-center justify-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={Logo}
            className="h-8"
            alt="Logo"
          />
          <span className="brand self-center text-xl text-white font-semibold whitespace-nowrap dark:text-white">
            Wisdom World Academy
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={handleButtonClick}
            style={{backgroundColor: "#ffc300", fontWeight: "900", borderRadius: "5rem"}}
            className="admission-btn text-white font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Admission Enquiry
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col text-center md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 rounded text-[#0f335a] text-white md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="block py-2 px-3 rounded text-[#0f335a] text-white md:p-0"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/story"
                className="block py-2 px-3 rounded text-[#0f335a] text-white md:p-0"
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/difference"
                className="block py-2 px-3 rounded text-[#0f335a] text-white md:p-0"
              >
                Difference
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/enquiry"
                className="block py-2 px-3 rounded text-[#0f335a] text-white md:p-0"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
