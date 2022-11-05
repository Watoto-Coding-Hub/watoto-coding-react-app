import Img1 from '../assets/media/kibera-1.png'
import Img2 from '../assets/media/kibera-2.png'
// import Img3 from '../assets/media/kibera-3.JPG'
// import Img4 from '../assets/media/kibera-4.JPG'

function About() {
  return (
    <div className="About bg-green-3 text-white text-center py-5">
      <h2 className=" text-5xl font-semibold pb-5 ">About</h2>
      <p className=" text-2xl font-semibold pb-10">We work in Kibera, a vast slum in Kenya's capital city in Nairobi, currently the largest unplanned settlement in the world</p>
<div className='images flex ml-6'>
  <img src={Img1} width='300px' height='181px'></img>
  <img src={Img2} width='300px' height='180px'></img>
  <img src={Img2} width='300px' height='180px'></img>
  <img src={Img2} width='300px' height='180px'></img>

  {/* <img src={Img3} width='70px' height='70px'></img> */}
  {/* <img src={Img4} width='70px' height='70px'></img> */}
</div>

<h2 className='text-5xl font-semibold pt-10'>Team</h2>
<p className='text-2xl font-semibold pb-10'>There are two of us at the moment but we are looking for more volunteers.</p>
      </div>
  )
}

export default About