import './Header.css'
import * as logo from '../../assets/media/new-logo-watoto.jpg';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
const codeLogo = logo.default;


function Header() {
  const[sticky, setSticky] = useState("#");
  
  window.addEventListener('scroll', () =>{
    if(window.pageYOffset >= 80){
      setSticky('sticky');
    }else setSticky('#')
  });

  
  return (
    <nav className={`nav text-lg text-white ${sticky === 'sticky' ? `sticky` : ""}`}>
      <div className="nav-logo">
        <img src={codeLogo} alt="kibera"/>
      </div>
      <div className="nav-links">
        <a className="nav-link" href="#">Kibera</a>
        <a className="nav-link" href="#">Team</a>
        <a className="nav-link" href="#">Fundraising</a>
        <a className="nav-link" href="#">Contact</a>
      </div>
      <div className="nav-buttons">
        <button>JOIN US</button>
        <button>DONATE</button>
      </div>
      <div className="nav-toggle">
        <AiOutlineMenu />
      </div>
    </nav>
  )
}

export default Header;