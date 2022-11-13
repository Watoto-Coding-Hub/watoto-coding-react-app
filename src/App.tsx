import HeroSection from "./components/Hero/HeroSection"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Team from "./components/Team"
import Fundraising from "./components/Fundaraising"
import Footer from "./components/Footer"

function App() {
  return (
    < div>
       <Header/>
       <HeroSection/>
       <About/>
       {/* <Team/>
       <Fundraising/> */}
    </div>
  )
}

export default App
