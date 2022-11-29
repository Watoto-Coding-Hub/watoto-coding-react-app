import LeonardImage from '../assets/media/leonard.jpg'
import CostanzaImage from '../assets/media/costanzaprofile.jpg'

function Team() {
  return (
    <div className="Team bg-blue-2 text-light">
      <div className="flex max-sm:flex-col items-center justify-center">
        <div className='max-w-xl bg-red my-6'>
 <img src={LeonardImage} alt="An image of Leonard" className="w-48 h-48 rounded-full m-auto "/> 

 <div>
 <h2 className='text-bold text-center mt-4'>Leonard Onyango</h2>
 <p className='text-xl px-6 pt-4 pb-4 max-sm:py-10'>
   He was born & raised in Kibera Slums, he is amongst the 
lucky students who got sponsorship to pursue further education in the midst of harsh conditions.
He taught basic computer skills and graphic design in different colleges. 
Along the way, he discovered great platforms like Coder Kids, Endless OS, Roblox, Autodesk - Tinkercad and many 
more which inspired him to pursue his interest in giving back to the marginalized communities through 
teaching kids ICT in creative ways.</p> 
</div>
</div>

 <div className=' bg-green m-6 max-w-xl'>
<img src={CostanzaImage} alt="An image of Costanza" className="h-48 w-48 rounded-full m-auto "/>
<div>
  <h2 className='text-center mt-4'>Costanza Casullo</h2>
<p className='text-xl px-16 pt-10 max-sm:py-10'> She is from Italy and joined Watoto Coding as a volunteer in 2022. She is a techie passionate about web design and game development and currently 
  helps Watoto Coding with social media, outreach, creating the website and curriculum development.</p>
  </div>
</div> 

    </div>
    </div>
  )
}

export default Team