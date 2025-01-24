

export default function ComoTrabajamos() {
  return (
        <div className="py-20" id="comotrabajamos">
                <div className="max-w-5xl mx-auto text-center px-5">
                    <h1 className="text-[22px] text-gray-800">The important thing is that you acquire a good knowledge base,</h1>
                    <h1 className="text-3xl md:text-[36px] font-semibold text-gray-900">¿How do we achieve this?</h1>
                </div>

                <section className="px-4 py-16 lg:px-12 flex flex-col gap-6 justify-center max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:p-0 w-full font-primary">
                            <button className="bg-gradient-to-tr from-slate-50 to-cyan-200 border-2 border-cyan-100 aspect-square w-full h-full rounded-2xl p-6 gap-4 flex flex-col justify-start transition md:aspect-[16/8] md:col-span-2 md:row-span-1">
                                    <span className="flex items-center font-medium text-xl md:text-2xl text-gray-900 text-left text-pretty">
                                        1. With the support of a mentor
                                    </span>

                                    <p className="text-left text-md md:text-xl text-gray-950 font-light">
                                        Learning the basics on your own can be a challenge, especially when you're stuck and have no one to turn to. That's why, from day one with us, you'll have a mentor who will accompany you throughout the entire preparatory course. He or she will always be available to answer your questions and help you constantly advance in your programming level.
                                    </p>
                            </button>

                            <button className="bg-gradient-to-tr from-slate-50 to-cyan-200 border-2 border-cyan-100 aspect-square w-full rounded-2xl p-6 gap-4 flex flex-col justify-start transition md:col-start-3 md:row-span-2 md:h-full">
                                    <span className="flex items-center font-medium text-xl md:text-2xl text-gray-900 text-left text-pretty">
                                        2. Always in contact with us
                                    </span>

                                    <p className="text-left text-md md:text-xl text-gray-950 font-light">
                                        Do you have any questions or are you stuck? If it's a quick question, you can resolve it via Gmail; if it's something more serious, you can have a videoconference with your mentor. In addition, every time you submit an exercise we will review it and give you feedback.                        
                                    </p>
                            </button>

                            <button className=" bg-gradient-to-tr from-slate-50 to-cyan-200 border-2 border-cyan-100 aspect-square w-full h-full rounded-2xl p-6 gap-4 flex flex-col justify-start transition md:aspect-[16/8] md:col-span-2 md:row-span-1">
                                    <span className="flex items-center font-medium text-xl md:text-2xl text-gray-900 text-left text-pretty">
                                        3. Adapting to your pace
                                    </span>

                                    <p className="text-left text-md md:text-xl text-gray-950 font-light">
                                        We know that everyone has a different amount of time to devote to studying. Do you want to go all out? Perfect! Do you need to combine it with work, other studies or family? No problem. You have access to all the material to view whenever and wherever you want, and you can download it to consult it offline.
                                    </p>
                            </button>
                        </div> 
                </section>  
        </div>
  )
}
