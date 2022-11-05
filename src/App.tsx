import HeroSection from "./components/HeroSection"
import Header from "./components/Header"
import About from "./components/About"
import Team from "./components/Team"
import Footer from "./components/Footer"

function App() {
  return (
    < div className="bg-green-1">
       <Header/>
       <HeroSection/>
       <About/>
       <Team/>
    </div>
  )
}

export default App
