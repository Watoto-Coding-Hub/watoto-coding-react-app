function Volunteer() {
    return (
        <div className="volunteer bg-green-2 mt-4 text-dark flex flex-col justify-center items-center p-4" id="volunteer">
            <h2 className="md:text-2xl text-sm font-semibold text-[#ffffff]">Volunteer</h2>
        
            <p className="px-6 md:text-lg text-sm pt-6 max-sm:py-6 text-dark text-justify mx-20">Do you want to start your own fundraiser to support us and involve your
                family, friends and colleagues?</p>

            {/* <formester-popup id="e876c2e6-9502-4079-97fc-ab8965cdc703" width="900px" height="95%" ></formester-popup> */}
            {/* <button className="mt-6 py-3 px-10 bg-red mb-5 rounded-tl-3xl rounded-br-3xl" onClick={"Formester.openPopup('e876c2e6-9502-4079-97fc-ab8965cdc703')"}>Book a visit</button> */}

            <button className="mt-6 py-3 text-white px-10 bg-yellow-1 mb-5 rounded-tl-3xl rounded-br-3xl transition ease-linear hover:-translate-y-1 hover:scale-110">
                <a href="https://app.formester.com/f/4db46fb0-eb17-432b-ad61-80aff8357b52"
                    rel="noopener noreferrer" target="_blank">How?</a>
            </button>
        </div>
    )
}

export default Volunteer;