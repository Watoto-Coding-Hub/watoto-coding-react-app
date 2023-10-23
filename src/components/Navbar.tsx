import { FaTwitter, FaFacebook, FaBars, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import DropDown from "./DropDown";
const linkClass =
  "hover:text-red cursor-pointer transition ease-linear hover:-translate-y-1 hover:scale-110";

function Navbar() {
  return (
    <nav className="container mx-auto bg-white rounded-full mt-10 py-3 px-5 md:py-6 md:px-10 flex justify-between shadow-2xl sticky top-0 z-10 transition ease-in">
      <DropDown/>
      <ul className="hidden lg:flex space-x-12 font-semibold">
        <li className={linkClass}>
          <Link
            to="team"
            spy={true}
            smooth={true}
            duration={100}
            activeClass="text-red transition ease-in"
            offset={-100}
          >
            Team
          </Link>
        </li>
        <li className={linkClass}>
          <Link
            to="fundraising"
            spy={true}
            smooth={true}
            duration={100}
            offset={-100}
            activeClass="text-red transition ease-in"
          >
            Fundraising
          </Link>
        </li>
        <li className={linkClass}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={100}
            offset={-100}
            activeClass="text-red transition ease-in"
          >
            What We Teach
          </Link>
        </li>
        <li className={linkClass}>
          <Link
            to="podcasts"
            spy={true}
            smooth={true}
            duration={100}
            offset={-100}
            activeClass="text-red transition ease-in"
          >
            Podcast
          </Link>
        </li>
        <li className={linkClass}>
          <Link
            to="volunteer"
            spy={true}
            smooth={true}
            duration={100}
            activeClass="text-red transition ease-in"
          >
            Volunteer
          </Link>
        </li>
        <li className={linkClass}>
          <Link
            to="contact"
            smooth={true}
            duration={100}
            spy={true}
            activeClass="text-red transition ease-in"
            offset={-100}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="social-links flex space-x-10 text-2xl">
        <a
          href="https://www.instagram.com/watoto_coding_hub/"
          target="_blank"
          className="transition ease-linear hover:-translate-y-1 hover:scale-110"
        >
          <FaInstagram className="text-blue-2" />
        </a>
        <a
          href="https://www.facebook.com/Watoto-Coding-Community-Hub-105576402109782/"
          className="transition ease-linear hover:-translate-y-1 hover:scale-110"
          target="_blank"
        >
          <FaFacebook className="text-green" />
        </a>
        <a
          href="https://twitter.com/watotocoding"
          target="_blank"
          className="transition ease-linear hover:-translate-y-1 hover:scale-110"
        >
          <FaTwitter className="text-blue-1" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
