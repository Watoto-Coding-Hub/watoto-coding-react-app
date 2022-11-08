import LeonardImage from '../assets/media/leonard.jpg'
import CostanzaImage from '../assets/media/costanzaprofile.jpg'

function Team() {
  return (
    <div className="Team bg-green-1 text-white mb-5">
      <div className="flex max-sm:flex-col mt-5">
        <div className='max-w-2xl'>
 <img src={LeonardImage} alt="An image of Leonard" className="w-48 h-48 rounded-full m-auto "/>  
 <p className='text-2xl px-16 pt-10'>Leonard Onyango was born & raised in Kibera Slums, he is amongst the 
lucky students who got sponsorship to pursue further education in the midst of harsh conditions.
He taught basic computer skills and graphic design in different colleges. 
Along the way, he discovered great platforms like Coder Kids, Endless OS, Roblox, Autodesk - Tinkercad and many 
more which inspired him to pursue his interest in giving back to the marginalized communities through 
teaching kids ICT in creative ways.</p> 
</div>

 <div className=' '>
<img src={CostanzaImage} alt="An image of Costanza" className="h-48 w-48 rounded-full m-auto max-sm:mt-10"/>
<p className='text-2xl pt-10 max-sm:px-16'>Costanza Casullo is from Italy and joined Watoto Coding as a volunteer in 2022. She is a techie passionate about web design and game development and currently 
  helps Watoto Coding with social media, outreach, creating the website and curriculum development.</p>
</div> 

    </div>
    </div>
  )
}

export default Team