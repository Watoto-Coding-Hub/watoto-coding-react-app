import LeonardImage from '../assets/media/leonard.webp';
import CostanzaImage from '../assets/media/costanzaprofile.webp';

function Team() {
  return (
    <article className="Team bg-green-1 min-h-screen flex flex-col justify-center items-center p-4 text-white" id="team">
      <h1 className='text-center font-bold text-3xl pt-4'> OUR TEAM</h1>
      <p className="mt-5 text-xl mx-20">We have a dedicated team of Board members, instructors, friends, mentors and community members who volunteer their time and expertise to maximize Watoto Coding impact.</p>
      <div className=" grid grid-cols-2 max-sm:flex flex-col mt-8 gap-6">
        <div className='max-w-3xl bg-red rounded-lg  p-4'>
          <img src={LeonardImage} alt="An image of Leonard" className="w-48 h-48 rounded-full m-auto mt-4 object-cover" />

          <div>
            <h2 className='text-bold text-center mt-4 font-bold text-xl'>Leonard Onyango</h2>
            <p className='text-lg px-6 pt-4 pb-4 max-sm:py-10 text-dark text-justify'>
              I was born and raised in Kibera slums.
              <br />
              I am a modern tech educator and founder at Watoto Coding Hub. I have had the privilege of instilling a love for technology and digital literacy in students from diverse backgrounds and thought of giving back to my community in the same capacity.<br /> My commitment to
              fostering a dynamic and inclusive learning environment has allowed me to inspire curiosity and creativity among learners
              within underserved communities, encouraging them to explore
              and gain exposure in the world of modern technology.</p>
          </div>
        </div>

        <div className=' bg-green max-w-3xl rounded-lg'>
          <img src={CostanzaImage} alt="An image of Costanza" className="h-48 w-48 rounded-full m-auto mt-4 object-cover" />
          <div>
            <h2 className='text-center mt-4 font-bold text-xl'>Costanza Casullo</h2>
            <p className='text-lg px-6 pt-10 max-sm:py-6 text-dark text-justify'> Costanza Casullo is from Italy and joined Watoto Coding as a volunteer in 2022.
              <br />
              <br/>
              She is a techie passionate about web design and game development and currently
              helps Watoto Coding with social media, outreach, creating the website and curriculum development.</p>
          </div>
        </div>

      </div>
    </article>
  )
}

export default Team