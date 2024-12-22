import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import cardData from "./CardData";

const HorizontalScrollCarousel = () => {
  const innerCarouselRef = useRef(null); // Reference for the inner container of cards
  const [cardWidth, setCardWidth] = useState(0); // State to store the width of each card
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current card being displayed
  const totalCards = cardData.length;

  // Calculate the width of a single card once the component is mounted
  useEffect(() => {
    const cardElement = innerCarouselRef.current?.firstElementChild;
    if (cardElement) {
      setCardWidth(cardElement.offsetWidth); // Get the width of the first card
    }
  }, [cardData]);

  // Function to move the carousel to the next card
  const moveToNextCard = () => {
    // Move to the next card, and reset to the first card if we reach the end
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  // Use `useEffect` to set up an interval for moving to the next card
  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextCard();
    }, 3000); // Delay between transitions (3 seconds)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentIndex, totalCards]);

  // Inline styles for controlling the scroll position
  const translateXValue = -cardWidth * currentIndex;

  return (
    <div
      className="mx-auto px-6 max-w-[1400px] border-solid border-2 border-gray-300 flex flex-row 
          overflow-x-hidden"
    >
      {/* Inner div containing the cards */}
      <div
        ref={innerCarouselRef}
        className="flex gap-x-16 gap-y-4 py-4 flex-nowrap transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(${translateXValue}px)`, // Move the cards by the width of one card at a time
        }}
      >
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
