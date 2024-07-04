import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer(){
  return (
  <section>
    <div className="flex flex-col bg-solid text-contrast-1 px-8 py-6 ">
      <div className="flex justify-between sm:justify-around mb-10 w-full">
        <div className="flex flex-col gap-2 text-xs sm:text-sm sm:text-center">
          <h3 className="font-bold text-sm sm:text-lg">Retrouvez-nous</h3>
          <div>
          <p>Carré des Forges</p>
          <p>3. av. de la Laurence</p>
          <p>Fargues Saint Hilaire</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-xs sm:text-sm sm:text-center">
          <h3 className="font-bold text-sm sm:text-lg">Horraires d&apos;ouverture</h3>
          <div>
            <p>Lundi: 18h00 - 20h00</p>
            <p>Mercredi: 15h00 - 20h30</p>
          </div>
        </div>

        <div className="hidden sm:flex">
        <ul className="flex flex-col gap-4 justify-center">
            <li className="w-8 h-8"><a href="https://www.facebook.com/profile.php?id=100086238966585" target="_blank" rel="noopener noreferrer"><FaFacebook className="w-full h-full"/></a></li>
            <li className="w-8 h-8"><a href="https://www.instagram.com/tt_farguais/" target="_blank" rel="noopener noreferrer"><FaInstagram  className="w-full h-full"/></a></li>
          </ul>
        </div>

      </div>
      
      <div className="flex flex-col gap-2 text-xs sm:text-sm  md:hidden mb-8 sm:hidden">
          <ul className="flex gap-8 justify-center">
            <li className="w-10 h-10"><a href="https://www.facebook.com/profile.php?id=100086238966585" className="w-10 h-10" target="_blank" ><FaFacebook className="w-full h-full"/></a></li>
            <li className="w-10 h-10"><a href="https://www.instagram.com/tt_farguais/" className="w-10 h-10" target="_blank" ><FaInstagram  className="w-full h-full"/></a></li>
          </ul>
        </div>
  
      <div className="flex flex-col items-center gap-2 text-xs sm:text-sm">
        <p>&copy; 2024 TTFarguais</p>
        <p>Site réalisé par <a href="https://romain-hernandez.com/" className="">Roms</a> et <a href="/">Barenko</a></p>
      </div>
    </div>
  </section>
  )
}