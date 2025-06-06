import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import logo from "../assets/Saif_Abdelrazek_Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleIsOpen = function () {
    setIsOpen(!isOpen);
  };

  const linkClasses = (path: string) =>
    `transition-colors duration-300 px-3 py-3 lg:text-[18px] ${
      location.pathname === path
        ? "text-purple-900 font-bold border-b-2 border-purple-900"
        : "hover:text-purple-900"
    }`;
  return (
    <nav className="flex  items-center justify-between pb-6 ">
      <Link to="/portfolio" className="flex flex-shrink-0  items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </Link>
      <div
        id="nav-menu"
        className={`absolute flex flex-col lg:translate-0 z-50 justify-between py-6 text-xl  items-center top-15 right-0 w-64 h-fit  bg-neutral-900 lg:w-fit transition-all transform duration-300 rounded-l-2xl lg:bg-transparent lg:static  lg:flex-row lg:p-0 lg:gap-5 lg:h-fit  ${
          isOpen ? "translate-0" : "translate-x-100"
        }`}
      >
        <Link className={linkClasses("/portfolio")} to="/portfolio">
          Home
        </Link>
        <Link className={linkClasses("/portfolio/about")} to="/portfolio/about">
          About
        </Link>
        <Link
          className={linkClasses("/portfolio/experience")}
          to="/portfolio/experience"
        >
          Experience
        </Link>
        <Link
          className={linkClasses("/portfolio/projects")}
          to="/portfolio/projects"
        >
          Projects
        </Link>
        <Link
          className={linkClasses("/portfolio/contact")}
          to="/portfolio/contact"
        >
          Contact
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="http://www.linkedin.com/in/saifabdelrazek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/SaifAbdelrazek011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <FiMenu
          onClick={toggleIsOpen}
          className="lg:hidden hover:text-purple-800 transition-colors duration-500"
          size={24}
        />
      </div>
    </nav>
  );
}

export default Navbar;
