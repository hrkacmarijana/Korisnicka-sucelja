"use client";

import { FC, useEffect, useRef, useState } from "react";
import "./slider.modules.css";
import Card from "../Card/Card";
import { cardProps } from "../Card/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CardSliderProps {
  cards: cardProps[];
}

const CardSlider: FC<CardSliderProps> = ({ cards }) => {
  const [currentCards, setCurrentCards] = useState([0, 1, 2]);
  const [displayCount, setDisplayCount] = useState(3);
  const length = cards.length;

  useEffect(() => {
    updateDisplayCount();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateDisplayCount = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 950) {
      setDisplayCount(1); // small screens
    } else if (screenWidth <= 1300) {
      setDisplayCount(2); // medium screens
    } else {
      setDisplayCount(3); // larger screens
    }
  };

  const handleResize = () => {
    updateDisplayCount();
  };

  const shiftArray = (arr: number[], shiftAmount: number) => {
    const shiftedArray = arr.map((index) => {
      let shiftedIndex = (index + shiftAmount) % length;
      shiftedIndex = shiftedIndex < 0 ? length + shiftedIndex : shiftedIndex;

      return shiftedIndex;
    });
    return shiftedArray;
  };

  const nextCard = () => {
    setCurrentCards(shiftArray(currentCards, displayCount));
  };

  const prevCard = () => {
    setCurrentCards(shiftArray(currentCards, -displayCount));
  };

  return (
    <section className="section-container">
      <div className="card-slider-container">
        <div className="card-slider">
          <IoIosArrowBack className="left-arrow" onClick={prevCard} />
          <IoIosArrowForward className="right-arrow" onClick={nextCard} />
          <div className="card-container">
            {currentCards.slice(0, displayCount).map((index, arrayIndex) => (
              <div className="slide" key={arrayIndex}>
                <Card {...cards[index]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
