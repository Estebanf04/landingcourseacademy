import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  
  return (
        <header className="flex justify-between items-center px-5 md:px-10 py-5">
            <a href="/">
                <img src="./LogoFandosITAcademy.png" width={128}/>
            </a>

            <div>
                <nav className="hidden md:block text-gray-100 space-x-5 text-md">
                    <a href="#comotrabajamos" className="hover:text-cyan-300 transition">¿How do we work?</a>
                    <a href="#metodologia" className="hover:text-cyan-300 transition">Methodology</a>
                    <a href="#contacto" className="hover:text-cyan-300 transition">Contact</a>
                </nav>

                <button 
                onClick={toggleMenu}
                className="block md:hidden text-2xl">
                    <MdOutlineMenu color="white"/>
                </button>
            </div>

            {isOpen && (
              <div className="block z-40 md:hidden bg-black absolute w-[100%] h-full top-0 right-0 text-center transition-all">

                  <nav className="text-gray-100 space-y-10 mt-10 text-md flex flex-col items-end">
                        <button 
                        onClick={toggleMenu}
                        className="text-3xl pr-6">
                            <IoCloseSharp color="white"/>
                        </button>

                        <div className="text-gray-100 space-y-6 flex flex-col text-2xl items-end pr-6">
                            <a href="#comotrabajamos" className="hover:text-cyan-300 transition" onClick={toggleMenu}>¿How do we work?</a>
                            <a href="#metodologia" className="hover:text-cyan-300 transition" onClick={toggleMenu}>Methodology</a>
                            <a href="#contacto" className="hover:text-cyan-300 transition" onClick={toggleMenu}>Contact</a>
                        </div>
                  </nav>
              </div>
        )}
        </header>
  )
}
