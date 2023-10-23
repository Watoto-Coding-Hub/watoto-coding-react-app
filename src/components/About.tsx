// import Img1 from '../assets/media/kibera-1.png'
// import Img2 from '../assets/media/kibera-2.png'
// import Img6 from '../assets/media/kibera-6.jpg'
// import Img3 from 'src/assets/media/kibera-3.JPG'
// import Img4 from '../assets/media/kibera-4.jpg'
import Img1 from "../assets/media/kibera-1.webp";
import Img2 from "../assets/media/kibera-2.webp";
import Img3 from "../assets/media/kibera-3.webp";
import Img4 from "../assets/media/kibera-4.webp";
import Img6 from "../assets/media/kibera-6.webp";


function About() {
  return (
    <div className='About bg-green-2  flex flex-col gap-24 px-4 py-8 md:h-[700px] font-Poppins' id="about">
      <div className="flex flex-col items-center text-white">
        <h3 className="text-5xl">About</h3>
        <p className="mt-5 text-xl ">We work in Kibera, a vast slum in Kenya’s capital city, Nairobi, currently the largest unplanned settlement in the world.</p>
        </div>

        <div className='flex flex-col gap-2 items-center md:flex-row'>
          <div className='w-full shadow-xl relative group cursor-pointer max-w-md  flex flex-col items-center justify-center '>
             <img src={Img1} className="object-cover h-96 rounded-md  "/>
            <div className="invisible absolute inset-0 group-hover:visible flex items-end  justify-center  bg-gradient-to-b from-black via-transparent to-black" >
            <p className='absolute invisible group-hover:visible text-base text-white p-4 font-semibold '>It’s unclear how many people live in Kibera but estimates range from 1 million to 1.5million people living in just 2.25 square kilometres.</p>
            </div>
            
          </div>

          <div className='w-full shadow-xl relative group cursor-pointer max-w-md  flex flex-col items-center justify-center'>
            <img src={Img2} className="object-cover h-96 rounded-md  "/>
            <div className="invisible absolute inset-0  bg-gradient-to-b from-black via-transparent to-black group-hover:visible  " >
            <p className='absolute invisible group-hover:visible bottom-4 text-base text-white p-4 font-semibold  '>Residents often live in cramped one-roomed homes mostly made of mud and iron sheets. Water is collected in jerry cans from water points around the slum.</p>
            </div>
           
          </div>

          <div className='w-full shadow-xl relative group cursor-pointer max-w-md  flex flex-col items-center justify-center'>
            <img src={Img3} className="object-cover h-96 rounded-md "/>
            <div className="invisible absolute inset-0   bg-gradient-to-b from-black via-transparent to-black group-hover:visible" >
            <p className='absolute invisible group-hover:visible bottom-4 text-base text-white p-4 font-semibold  '>Residents often live in cramped one-roomed homes mostly made of mud and iron sheets. Water is collected in jerry cans from water points around the slum.</p>
            </div>
          
          </div>

          <div className='w-full shadow-xl relative group cursor-pointer max-w-md  flex flex-col items-center justify-center'>
            <img src={Img4} className="object-cover h-96 rounded-md w-full "/>
            <div className="invisible absolute inset-0  bg-gradient-to-b from-black via-transparent to-black group-hover:visible" >
            <p className='absolute invisible group-hover:visible bottom-4 text-base text-white p-4 font-semibold  '>Residents often live in cramped one-roomed homes mostly made of mud and iron sheets. Water is collected in jerry cans from water points around the slum.</p>
            </div>
          </div>

          <div className='w-full shadow-xl relative group cursor-pointer h-100 max-w-md  flex flex-col items-center justify-center '>
            <img src={Img6} className="object-cover h-96 rounded-md w-full"/>
              <div className="invisible absolute inset-0  bg-gradient-to-b from-black via-transparent to-black group-hover:visible " >
              <p className='absolute invisible group-hover:visible bottom-4 text-base text-white p-4 font-semibold  '>Residents often live in cramped one-roomed homes mostly made of mud and iron sheets. Water is collected in jerry cans from water points around the slum.</p>
            </div>
            
          </div>
        </div>
      
    
    </div>
  )
}

export default About