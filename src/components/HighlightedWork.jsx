import custom from '../assets/custom.png'
import library from '../assets/library.png'

function HighlightedWork() {
  return (
    <div className="bg-vintage p-4 font-chakra-petch font-extrabold">
      <div className="text-center text-4xl pt-10 md:text-5xl lg:text-6xl  ">
        <div className="text-amber-50">Highlighted Work</div>
        <div className="grid grid-cols-12 mt-8 lg:p-5 lg:w-3/4 lg:justify-self-center ">
          <div className="col-span-12 p-4 transition hover:-translate-x-3 duration-300 md:p-4 md:col-start-2 md:col-end-12  lg:col-start-1 lg:col-end-7 lg:w-auto " >
            <a href="https://github.com/PoyidudePoy/Library-Management-System">
              <img src={library} className="h-60 rounded-t-2xl md:w-full   "></img>
              <div className="text-4xl bg-gradient-to-r from-purple-light to-purple-mid p-4 rounded-b-2xl text-amber-50">Library Management System
                <div className="text-xl mt-2">a barcode log way of library system</div>
              </div>
            </a>
          </div>
          <div className="col-span-12 p-4 transition hover:translate-x-3 duration-300 md:col-start-2 md:col-end-12 md:p-4 lg:col-start-7 lg:col-end-13 lg:w-auto ">
            <a href="https://github.com/PoyidudePoy/Custom-Built-Document-Request">
              <img src={custom} className="h-60 rounded-t-2xl md:w-full "></img>
              <div className="text-4xl bg-gradient-to-r from-light-green to-middle-green rounded-b-2xl p-4 text-amber-50">Custom Built Document Request
                <div className="text-xl mt-2">a system made specifically for requesting documents</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightedWork