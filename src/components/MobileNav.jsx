function MobileNav({ isNavOpen, setIsNavOpen, onContactClick }) {
  return (
    <>
      {!isNavOpen && (
        <nav className="block bg-white shadow md:hidden">
          <div className="fixed top-10 right-6 z-[999999]">
            <svg
              onClick={() => setIsNavOpen((prev) => !prev)}
              xmlns="http://www.w3.org/2000/svg"
              className="duration-200 p-1.5 bg-gray-100 hover:bg-gray-200 text-vintage h-12 w-15 rounded-2xl cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.620"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </nav>
      )}

      <div
        className={`fixed block md:hidden duration-300 ease bg-vintage inset-0 z-[999998] transition-transform ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
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
            <path
              className="bg-amber-50"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.620"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className="mt-30 text-center text-amber-50 font-chakra-petch">
          <div className="text-4xl font-extrabold">
            <a
              href="#projects"
              onClick={() => setIsNavOpen(false)}
              className="underline--magical"
            >
              Projects
            </a>
          </div>
          <div className="text-4xl mt-4 font-extrabold">
            <a
              href="#random"
              onClick={() => setIsNavOpen(false)}
              className="underline--magical"
            >
              Random
            </a>
          </div>
          <div className="text-3xl mt-8 relative font-extrabold">
            <button
              onClick={onContactClick}
              className="border-4 px-4 py-2 border-amber-50 rounded-2xl hover:bg-black transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
