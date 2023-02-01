import Img1 from '../assets/media/kibera-1.png'
import Img2 from '../assets/media/kibera-2.png'
import Img6 from '../assets/media/kibera-6.jpg'
import Img3 from '../assets/media/kibera-3.jpg'
import Img4 from '../assets/media/kibera-4.jpg'
import Img7 from '../assets/media/unsplash-image.jpg'

function About() {
  return (
    <div className='About bg-green-2  flex flex-col gap-24 px-4 py-8 md:h-[700px]' id="about">
      <div className="flex flex-col items-center text-white">
        <h3 className="text-5xl">About</h3>
        <p className="mt-5 text-xl">We work in Kibera, a vast slum in Kenya’s capital city, Nairobi, currently the largest unplanned settlement in the world.</p>
        </div>
        <div className='flex flex-col gap-4 items-center md:flex-row'>
          <div className='w-full shadow-xl relative'>
            <p className='absolute bottom-0 text-white p-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestias architecto deleniti provident tempore sed id iste maxime at ex?</p>
            <img src={Img1} className="object-cover h-96 rounded-md hover:bg-dark"/>
          </div>
          <div className='w-full shadow-xl'>
            <img src={Img2} className="object-cover h-96 rounded-md"/>
          </div>
          <div className='w-full shadow-xl'>
            <img src={Img3} className="object-cover h-96 rounded-md"/>
          </div>
          <div className='w-full shadow-xl'>
            <img src={Img4} className="object-cover h-96 rounded-md"/>
          </div>
          <div className='w-full shadow-xl'>
            <img src={Img6} className="object-cover h-96 rounded-md"/>
          </div>
        </div>
      
      {/* <picture className='m-4'>
      <img src={Img3} alt="An image of the Kibera slums"  className="object-contain h-100 w-`100"></img>
      </picture>
      <div className='Text ml-20 mr-10 flex justify-center items-start flex-col'>
<h1 className='text-xl font-semibold text-red'>About us</h1>
<p className='text-xl mt-4'>We work in Kibera, a vast slum in Kenya's capital city in Nairobi, currently the largest unplanned settlement in the world</p>
<button className='bg-yellow-1 p-5 rounded-tl-3xl rounded-br-3xl mt-10'>More About Us</button>
</div> */}

    </div>
  )
}

export default About