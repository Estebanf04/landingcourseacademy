import { BiSolidVideos } from "react-icons/bi";
import { FaRegFileCode } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { FaUserFriends } from "react-icons/fa";


export default function Metodologias() {
  return (
    <div className="py-24 px-5" id="metodologia">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#cffafe,transparent)]"></div></div>

        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-medium text-center mb-10">¿What methodology do we use?</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-light"> 
                
                <div className="border bg-white border-gray-200 p-6 rounded-md shadow-lg shadow-gray-300 hover:shadow-cyan-300 hover:scale-105 duration-200 transition">
                    <div className="flex items-center gap-2 text-lg md:text-xl">
                        <BiSolidVideos/>
                        <p>Short videos.</p>
                    </div>
                </div>

                <div className="border bg-white border-gray-200 p-6 rounded-md shadow-lg shadow-gray-300 hover:shadow-cyan-300 hover:scale-105 duration-200 transition">
                    <div className="flex items-center gap-2 text-lg md:text-xl">
                        <FaRegFileCode/>
                        <p>Exercises during and at the end of each module.</p>
                    </div>
                </div>

                <div className="border bg-white border-gray-200 p-6 rounded-md shadow-lg shadow-gray-300 hover:shadow-cyan-300 hover:scale-105 duration-200 transition">
                    <div className="flex items-center gap-2 text-lg md:text-xl">
                        <VscFeedback/>
                        <p>Evaluation and feedback on the final exercises of each module.</p>
                    </div>
                </div>

                <div className="border bg-white border-gray-200 p-6 rounded-md shadow-lg shadow-gray-300 hover:shadow-cyan-300 hover:scale-105 duration-200 transition">
                    <div className="flex items-center gap-2 text-lg md:text-xl">
                        <FaUserFriends/>
                        <p>And most importantly, always accompanied by a mentor.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
