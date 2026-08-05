
function App() {
  return (
    <div className="bg-beige text--gray-800">

      {/* this is the header*/}

      <header className="h-auto">
        <div className="w-full h-6 bg-vintage md:h-8"></div>
      </header>

      {/* this is the hero section */}
      <div className="flex flex-col font-montserrat lg:w-12/12 lg:pl-40 lg:pr-40 lg:pt-10 lg:ml-auto mr-auto">
    
        <img src="src/assets/me.jpg" className= "w-80 h-80 self-center mt-25 rounded-full border-6 border-vintage  md:w-100 md:h-100 md:mt-48 lg:mt-10 "></img>
        <h1 className="p-8 mt-10 text-3xl text-left font-extrabold items-center md:p-20 md:mt-2 md:text-4xl lg:p-20 lg:mt-5 lg:text-center lg:text-5xl">Hey there, I'm <span className="text-vintage font-extrabold">Clark Kent Neri.</span> an aspiring student. Take a look at my works thank you!☺️ </h1>
          
        </div>
      
        {/* highlighted work */}
      <div className="bg-vintage p-4 font-chakra-petch font-extrabold">
        <div className="text-center text-4xl pt-10 md:text-5xl  ">
          <div className="text-amber-50">Highlighted Work</div>
          <div className="grid grid-cols-12 mt-8">
            <div className="col-span-12 p-4 md:p-4 md:col-start-2 md:col-end-12">
              <a href="https://github.com/PoyidudePoy/Library-Management-System"> 
              <img src="src/assets/library.png" className="h-60 rounded-t-2xl md:w-full  "></img>
              <div className="text-4xl bg-gradient-to-r from-purple-light to-purple-mid p-4 rounded-b-2xl text-amber-50">Library Management System
                <div className="text-xl mt-2">a barcode log way of library system</div>
              </div>
              </a>
              </div>        
          <div className="col-span-12 p-4 md:col-start-2  md:col-end-12 md:p-4 ">
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
      <div id="projects" className="text-xl font-chakra-petch font-extrabold p-4 bg-beige">
         <div className="text-4xl p-4">My Works 🫶🏻</div>
          <div className="p-4">This is where all of my works go thank you so much!!</div>






        
      </div>


      {/* footer */}
      <div className="bg-gray-300 font-poppins p-4 ">

      <div>this portfolio is clearly for educational and credits all goes to Zachary Jordan for his amazing design :3 </div>



      </div>





    </div>



  )

}

export default App
