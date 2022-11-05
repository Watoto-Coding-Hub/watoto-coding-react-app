import Img4 from '../assets/media/leonard.jpg'
import Img5 from '../assets/media/costanzaprofile.jpg'

function Team() {
  return (
    <div className="Team bg-green-1 text-white flex">
      <div className=' bg-rose-400'>
<img src={Img4} alt="person" width="200px" height='150px' />
<p>Leonard Onyango was born & raised in Kibera Slums, he is amongst the lucky students who got sponsorship to pursue further education in the midst of harsh conditions.
He taught basic computer skills and graphic design in different colleges. 
Along the way, he discovered great platforms like Coder Kids, Endless OS, Roblox, Autodesk - Tinkercad and many 
more which inspired him to pursue his interest in giving back to the marginalized communities through 
teaching kids ICT in creative ways.</p>
</div>
<div>
<img src={Img5} alt="person" width="200px" height='150px' />
<p>Costanza Casullo is from Italy and joined Watoto Coding as a volunteer in 2022. She is a techie passionate about web design and game development and currently 
  helps Watoto Coding with social media, outreach, creating the website and curriculum development.</p>
</div>

    </div>
  )
}

export default Team