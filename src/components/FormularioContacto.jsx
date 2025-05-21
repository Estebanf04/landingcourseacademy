import { IoIosSend } from "react-icons/io";

export default function FormularioContacto() {
  return (
      <div className="pt-28 pb-36 px-5 relative" id="contacto">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_45%,#2e6783_90%)]"></div>
            <div className="max-w-2xl mx-auto relative">
                <h1 className="text-4xl font-medium text-center mb-8 text-gray-100">Contact us</h1>
                <p className="text-xl text-center font-light text-gray-100">If you want to save a place, know the price or more information, <span className="text-gray-100 font-medium">contact us.</span></p>
        
                <form className="flex flex-col mt-10 gap-4 text-[#2E6783]">
                    <input 
                    type="text" 
                    placeholder="Name"
                    className="bg-transparent border border-gray-400 py-3 px-4 rounded-md placeholder:text-gray-400"
                    />
                    
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    className="bg-transparent border border-gray-400 py-3 px-4 rounded-md placeholder:text-gray-400"
                    />

                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 cursor-pointer rounded-md bg-gradient-to-r from-cyan-600 to-cyan-800 hover:bg-cyan-800 transition px-8 py-2 text-lg font-semibold text-gray-100">
                            Send
                            <IoIosSend className="text-xl"/>
                        </button>
                    </div>
                </form>
            </div>
      </div>
  )
}
