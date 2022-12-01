import {GiJigsawPiece} from "react-icons/gi"
import {FaCubes} from "react-icons/fa"
import {IoGameController} from "react-icons/io5"
function WhatWeDo() {
  return (
    <article className="min-h-[80vh] bg-blue-1 font-Poppins text-white text-center flex flex-col justify-center items-center gap-16 p-4">
        <h3 className="text-5xl">What Do We Do?</h3>
       <section className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl">
             <div className="cards border min-h-[30rem] flex flex-col rounded-lg bg-white items-center p-4 justify-center space-y-6">
               <GiJigsawPiece className="text-yellow-1 text-7xl"/>
                <h3 className="text-green text-xl">Computational Thinking</h3>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perspiciatis! Eum laudantium nesciunt tenetur totam, nihil reprehenderit aspernatur quisquam soluta commodi</p>
             </div>
             <div className="cards border min-h-[30rem] flex flex-col rounded-lg bg-white items-center p-4 justify-center space-y-6">
               <FaCubes className="text-green text-7xl"/>
                <h3 className="text-yellow-1 text-xl">3D Modeling</h3>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perspiciatis! Eum laudantium nesciunt tenetur totam, nihil reprehenderit aspernatur quisquam soluta commodi</p>
             </div>
             <div className="cards border min-h-[30rem] flex flex-col rounded-lg bg-white items-center p-4 justify-center space-y-6">
               <IoGameController className="text-blue-1 text-7xl"/>
                <h3 className="text-red text-xl">Game Design</h3>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perspiciatis! Eum laudantium nesciunt tenetur totam, nihil reprehenderit aspernatur quisquam soluta commodi</p>
             </div>
       </section>
    </article>
  )
}

export default WhatWeDo