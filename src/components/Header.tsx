import logo from "../assets/media/new-logo-watoto.jpg"
function Header() {
  return (
   <header className="min-h-[80vh] bg-grey-1 flex flex-col">
     <nav className="bg-green-1 px-8 py-6 flex space-x-8 text-lg text-black w-full justify-between container mx-auto bg-white rounded-full">
       <div className="flex flex-col">
       <div className="flex justify-between">
       
       </div>
       <ul className="flex space-x-8">
       <li><a href="#">Kibera</a></li>
       <li><a href="#">Team</a></li>
       <li><a href="#">Fundraising</a></li>
       <li><a href="#">Contact</a></li>
       </ul>
       </div>
    </nav>
     
     {/* <div className="header-container">
      <img />
     <nav className="bg-green-1 px-8 py-6 flex space-x-8 text-lg text-black w-full justify-between container mx-auto bg-white rounded-full">
       <ul className="flex space-x-8">
       <li><a href="#">Kibera</a></li>
       <li><a href="">Team</a></li>
       <li><a href="">Fundraising</a></li>
       <li><a href="">Contact</a></li>
       </ul>
    </nav>
    <div className="header-content">
       <h1></h1>
    </div>
     </div> */}
   </header>
  )
}

export default Header;