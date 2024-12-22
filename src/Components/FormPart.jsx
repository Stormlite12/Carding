import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Define the scroll trigger position (e.g., 500px from the top)
  const scrollTriggerPosition = 500;

  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      if (window.scrollY >= scrollTriggerPosition && !isAnimating) {
        setIsFormVisible(true);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAnimating]); // Add isAnimating to dependencies to avoid immediate re-animation

  // Function to handle close button click and animation
  const handleClose = () => {
    setIsAnimating(true); // Start the closing animation

    // Set a timeout for the sliding down animation duration
    setTimeout(() => {
      setIsFormVisible(false); // Hide the form after the animation
      setIsAnimating(false); // Reset the animation flag
    }, 500); // Match the duration of the sliding animation (500ms)
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Apply slide-up and fade-in transitions */}
      <form
        id="form"
        className={`bg-white border border-gray-300 p-4 shadow-md mt-4 transition-all duration-500 ease-in-out ${
          isFormVisible
            ? 'opacity-100 transform translate-y-0'
            : isAnimating
            ? 'opacity-100 transform translate-y-full' // Apply translateY when closing
            : 'opacity-0 transform translate-y-full pointer-events-none'
        }`}
      >
        {/* X button at top-left corner */}
        <button
          type="button"
          onClick={handleClose} // Close form with animation
          className="absolute top-0 left-0 p-2 text-xl font-bold text-red-500"
        >
          X
        </button>

        <label htmlFor="name" className="block">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />

        <label htmlFor="email" className="block">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />

        <label htmlFor="message" className="block">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full p-2 border border-gray-300 rounded mb-2"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
  