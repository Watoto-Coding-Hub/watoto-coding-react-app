import Img1 from '../assets/media/kibera-1.png'
import Img2 from '../assets/media/kibera-2.png'
import Img3 from '../assets/media/kibera-6.jpg'

function About() {
  return (
    <div className="About bg-green-3 text-white flex flex-col items-center justify-center p-10 space-y-12">
      <h2 className=" text-5xl font-semibold">About</h2>
      <p className=" text-xl font-semibold max-w-3xl">We work in Kibera, a vast slum in Kenya's capital city in Nairobi, currently the largest unplanned settlement in the world</p>
      <div className="gallery flex  flex-col lg:flex-row basis-1 gap-4">
      <img src={Img1} alt="An Image of the Kibera slums" className="max-w-sm rounded-md"></img>
      <img src={Img2} alt="An image of the Kibera slums"  className="max-w-sm rounded-md"></img>
      <img src={Img3} alt="An image of the Kibera slums"  className="max-w-sm rounded-md"></img>
      </div>

      <h2 className=" text-5xl font-semibold text-center">Team</h2>
      <p className=" text-2xl font-semibold  text-center">There are two of us at the moment but we are always looking for more volunteers.</p>
      </div>
  )
}

export default About