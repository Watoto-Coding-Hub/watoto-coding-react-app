import {GiJigsawPiece} from "react-icons/gi"
import {FaCubes} from "react-icons/fa"
import {IoGameController} from "react-icons/io5"
function WhatWeDo() {
  return (
    <article className="min-h-[100vh] font-Poppins text-white text-center flex flex-col justify-center items-center gap-16 p-4 mt-8" id="about">
        <div>
        <h3 className="text-5xl">What do we do</h3>
        <p className="mt-5 text-xl">We run a Saturday programme to teach 30 kids aged 7-16.</p>
        </div>
       <section className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl">
             <div className="cards border min-h-[30rem] flex flex-col rounded-lg bg-white items-center p-4 justify-center space-y-6 transition ease-linear hover:-translate-y-1 hover:scale-105 cursor-pointer">
               <GiJigsawPiece className="text-yellow-1 text-7xl"/>
                <h3 className="text-green text-xl">Engineering</h3>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perspiciatis! Eum laudantium nesciunt tenetur totam, nihil reprehenderit aspernatur quisquam soluta commodi</p>
             </div>
             <div className="cards border min-h-[30rem] flex flex-col rounded-lg bg-white items-center p-4 justify-center space-y-6 transition ease-linear hover:-translate-y-1 hover:scale-105 cursor-pointer">
               <FaCubes className="text-green text-7xl"/>
                <h3 className="text-yellow-1 text-xl">Coding</h3>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perspiciatis! Eum laudantium nesciunt tenetur totam, nihil reprehenderit aspernatur quisquam soluta commodi</p>
             </div>
             <div className="cards border min-h-[30rem] flex flex-col rounded-lg bg-white items-center p-4 justify-center space-y-6 transition ease-linear hover:-translate-y-1 hover:scale-105 cursor-pointer">
               <IoGameController className="text-blue-1 text-7xl"/>
                <h3 className="text-red text-xl">Game Design</h3>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perspiciatis! Eum laudantium nesciunt tenetur totam, nihil reprehenderit aspernatur quisquam soluta commodi</p>
             </div>
       </section>
    </article>
  )
}

export default WhatWeDo