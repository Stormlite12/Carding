import  { useRef, useEffect, useLayoutEffect, useState } from "react";
import Card from "./Card";
import cardData from "./CardData";

const InfiniteScrollCarousel = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const hoverThreshold = 40;

  useLayoutEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardWidth(width);

      const container = containerRef.current;
      if (container) {
        container.scrollLeft = 0;
      }
    }
  }, []);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container || !cardWidth) return;

    const { left, right } = container.getBoundingClientRect();
    const mouseX = e.clientX;

    if (mouseX < left + hoverThreshold) {
      container.scrollLeft -= cardWidth;
    }

    if (mouseX > right - hoverThreshold) {
      container.scrollLeft += cardWidth;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [cardWidth]);

  return (
    // <div
    //   className="flex justify-start py-36 overflow-x-auto scroll-smooth no-scrollbar " // Add "scrollbar-hidden" class
    //   ref={containerRef}
    //   style={{
    //     width: "120%",
    //     maxWidth: "100%",
    //   }}
    // >
    //   <div className="flex gap-x-24 gap-y-4 py-4 flex-nowrap items-center">
    //     {cardData.map((card, index) => (
    //       <Card
    //         ref={index === 0 ? cardRef : null}
    //         key={card.id}
    //         title={card.title}
    //         content={card.content}
    //         name={card.name}
    //       />
    //     ))}
    //   </div>
    // </div>


    <div
      className="flex max-w-screen-xl mx-auto justify-start py-36 overflow-x-auto scroll-smooth no-scrollbar" // Add "scrollbar-hidden" class
      ref={containerRef}
      style={{
        width: "80%", // Full width of the parent container
        maxWidth: "3000px",
        margin: "0 auto" // Increase max width to make the carousel wider
      }}
    >
      {/* Add extra padding div at the beginning */}
      <div style={{ width: cardWidth / 2 }}></div>

      <div className="flex gap-x-16 gap-y-4 py-4 flex-nowrap items-center">
        {cardData.map((card, index) => (
          <Card
            ref={index === 0 ? cardRef : null}
            key={card.id}
            title={card.title}
            content={card.content}
            name={card.name}
          />
        ))}
      </div>

      {/* Add extra padding div at the end */}
      <div style={{ width: cardWidth / 2 }}></div>
    </div>
  );
};

export default InfiniteScrollCarousel;
