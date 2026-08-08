
function App() {
  return (
    <div className="bg-beige text--gray-800">

      {/* this is the header*/}

      <header className="h-auto">
        <div className="fixed w-full h-6 bg-vintage md:h-8"></div>
      </header>

      {/* this is the hero section */}
      <div className="flex flex-col font-montserrat lg:w-12/12 lg:pl-30 lg:pr-30 lg:pt-10 lg:ml-auto mr-auto">
    
        <img src="src/assets/me.jpg" className= "w-80 h-80 self-center mt-25 rounded-full border-8 border-vintage hover:border-black duration-300 ease-in cursor-pointer md:w-100 md:h-100 md:mt-48 lg:mt-10 "></img>
        <h1 className="p-8 mt-10 text-3xl text-left font-extrabold items-center md:p-20 md:mt-2 md:text-4xl lg:p-20 lg:mt-5 lg:text-center lg:text-5xl">Hey there, I'm <span className="text-vintage font-extrabold">Clark Kent Neri.</span> an aspiring IT student. Take a look at my works thank you!☺️ </h1>
          
        </div>
      
        {/* highlighted work */}
      <div className="bg-vintage p-4 font-chakra-petch font-extrabold">
        <div className="text-center text-4xl pt-10 md:text-5xl lg:text-6xl  ">
          <div className="text-amber-50">Highlighted Work</div>
          <div className="grid grid-cols-12 mt-8 lg:p-5 lg:w-3/4 lg:justify-self-center ">
            <div className="col-span-12 p-4 transition hover:translate-y-3 duration-300 md:p-4 md:col-start-2 md:col-end-12  lg:col-start-1 lg:col-end-7 lg:w-auto " >
              <a href="https://github.com/PoyidudePoy/Library-Management-System"> 
              <img src="src/assets/library.png" className="h-60 rounded-t-2xl md:w-full   "></img>
              <div className="text-4xl bg-gradient-to-r from-purple-light to-purple-mid p-4 rounded-b-2xl text-amber-50">Library Management System
                <div className="text-xl mt-2">a barcode log way of library system</div>
              </div>
              </a>
              </div>        
          <div className="col-span-12 p-4 transition hover:translate-x-3 duration-300 md:col-start-2 md:col-end-12 md:p-4 lg:col-start-7 lg:col-end-13 lg:w-auto ">
            <a href="https://github.com/PoyidudePoy/Custom-Built-Document-Request">
             <img src="src/assets/custom.png" className="h-60 rounded-t-2xl md:w-full "></img>
             <div className="text-4xl bg-gradient-to-r from-light-green to-middle-green rounded-b-2xl p-4 text-amber-50">Custom Built Document Request
               <div className="text-xl mt-2">a system made specifically for requesting documents</div>
             </div>
            </a> 
          </div>
        </div>
      </div>
      </div>

      {/* all my projects section */}
      <div id="projects" className="text-xl font-chakra-petch font-extrabold p-6 bg-beige md:pt-15 lg:p-20 ">
         <div className="text-4xl p-4 pl-0 text-left md:text-6xl">My Works 🪬</div>
          <div className="w-4/5 pb-4 md:text-4xl md:w-5/6 md:pt-2 lg:pb-15">Just a collection of all the random projects i do, some are unfinished, some are in development and some are from way before! 🙆‍♂️</div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 p-4 border-5 transition hover:translate-y-3 duration-500 border-vintage hover:shadow-xs hover:shadow-vintage duration-300 rounded-xl md:col-span-6 lg:col-span-4">
              <a href="https://poyidudepoy.github.io/Guessing-Game/">
              <img src="src/assets/guessing.png" className="w-20 justify-self-center"></img>
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
