import * as video from '../../assets/media/hero-video.mp4';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import './Hero.css'

const videome = video.default;

function HeroSection() {

  return (

    <section className="overflow-hidden hero">
      <video autoPlay loop muted className="video">
        <source src={videome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="description-title">
        <div className="introduction">
          <h1>WATOTO CODING HUB</h1>
          <p className="title">A HUB FOR LEARNERS WITHIN MARGINALIZED COMMUNITIES</p>
          <p className="descriptions">
            We are a  charity organization teaching tech-skills to the kids of the Kibera slums. Kibera Slums is one
            of the largest unplanned settlement in the world. There is so much untapped potential in 
            marginalized communities and to cultivate it we make technology accessible. In spite of the numerous jobs in the 
            tech sector in Africa, these kids lack access and education to take advantage of the opportunities to excel.
            The lessons also work to keep young kids from poverty plaguing the streets of the slum. With the computer 
            skills they pick up, the kids hope to leave the largest slum in Africa, and find a job.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/storozetu"><BsFacebook /></a>
          <a href="https://twitter.com/watotocoding"><IoLogoTwitter /></a>
          <a href="https://www.instagram.com/watoto_coding_hub/"><BsInstagram /></a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection