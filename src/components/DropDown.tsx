
import { useState } from "react";
import { FaBars} from "react-icons/fa";
import { Link } from "react-scroll";
const linkClass =
  "hover:text-red cursor-pointer transition ease-linear hover:-translate-y-1 hover:scale-110";
const showNav = "absolute bg-white text-black mt-8 max-w-[700px] py-8 px-12 rounded-md"
const hideNav = "hidden bg-white text-black mt-8 max-w-[700px] py-8 px-12 rounded-md" 

function DropDown() {
    const [isActive,setActive] = useState(false)
    const toggleClass = () =>{
        setActive(!isActive)
    }
  return (
 <div className="lg:hidden">    
    <button onClick={toggleClass} className="border-none">
    <FaBars className="text-2xl md:text-3xl"/>
    </button>
    <nav className={isActive ? showNav : hideNav}>
    <ul className="flex flex-col gap-4 font-semibold">
        <li className={linkClass}>
          <Link
            to="team"
            spy={true}
            smooth={true}
            duration={300}
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
            duration={300}
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
            duration={300}
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
            duration={300}
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
            duration={300}
            activeClass="text-red transition ease-in"
          >
            Volunteer
          </Link>
        </li>
        <li className={linkClass}>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            spy={true}
            activeClass="text-red transition ease-in"
            offset={-100}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
 </div>
  )
}

export default DropDown