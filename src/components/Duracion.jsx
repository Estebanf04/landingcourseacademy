import { MdOutlineWatchLater } from "react-icons/md";

export default function Duracion() {
  return (
      <div className="pt-14 pb-20 px-5">
          <div className="max-w-4xl mx-auto bg-gradient-to-tr from-slate-50 to-cyan-200 border-2 border-cyan-100 px-5 py-7 rounded-md flex flex-col justify-center text-center shadow-md">
              <div className="text-center flex flex-col gap-1 pb-8">
                  <div className="text-2xl md:text-3xl font-medium text-center pb-6 flex items-center justify-center gap-2">
                      <MdOutlineWatchLater className="mt-1"/>
                      <h1>Course duration</h1>
                  </div>
                  <p className="text-lg md:text-xl font-light">It will always depend on the time you can invest. The average duration is about <span className="font-normal">6 months</span>, but we understand that unforeseen events may arise. That is why we give you up to two years to complete it, so you can adapt it to your needs without pressure.</p>
              </div>
          </div>
      </div>
  )
}
