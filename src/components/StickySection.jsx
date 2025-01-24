import React, { useState, useEffect } from "react";
import { useInView } from "react-hook-inview";
import "bootstrap/dist/css/bootstrap.min.css";

const StickySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, isVisible] = useInView({
    threshold: 1, // Adjust this threshold as needed
  });

  const contents = [
    { id: 1, text: "Content 1" },
    { id: 2, text: "Content 2" },
    { id: 3, text: "Content 3" },
    { id: 4, text: "Content 4" },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const newIndex = Math.floor(scrollPosition / windowHeight);

    if (newIndex < contents.length) {
      setActiveIndex(newIndex);
    } else {
      setActiveIndex(contents.length - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`sticky-section ${isVisible ? "sticky" : ""}`}>
      {contents.map((content, index) => (
        <div
          key={content.id}
          className={`content ${index === activeIndex ? "active" : ""}`}
        >
          <h2>{content.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default StickySection;
