import {MdLocationPin, MdAlarm} from "react-icons/md"
import{FaLinkedin, FaTwitter, FaFacebook, FaBars} from "react-icons/fa"
import logo from "../assets/media/new-logo-watoto.jpg"
function Header() {
  return (
   <header className="min-h-screen bg-grey-1 flex flex-col font-Poppins p-4">
     <div className="flex justify-between items-center container mx-auto mt-8">
      <img src={logo} alt="watoto coding logo" className="w-16 md:w-24"/>
      <div className="flex space-x-2 md:space-x-16">
        <div className="location-section flex space-x-3">
        <MdLocationPin className="text-2xl md:text-4xl text-yellow-1"/>
        <div className="flex flex-col text-white text-sm md:text-md">
             <p>Kibera, Langata</p>
             <p>Nairobi, Kenya</p>
        </div>
        </div>
        <div className="open-time-section flex space-x-3">
        <MdAlarm className="text-2xl md:text-4xl text-red"/>
        <div className="flex flex-col text-white text-sm md:text-md">
             <p>Open Mon-Fri: 8.00AM-5.00pm</p>
             <p>Sundays CLOSED</p>
        </div>
        </div>
      </div>       
     </div>

     <nav className="container mx-auto bg-white rounded-full mt-10 py-6 px-10 flex justify-between">
        <FaBars className="md:hidden text-3xl"/>
        <ul className="hidden md:flex space-x-12 text-xl font-semibold">
        <li className="hover:text-red"><a href="#">Team</a></li>
        <li className="hover:text-red"><a href="#">Fundraising</a></li>
        <li className="hover:text-red"><a href="#">Contact</a></li>
        </ul>
        <div className="social-links flex space-x-10 text-2xl">
          <FaLinkedin className="text-blue-2"/>
          <FaFacebook className="text-green"/>
          <FaTwitter className="text-blue-1"/>
        </div>
     </nav>
     <div className="grid md:grid-cols-2 container mx-auto my-auto">
     <section className="flex flex-col space-y-10 text-white">
       <div>
       <h2 className="text-yellow-1 font-Poppins">A Hub for learners withing marginalized communities</h2>
       <h1 className="text-5xl font-extrabold">WATOTO CODING HUB</h1>
       </div>
       <p className="text-xl">A charity teaching tech-skills to the kids of the Kibera slums. There is so much untapped potential in marginalized communities and to cultivate it we make technology accessible.</p>
       <button className='bg-red p-5 rounded-tl-3xl rounded-br-3xl w-44'>Learn More</button>
     </section>
     
     </div>
     
   </header>
  )
}

export default Header;