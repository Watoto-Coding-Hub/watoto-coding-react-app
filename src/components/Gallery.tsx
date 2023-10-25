import imag4 from "../assets/media/galleryimage4.webp";
import imag1 from "../assets/media/galleryimage1.webp"
import imag2 from "../assets/media/galleryimage2.webp"
import imag3 from "../assets/media/galleryimage3.webp"




function Gallery() {
  return (
    <div className="bg-green-1 p-4 text-white">
      <h1 className='text-center font-bold text-lg pt-4 pb-4 uppercase'>Gallery</h1>

      <div className='grid md:grid-cols-4 md:gap-4 sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-4'>
        <img className='' src={imag4} alt="A kenyan girl doing an unplugged coding activity on paper"/>
        <img className='' src={imag1} alt="A group of kenyan kids on the floor doing unplugged coding activities"/>
        <img className='' src={imag2} alt="Kenyan kids learning how to code in the classroom" />
        <img className='' src={imag3} alt="Kenyan mothers and volunteers make food for the kids" />
      </div>
     
    </div>
  )
}

export default Gallery;