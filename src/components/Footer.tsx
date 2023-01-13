import { FaRegHeart, FaTwitter, FaFacebook, FaInstagram, FaRegEnvelope, FaPhone } from 'react-icons/fa';


function Footer() {

  let dateObject = new Date();

  return (

    <footer className="p-4 bg-green-1 sm:p-6" id="contact">
      <div className="md:flex md:justify-between mt-6 md:mx-20">

        {/* Map Area */}
        <div className='mb-6 md:mb-0'>
          <h2 className="text-sm mb-4 font-semibold text-light uppercase">Come visit us at our area</h2>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7739615708874!2d36.766688949624786!3d-1.3109779990391233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bf6a1f2c2e9%3A0x3c40b885e8f31736!2sKenya%20Scouts%20Association-%20Rowallan%20Scout%20Camp!5e0!3m2!1sen!2ske!4v1669652042598!5m2!1sen!2ske" width="300" height="200" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>


        <div className="md:mb-6">
          {/* Subscribe */}
          <h1 className='font-bold text-light uppercase'>New to Watoto coding?</h1>
          <p className="text-slate-300 text-sm pb-4">Subscribe to our news letter to notify you whats happeing at watoto coding</p>
          {/* <iframe src="https://embeds.beehiiv.com/a98ce480-96a1-4bc7-9ff0-afd0f3605950?slim=true" data-test-id="beehiiv-embed" frameBorder="0" scrolling="no"></iframe> */}

          <input placeholder='example@gmail.com' className='p-2 rounded outline-none px-4' />
          <button className='bg-red rounded-tl-3xl md:ml-4 mt-2 md:mt-0 rounded-br-3xl pt-2 pb-2 pl-8 pr-8 text-light'>Subscribe</button>

        </div>

        <div className='md:mt-0 mt-4'>
          <h2 className="mb-6 text-sm font-semibold text-light uppercase">Contact Us</h2>
          <a className='flex text-light hover:text-slate-400' href="mailto:info@watotocoding.org">Email us &nbsp; <FaRegEnvelope size={25} /></a>

          <div className="flex text-light hover:text-slate-400 pt-4">
            <FaPhone />
            <a href="tel:+254 759 783 366" className='pl-2'>+254 759 783 366 </a>
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center w-full">
        <hr className="my-8 w-full h-px bg-light border-0" />
        <span className="absolute left-1/2 px-3 font-medium text-light bg-dark -translate-x-1/2"><a href="https://www.watotocoding.com/">watotocoding.com</a></span>
      </div>


      <div className="pt-4">
        <h1 className='text-center text-slate-300 uppercase pb-2'>Join us on</h1>
        <div className="flex justify-center mb-6">
          <a className='hover:scale-75 text-light hover:text-slate-300' href="https://www.facebook.com/Watoto-Coding-Community-Hub-105576402109782/" target="_blank"
            rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>

          <a className='hover:scale-75 pr-4 pl-4 text-light hover:text-slate-300' href="https://twitter.com/KyboardNinja" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a className='hover:scale-75 text-light hover:text-slate-300' href="https://www.instagram.com/watoto_coding_hub/" target="_blank"
            rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <p className='text-light'>Copyright © {dateObject.getFullYear()} All rights reserved | Made with &nbsp;</p><FaRegHeart size={25} className='text-red hover:scale-75' />

      </div>

    </footer>

  )
}

export default Footer