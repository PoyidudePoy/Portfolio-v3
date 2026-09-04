import guessing from '../assets/guessing.png'

function Projects() {
  return (
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
  )
}

export default Projects