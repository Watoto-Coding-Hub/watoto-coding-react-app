import LeonardImage from '../assets/media/leonard.jpg'
import CostanzaImage from '../assets/media/costanzaprofile.jpg'

function Team() {
  return (
    <article className="Team bg-green-1 min-h-[90vh] flex flex-col justify-center items-center p-4 text-white" id="team">
      <h1 className='text-center font-bold text-3xl pt-4'> OUR TEAM</h1>
      <div className=" grid grid-cols-2 max-sm:flex flex-col mt-8 gap-6">
        <div className='max-w-3xl bg-red rounded-lg  p-4' >
 <img src={LeonardImage} alt="An image of Leonard" className="w-48 h-48 rounded-full m-auto mt-4 object-cover"/> 

 <div>
 <h2 className='text-bold text-center mt-4 font-bold text-xl'>Leonard Onyango</h2>
 <p className='text-xl px-6 pt-4 pb-4 max-sm:py-10 text-dark text-justify'>
   He was born & raised in Kibera Slums, he is amongst the 
lucky students who got sponsorship to pursue further education in the midst of harsh conditions.
He taught basic computer skills and graphic design in different colleges. 
Along the way, he discovered great platforms like Coder Kids, Endless OS, Roblox, Autodesk - Tinkercad and many 
more which inspired him to pursue his interest in giving back to the marginalized communities through 
teaching kids ICT in creative ways.</p> 
</div>
</div>

 <div className=' bg-green max-w-3xl rounded-lg'>
<img src={CostanzaImage} alt="An image of Costanza" className="h-48 w-48 rounded-full m-auto mt-4 object-cover"/>
<div>
  <h2 className='text-center mt-4 font-bold text-xl'>Costanza Casullo</h2>
<p className='text-xl px-6 pt-10 max-sm:py-6 text-dark text-justify'> She is from Italy and joined Watoto Coding as a volunteer in 2022. She is a techie passionate about web design and game development and currently 
  helps Watoto Coding with social media, outreach, creating the website and curriculum development.</p>
  </div>
</div> 

    </div>
    </article>
  )
}

export default Team