function Fundraising() {

    return (
        <div className="Fundraising bg-green-2 text-dark flex flex-col justify-center items-center p-4" id="fundraising">
            <h2 className="md:text-2xl font-semibold text-[#ffffff]">Fundrasing</h2>
            <p className="md:text-lg text-sm px-6 pt-6 max-sm:py-6 text-dark text-justify mx-20">Kids do not have laptops or a stable internet connection and it's
                becoming increasingly hard for us to provide them with the education they deserve.
                See our fundraising document below.</p>

            <div className="flex">
                <button className="mt-6 uppercase py-3 px-10 bg-yellow-1 rounded-tl-3xl rounded-br-3xl transition ease-linear hover:-translate-y-1 hover:scale-110 md:text-sm text-xs">
                    <a href="https://www.mchanga.africa/fundraiser/58416"
                        rel="noopener noreferrer" target="_blank">Donate</a>
                </button>
                <button className="mt-6 ml-8 uppercase py-3 px-10 bg-yellow-1 rounded-tl-3xl rounded-br-3xl transition ease-linear hover:-translate-y-1 hover:scale-110 md:text-sm text-xs">
                    <a href="https://www.canva.com/design/DAFEiSc3UjA/view?utm_content=DAFEiSc3UjA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                        rel="noopener noreferrer" target="_blank">View the document</a>
                </button>
            </div>
        </div>
    )


}
export default Fundraising;