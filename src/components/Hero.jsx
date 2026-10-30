import me from "../assets/me.jpg";

function Hero({onContactClick}) {
  return (
    <div className="flex flex-col font-chakra-petch md:pt-20 lg:w-12/12 lg:pl-40 lg:pr-40 lg:pt-20 lg:ml-auto mr-auto">
      <span className=" font-extrabold md:text-3xl lg:text-3xl hidden md:block lg:block md:pl-10 ">
        <a
          href="#projects"
          className="scroll-smooth inline-block md:ml-5 md:mr-10 animate__animated animate__fadeInDown fade1 hover:text-amber-50 hover:border-2 duration-200  hover:p-2 hover:bg-vintage hover:rounded-2xl"
        >
          Projects
        </a>
        <a
          href="#random"
          className="inline-block md:ml-5 md:mr-10 animate__animated animate__fadeInDown fade2 hover:text-amber-50 hover:border-2 duration-200  hover:p-2 hover:bg-vintage hover:rounded-2xl"
        >
          Random
        </a>
        <button
          onClick={onContactClick}
          className="border-4 p-2 rounded-r-xl rounded-l-xl float-right md:mr-10 hover:bg-vintage duration-300 hover:text-amber-50 animate__animated animate__flipInY"
        >
          Contact Me
        </button>{" "}
      </span>

      <img
        src={me}
        className="w-80 h-80 self-center mt-25 rounded-full border-8 border-vintage hover:border-black duration-300 ease-in cursor-pointer md:w-100 md:h-100 md:mt-15 lg:mt-10 "
      ></img>
      <h1 className="p-8 mt-10 text-3xl text-left font-extrabold items-center md:p-20 md:mt-2 md:text-4xl lg:p-20 lg:mt-5 lg:text-center lg:text-5xl">
        Hey there, I'm{" "}
        <span className="text-vintage font-extrabold">Clark Kent Neri.</span> i
        am a student, Take a look at my works here thank you!☺️{" "}
      </h1>
    </div>
  );
}

export default Hero;
