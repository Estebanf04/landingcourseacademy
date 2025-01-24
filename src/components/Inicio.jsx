import { Typewriter } from "react-simple-typewriter"

export default function Inicio() {

    return (
        <div id="inicio" className="py-32 bg-portada bg-cover bg-center font-primary ">
            <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-2 gap-10">
                
                <div className="space-y-2">
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

                <a href="#contacto" className="bg-black border border-cyan-200 hover:border-cyan-50 px-10 py-2 text-gray-100 text-lg rounded-md hover:bg-opacity-95 transition font-medium shadow-md shadow-cyan-100 hover:shadow-lg hover:shadow-cyan-300">
                SAVE A PLACE
                </a>
            </div>
        </div>
    )
}
