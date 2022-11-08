import * as logo from '../assets/media/new-logo-watoto.jpg';
import * as video from '../assets/media/hero-video.mp4';
import instagramSvg from '../assets/media/instagram.svg';
import twitterSvg from '../assets/media/twitter.svg';
import facebookSvg from '../assets/media/facebook.svg';



const videome = video.default;
const codeLogo = logo.default;

function HeroSection() {

  return (

    <section className="relative flex h-screen mb-0 overflow-hidden">

      <div className='container mx-auto px-4 text-white'>
        <div className="relative z-30">
          <div className='md:pt-6 pt-10'>
            <img src={codeLogo} className="h-20" />
          </div>
          <div className='md:pt-20 w-full pt-24'>
            <h1 className='uppercase text-2xl font-bold font-poppins'>Watoto coding hub</h1>
            <h1 className='uppercase text-2xl font-bold font-poppins'>A hub for learners within marginalized communities</h1>


            <p className='w-3/4 md:w-2/3 pb-8 pt-6 font-poppins'>A charity teaching tech-skills to the kidsof kibera slums. There is so much untapped potential in marginalized communities and to cultivate it we make technology accessible.</p>

          </div>
          <a className='uppercase hover:bg-green-1 border-none tracking-wide font-poppins  bg-green-2 pt-2 pb-2 pl-6 pr-6' href='#learn_more'>
            Learn more
          </a>


          {/* Social Icons */}
          <div className='pt-16'>
            <ul className="flex items-center list-none">
              <li><a className='inline-block pr-10 hover:scale-75' href="https://www.facebook.com/Watoto-Coding-Community-Hub-105576402109782/" target="_blank"
                rel="noopener noreferrer">
                <img src={facebookSvg} alt="facebook icon" width={30} />
              </a></li>
              <li><a className='inline-block pr-10 hover:scale-75' href="https://twitter.com/KyboardNinja" target="_blank"
                rel="noopener noreferrer">
                <img src={twitterSvg} alt="twitter icon" width={30} />
              </a></li>
              <li><a className='inline-block hover:scale-75' href="https://www.instagram.com/watoto_coding_hub/" target="_blank"
                rel="noopener noreferrer">
                <img src={instagramSvg} alt="instagram icon" width={30} />
              </a></li>
            </ul>
          </div>
        </div>
      </div>

      <video autoPlay loop muted className="absolute z-10 object-cover  min-w-full min-h-full opacity-75 brightness-65">
        <source src={videome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default HeroSection