
export default function Footer() {
  return (
      <footer className="bg-black py-8 gap-8">
            <div className="flex flex-col justify-center items-center gap-8">
                <a 
                href="https://www.estebanfandos.com" 
                target="_blank"
                >
                    <img 
                    src="./LogoFandosITAcademy.png" 
                    width={150}
                    />
                </a>
              <p className="text-white text-sm md:text-lg font-light">&copy; Fandos IT Academy 2025 - All rights reserved</p>
            </div>
      </footer>
  )
}
