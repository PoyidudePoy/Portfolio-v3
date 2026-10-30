function DesktopNav({ isNavVisible, onContactClick }) {
  return (
    <nav
      className={`fixed hidden bg-vintage mx-auto font-chakra-petch md:block lg:block duration-300 ease shadow left-0 w-full p-4 text-amber-50 z-40 transition-transform ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-12/12 sm:w-11/12 md:w-12/12 lg:w-12/12 lg:ml-20">
        <a href="#top" className="kill-link-style xl:mr-6">
          <span className="inline-block rounded-l-xl rounded-r-xl border-4 border-amber-50 text-amber-50 select-none p-2 text-3xl xl:text-3xl font-extrabold">
            Home
          </span>
        </a>
        <a
          href="#projects"
          className="inline-block kill-link-style ml-6 mr-3 duration-300 text-3xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
        >
          Projects
        </a>
        <a
          href="#random"
          className="inline-block kill-link-style ml-6 mr-3 duration-300 text-3xl xl:text-3xl cursor-pointer underline--magical-2 font-extrabold"
        >
          Random
        </a>
        <button
          onClick={onContactClick}
          className="inline-block ml-6 mr-3 duration-300 float-right text-3xl cursor-pointer border-4 rounded-l-xl rounded-r-xl px-4 p-2 border-amber-50 hover:bg-gray-900 hover:text-gray-50 font-extrabold lg:mr-50"
        >
          Contact Me
        </button>{" "}
      </div>
    </nav>
  );
}

export default DesktopNav;
