
import me from './assets/me.jpg'
import custom from './assets/custom.png'
import library from './assets/library.png'
import guessing from './assets/guessing.png'
import { useState } from 'react'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (

    <div className="bg-beige text--gray-800">

      {/* this is the header*/}

      <header className="h-auto">
        <div className="fixed w-full h-6 bg-vintage md:h-8"></div>
        <div className="fixed z-50">


          {!isNavOpen && (
            <nav className="block bg-white shadow md:hidden">
              <div className="fixed top-10 right-6 z-[999999]">
                <svg
                  onClick={() => setIsNavOpen(prev => !prev)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="duration-200 p-1.5 bg-gray-100 hover:bg-gray-200 text-vintage h-12 w-15 rounded-2xl cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.620" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </nav>
          )}

          {/* Mobile nav panel */}
          <div
            className={`fixed block md:hidden duration-300 ease bg-vintage inset-0 z-[999998] transition-transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="absolute top-10 right-4">
              <svg
                onClick={() => setIsNavOpen(false)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-15 w-15 cursor-pointer text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                

              >
                <path className="bg-amber-50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.620" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>


            <div className="mt-30 text-center text-amber-50 font-chakra-petch">
              <div className="text-4xl font-extrabold">
                <a href="#projects" onClick={() => setIsNavOpen(false)} className="underline--magical">
                  Projects
                </a>
              </div>
              <div className="text-4xl mt-4 font-extrabold">
                <a href="#random" onClick={() => setIsNavOpen(false)} className="underline--magical">
                  Random
                </a>
              </div>
              <div className="text-3xl mt-8 relative font-extrabold">
                <a href="#contacts" onClick={() => setIsNavOpen(false)} className="border-4 px-4 py-2 border-amber-50 rounded-2xl">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* this is the hero section */}
      <div className="flex flex-col font-chakra-petch md:pt-20 lg:w-12/12 lg:pl-40 lg:pr-40 lg:pt-20 lg:ml-auto mr-auto">

        <span className=" font-extrabold md:text-3xl lg:text-3xl hidden md:block lg:block md:pl-10 ">
          <a href="#projects" className="scroll-smooth inline-block md:ml-5 md:mr-10 animate__animated animate__fadeInDown fade1 hover:text-amber-50 hover:border-2 duration-200  hover:p-2 hover:bg-vintage hover:rounded-2xl">Projects</a>
          <a href="#random" className="inline-block md:ml-5 md:mr-10 animate__animated animate__fadeInDown fade2 hover:text-amber-50 hover:border-2 duration-200  hover:p-2 hover:bg-vintage hover:rounded-2xl">Random</a>
          <a href="#contacts" className=" border-4 p-2 rounded-r-xl rounded-l-xl float-right md:mr-10 hover:bg-vintage duration-300 hover:text-amber-50 animate__animated animate__flipInY  "> Contact Me</a>

        </span>

        <img src={me} className="w-80 h-80 self-center mt-25 rounded-full border-8 border-vintage hover:border-black duration-300 ease-in cursor-pointer md:w-100 md:h-100 md:mt-15 lg:mt-10 "></img>
        <h1 className="p-8 mt-10 text-3xl text-left font-extrabold items-center md:p-20 md:mt-2 md:text-4xl lg:p-20 lg:mt-5 lg:text-center lg:text-5xl">Hey there, I'm <span className="text-vintage font-extrabold">Clark Kent Neri.</span> i am a student, Take a look at my works here thank you!☺️ </h1>

      </div>

      {/* highlighted work */}
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

      {/* all my projects section */}
      <div id="projects" className="text-xl font-chakra-petch font-extrabold p-6 bg-beige md:pt-12 md:pl-10 lg:p-20 ">
        <div className="text-4xl p-4 pl-0 text-left md:text-6xl">Projects🪬</div>
        <div className="w-4/5 pb-4 md:text-4xl md:w-5/6 md:pt-2 md:pb-6 lg:pb-16">My projects go here anything random 😗</div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 p-4 border-5 transition hover:-translate-y-5 duration-500 border-vintage hover:shadow-xs hover:shadow-vintage duration-300 rounded-xl md:col-span-6 lg:col-span-4">
            <a href="https://poyidudepoy.github.io/Guessing-Game/">
              <img src={guessing} className="w-20 md:w-25 lg:w-30 mx-auto"></img>
              <h1 className="text-center text-3xl md:text-4xl"> Guessing Game</h1>
              <p className="text-center text-xl md:text-2xl"> a simple discrete math implication game</p>
            </a>
          </div>
        </div>
      </div>


      {/* footer */}
      <div className="bg-gray-300 p-4 font-chakra-petch hidden">

        <div className="md:text-2xl">this portfolio is clearly for educational and inspired and credits all goes to Zachary Jordan for his amazing web design please go and support him❣️ <a href="https://www.patreon.com/zacharyjordan" className="text-black hover:text-vintage duration-1000 hover:font-bold">https://www.patreon.com/zacharyjordan</a> </div>



      </div>





    </div>



  )

}

export default App
