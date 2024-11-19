import { useState } from "react";
import "/src/styles/Navbar.css";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleSetActive = (linkName) => setActiveLink(linkName);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="white-text font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {["Home", "About", "Services", "Pricing", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`block py-2 px-3 ${
                    activeLink === link ? "active" : ""
                  } md:bg-transparent md:p-0 dark:text-white`}
                  onClick={() => handleSetActive(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      </div>
    </nav>
  );
}
