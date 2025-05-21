import { Typewriter } from "react-simple-typewriter"
import Header from "./Header"

export default function Inicio() {

    return (
        <div
          id="inicio"
          className="bg-portada bg-cover bg-center font-primary pb-20"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)"
          }}
        >
            <Header/>
            <div className="pt-24 pb-32 max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 gap-10">
                
                <div className="space-y-4">
                    <p className="border-2 border-gray-200 max-w-fit mx-auto px-4 py-1 rounded-lg font-medium text-white">NEW</p>
                    <h1 className="text-7xl md:text-[85px] text-white font-medium">Advanced{' '} 
                        <span className="text-cyan-400 font-semibold">
                            <Typewriter
                             words={['Frontend']}
                             loop={5}
                             cursor
                             cursorStyle='|'
                             typeSpeed={150}
                             deleteSpeed={150}
                             />
                        </span> 
                    </h1>
                </div>

                <p className="text-xl md:text-2xl text-white font-light">
                Unlock advanced frontend skills. Master modern JavaScript, frameworks, and responsive design in our hands-on course. Build real-world projects and take your web development career to the next level.
                </p>

                <a href="#contacto" className="bg-black border border-[#EFEFEF]/30 px-10 py-3 text-gray-200 text-lg rounded-[8px] hover:bg-opacity-95 transition font-medium shadow-md shadow-blue-600 hover:shadow-lg hover:shadow-blue-500">
                    SAVE A PLACE
                </a>
            </div>
        </div>
    )
}
