function Fundraising(){
    
return(
    <div className="Fundraising bg-green-2 pt-10 text-dark flex flex-col justify-center items-center max-sm:px-12" id="fundraising">
   <h2 className="text-5xl font-semibold text-red">Fundrasing</h2>
   <p className="max-w-5xl text-3xl font-semibold  pt-5">Kids do not have laptops or a stable internet connection and it's becoming increasingly
     hard for us to provide them with the education they deserve. See our fundraising document below.</p>

<button className="mt-10 py-3 px-10  mb-10 bg-yellow-1 rounded-tl-3xl rounded-br-3xl ">
    <p className="text-2xl">VIEW THE DOCUMENT</p>
</button>

<h2 className="text-5xl font-semibold mt-10 text-green">Volunteer</h2>
   <p className="max-w-5xl text-3xl font-semibold  pt-5">Did you know you can make an impact from a distance too? Do you want to help us bring tech skills to the kids living in the slums of Nairobi?</p>

<button className="mt-10 py-3 px-10  bg-red mb-5 rounded-tl-3xl rounded-br-3xl">
    <p className="text-2xl">HOW?</p>
</button>
</div>
)


}
export default Fundraising