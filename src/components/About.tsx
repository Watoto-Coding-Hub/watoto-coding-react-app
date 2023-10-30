import Img1 from "../assets/media/kibera-1.webp";
import Img2 from "../assets/media/kibera-2.webp";
import Img3 from "../assets/media/Kena in Kibera.webp";
import Img6 from "../assets/media/kibera-6.webp";


function About() {
  return (
    <div className='About bg-green-2 flex flex-col gap-6 px-4 py-8 font-Poppins' id="about">
      <div className="flex flex-col items-center text-white">
        <h3 className="text-5xl">About</h3>
        <p className="mt-5 text-xl">We work in Kibera, a vast slum in Kenya’s capital city, Nairobi, currently the largest unplanned settlement in the world.</p>
        </div>

        <div className='flex flex-col gap-2 items-center md:flex-row'>
          <div className='w-full shadow-xl relative group cursor-pointer max-w-md  flex flex-col items-center justify-center '>
             <img src={Img1} className="object-cover h-96 rounded-md  "/>
            <div className="invisible absolute inset-0 group-hover:visible flex items-end  justify-center bg-gradient-to-b from-transparent via-black to-transparent">
            <p className='absolute invisible group-hover:visible bottom-28 text-white p-4 font-semibold'>It’s unclear how many people live in Kibera but estimates range from 1 million to 1.5million people living in just 2.25 square kilometres.</p>
            </div>
            
          </div>

          <div className='w-full shadow-xl relative group cursor-pointer max-w-md  flex flex-col items-center justify-center'>
            <img src={Img2} className="object-cover h-96 rounded-md  "/>
            <div className="invisible absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent group-hover:visible" >
            <p className='absolute invisible group-hover:visible bottom-28 text-white p-4 font-semibold  '>Residents often live in cramped one-roomed homes mostly made of mud and iron sheets. Water is collected in jerry cans from water points around the slum.</p>
            </div>
           
          </div>

          <div className='w-full shadow-xl relative group cursor-pointer max-w-md  flex flex-col items-center justify-center'>
            <img src={Img3} className="object-cover h-96 rounded-md "/>
            <div className="invisible absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent group-hover:visible" >
            <p className='absolute invisible group-hover:visible bottom-28 text-base text-white p-4 font-semibold'>Life is hard in Kibera but many face the challenges with strength. It is a lively place to
        be. As you walk around you hear music blaring and people talking.</p>
            </div>
          
          </div>

          <div className='w-full shadow-xl relative group cursor-pointer h-100 max-w-md  flex flex-col items-center justify-center'>
            <img src={Img6} className="object-cover h-96 rounded-md w-full"/>
              <div className="invisible absolute inset-0  bg-gradient-to-b from-transparent via-black to-transparent group-hover:visible" >
              <p className='absolute invisible group-hover:visible bottom-32 text-base text-white p-4 font-semibold'>There are no public schools, hospitals or clinics in Kibera though there are many run by community members and
        NGOs..</p>
            </div>
            
          </div>
        </div>
      
    
    </div>
  )
}

export default About