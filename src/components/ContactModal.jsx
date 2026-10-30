// src/components/ContactModal.jsx
import { useState, useEffect } from 'react';
import { useContactForm } from '../hooks/useContactForm';

export default function ContactModal({ isOpen, onClose }) {
  const { formData, isSubmitting, isSuccess, handleChange, handleSubmit } = useContactForm();
  
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false); // NEW: Controls the slide state

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Wait 10ms for the browser to render it off-screen (translate-y-full)
      // Then trigger the slide up animation
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    } else {
      // Slide down first
      setIsAnimating(false);
      // Wait 300ms for the animation to finish, then remove from screen
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;




  return (
    <div 
      className={`fixed inset-0 z-[999999] flex justify-center items-center p-4 backdrop-blur-sm transition-opacity duration-1000 ${
        isOpen ? 'opacity-100 bg-black/60' : 'opacity-0 bg-black/0'
      }`}
      onClick={onClose}
    >
      
      {/*Container */}
      <div 
        onClick={(e) => e.stopPropagation()}
        // use isAnimating instead of isOpen for the translate classes
        className={`bg-beige p-10 rounded-2xl shadow-2xl w-5xl relative border-4 border-vintage md:w-100% md:h-200 md:p-15 lg:w-300 lg:h-auto overflow-50% transform transition-transform duration-1000 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
      
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-vintage hover:text-red-500 font-extrabold text-4xl md:text-7xl"
        >
          ⓧ
        </button>

        <h2 className='text-5xl text-center  '>✉</h2>
        <h2 className="text-3xl md:text-5xl font-black text-vintage mb-6 text-center font-chakra-petch">
          Contact Me
        </h2>

        {isSuccess ? (
          <div className="text-center text-vintage font-bold text-2xl py-10">
            Message sent successfully! I'll get back to you soon. ☺️
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-chakra-petch">
            
            <div>
              <label className="block font-bold text-xl md:text-3xl mb-1">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required
                className="w-full p-3 rounded-lg border-2 border-gray-300 md:text-2xl focus:outline-none focus:border-vintage bg-white"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block font-bold text-xl md:text-3xl mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
                className="w-full p-3 rounded-lg border-2 border-gray-300 md:text-2xl focus:outline-none focus:border-vintage bg-white"
                placeholder="Enter Email"
              />
            </div>

            <div>
              <label className="block font-bold text-xl md:text-3xl mb-1">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
                rows="4"
                className="w-full p-3 rounded-lg border-2 border-gray-300  md:text-2xl focus:outline-none focus:border-vintage bg-white resize-none"
                placeholder="Enter Message"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-2 bg-vintage text-white font-extrabold text-xl p-3 rounded-xl md:w-50 md:text-2xl hover:bg-black transition-colors duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

          </form>
        )}
      </div>
    </div>
  );
}