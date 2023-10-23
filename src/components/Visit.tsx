function Visit() {
    return (
        <article className="Visit border-b pb-6 border-white bg-green-1 flex flex-col justify-center items-center p-4 text-white" id="visit">
            <h1 className='text-center font-bold text-3xl pt-4'>Visit</h1>
            <div className=" grid grid-cols-2 max-sm:flex flex-col mt-8 gap-6">
                <div className='max-w-3xl bg-red rounded-lg  p-4'>

                    <div>
                        <h2 className='text-bold text-center mt-4 font-bold text-xl'>In Person Visit</h2>
                        <p className='text-xl px-6 pt-4 pb-4 max-sm:py-10 text-dark text-justify'>
                            Come to Kibera and meet the founder and our kinds.
                        </p>
                        <button className="mt-6 hover:bg-yellow-600 float-right uppercase  py-3 px-10 bg-yellow-1 rounded-tl-3xl rounded-br-3xl ">
                            <a href="https://www.mchanga.africa/fundraiser/58416"
                                rel="noopener noreferrer" target="_blank">Book a visit</a>
                        </button>
                    </div>
                </div>

                <div className='max-w-3xl bg-green rounded-lg  p-4'>

                    <div>
                        <h2 className='text-bold text-center mt-4 font-bold text-xl'>Virtual Visit</h2>
                        <p className='text-xl px-6 pt-4 pb-4 max-sm:py-10 text-dark text-justify'>
                            For anyone who wants to experience our teaching approach and meet our founder and kids virtually.
                        </p>
                        <button className="mt-6 hover:bg-yellow-600 float-right uppercase  py-3 px-10 bg-yellow-1 rounded-tl-3xl rounded-br-3xl ">
                            <a href="https://tidycal.com/watotocoding/watoto-coding-virtual-visit-july-august"
                                rel="noopener noreferrer" target="_blank">Book virtual visit</a>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Visit