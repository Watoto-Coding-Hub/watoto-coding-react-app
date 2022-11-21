import { useState } from 'react'
import Img1 from '../../assets/media/kibera-1.png'
import Img2 from '../../assets/media/kibera-2.png'
import Img3 from '../../assets/media/kibera-6.jpg'
import './About.css'

function About() {
  const datas = [
    {id: 1, image: Img1, text: "Its unclear how many people live in Kibera but estimates range from 1 million to 1.5million people living in just 2.25 square kilometres."},
    {id: 2, image: Img2, text: "Residents often live in cramped one-roomed homes mostly made of mud and iron sheets. Water is collected in jerry cans from water points around the slum."},
    {id: 3, image: Img3, text: "Life is hard in Kibera but many face those challenges with strength of character. It is is a lively place to be. As you walk around you hear music blaring and people talking."}
  ]

  const[textId, setTextId] = useState(0);
  const setIdFunction = (id:number) =>{
    setTextId(id);
  }

  return (
    <div className="About bg-green-3 text-white flex flex-col items-center justify-center p-10 space-y-12">
      <h2 className=" text-5xl font-semibold">About</h2>
      <p className=" text-xl font-semibold max-w-3xl">We work in Kibera, a vast slum in Kenya's capital city in Nairobi, currently the largest unplanned settlement in the world</p>
      <div className="gallery flex flex-row gap-5">
      {datas.map( data => 
          <div className="gallery-items" key={data.id} onMouseEnter={() => setIdFunction(data.id)}
            onMouseLeave={() => setIdFunction(0)}>
            <img src={data.image} alt="An Image of the Kibera slums" className="max-w-sm rounded-md"/>
            <p className={`gallery-text ${textId === data.id ? `ds` : " "}`}>{data.text}</p>
          </div>
      )}
       </div>
    </div>
  )
}

export default About