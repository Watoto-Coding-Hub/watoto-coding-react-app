import Img1 from '../assets/media/kibera-1.png'
import Img2 from '../assets/media/kibera-2.png'
import Img3 from '../assets/media/kibera-6.jpg'

function About() {
  return (
    <div className='About bg-grey-2 flex gap-5 p-10 max-sm:flex-col' >
      <picture className='m-4'>
      <img src={Img3} alt="An image of the Kibera slums"  className="object-contain h-100 w-`100"></img>
      </picture>
      <div className='Text ml-20 mr-10 flex justify-center items-start flex-col'>
<h1 className='text-5xl font-semibold text-red'>About us</h1>
<p className='text-xl font-semibold mt-10'>We work in Kibera, a vast slum in Kenya's capital city in Nairobi, currently the largest unplanned settlement in the world</p>
<button className='bg-yellow-1 p-5 rounded-tl-3xl rounded-br-3xl mt-10'>More About Us</button>
</div>

    </div>
  )
}

export default About