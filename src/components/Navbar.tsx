import{ FaTwitter, FaFacebook, FaBars, FaInstagram} from "react-icons/fa"
const linkClass ="hover:text-red transition ease-linear hover:-translate-y-1 hover:scale-110"
function Navbar() {
  
  return (
    
      <nav className="container mx-auto bg-white rounded-full mt-10 py-6 px-10 flex justify-between shadow-2xl sticky top-0 z-10">
        <FaBars className="lg:hidden text-3xl"/>
        <ul className="hidden lg:flex space-x-12 font-semibold">
        <li className={linkClass}><a href="#team">Team</a></li>
        <li className={linkClass}><a href="#fundraising">Fundraising</a></li>
        <li className={linkClass}><a href="#about">What We Teach</a></li>
        <li className={linkClass}><a href="#podcasts">Podcast</a></li>
        <li className={linkClass}><a href="#volunteer">Volunteer</a></li>
        <li className={linkClass}><a href="#contact">Contact</a></li>
        </ul>
        <div className="social-links flex space-x-10 text-2xl">
          <a href="https://www.instagram.com/watoto_coding_hub/" target="_blank" className="transition ease-linear hover:-translate-y-1 hover:scale-110"><FaInstagram className="text-blue-2"/></a>
          <a href="https://www.facebook.com/Watoto-Coding-Community-Hub-105576402109782/" className="transition ease-linear hover:-translate-y-1 hover:scale-110" target="_blank"
          ><FaFacebook className="text-green"/></a>
          <a href="https://twitter.com/watotocoding" target="_blank" className="transition ease-linear hover:-translate-y-1 hover:scale-110"><FaTwitter className="text-blue-1"/></a>
        </div>
     </nav>
    
  )
}

export default Navbar