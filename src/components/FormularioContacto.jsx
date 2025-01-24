
export default function FormularioContacto() {
  return (
      <div className="pt-28 pb-32 px-5 relative" id="contacto">
          <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_45%,#2e6783_90%)]"></div>
            <div className="max-w-4xl mx-auto relative">
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

                    <button className="bg-cyan-700 absolute -bottom-16 right-0 font-medium text-gray-50 py-2 px-8 mx-auto rounded-md text-xl hover:saturate-150">
                        Send
                    </button>
                </form>
            </div>
      </div>
  )
}
