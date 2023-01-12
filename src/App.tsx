import Header from "./components/Header"
import About from "./components/About"
import Team from "./components/Team"
import Fundraising from "./components/Fundaraising"
import Footer from "./components/Footer"
import WhatWeDo from "./components/WhatWeDo"

function App() {
  return (
    <div className="bg-green-1">
       <Header/>
       <WhatWeDo/>
       <About/>
       <Team/>
       <Fundraising/>
       <Footer/>
    </div>
  )
}

export default App
