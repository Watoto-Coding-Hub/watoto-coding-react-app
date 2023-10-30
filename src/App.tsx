import Header from "./components/Header"
import About from "./components/About"
import Team from "./components/Team"
import Fundraising from "./components/Fundaraising"
import Footer from "./components/Footer"
import WhatWeDo from "./components/WhatWeDo"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Visit from "./components/Visit"
import Volunteer from "./components/Volunteer"
import Gallery from "./components/Gallery"
function App() {
  return (
    <div className="bg-green-1">
       <Header/>
       <Navbar/>
       <Hero/>
       <WhatWeDo/>
       <About/>
       <Team/>
       <Gallery/>
       <Fundraising/>
       <Volunteer/>
       <Visit/>
       <Footer/>
    </div>
  )
}

export default App
