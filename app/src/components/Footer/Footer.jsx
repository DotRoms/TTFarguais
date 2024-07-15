import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import FSH from "../../../../public/FSH.jpg";
import Gironde from "../../../../public/Gironde.jpg";
export default function Footer() {
  return (
    <>
      <div className="flex flex-col bg-solid text-contrast-1 px-8 pb-6 pt-10 ">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-10 w-full">
          <div className="flex flex-row-reverse justify-center items-center gap-16 mb-10 lg:flex-row lg:mb-0 w-full">
            <div className="flex flex-col gap-2 text-xs sm:text-sm ">
              <div>
                <p>Carré des Forges</p>
                <p>3, av. de La Laurence</p>
                <p>
                  33370 <span className="uppercase">Fargues Saint-Hilaire</span>
                </p>
              </div>
            </div>

            <div>
              <ul className="flex gap-8 justify-center">
                <li className="w-8 h-8">
                  <a
                    href="https://www.facebook.com/profile.php?id=100086238966585"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="w-full h-full" />
                  </a>
                </li>
                <li className="w-8 h-8">
                  <a
                    href="https://www.instagram.com/tt_farguais/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="w-full h-full" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden lg:flex gap-6">
              <Image
                src={Gironde}
                width={150}
                height={150}
                className="w-auto"
                alt="Logo Gironde, le département"
              ></Image>
              <Image
                src={FSH}
                width={150}
                height={150}
                className="w-auto"
                alt="Logo Fargues saint hilaire, la commune"
              ></Image>
            </div>
          </div>

          <div className="flex gap-6 lg:hidden">
            <Image
              src={Gironde}
              width={80}
              height={80}
              className="w-auto"
              alt="Logo Gironde, le département"
            ></Image>
            <Image
              src={FSH}
              width={80}
              height={80}
              className="w-auto"
              alt="Logo Fargues saint hilaire, la commune"
            ></Image>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-xs sm:text-sm">
          <p>
            &copy; 2024 <strong>T.T. Farguais</strong>
          </p>
          <p>
            Site réalisé par{" "}
            <a
              href="https://romain-hernandez.com/"
              className="italic"
              target="_blank"
            >
              Roms
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/ugo-matassa/"
              target="_blank"
              className="italic"
            >
              Barenko
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
