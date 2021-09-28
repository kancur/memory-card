/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";
import "../styles/gameBoard.css";
import Modal from "./Modal";
import useModal from "./useModal";
import shuffle from "../helpers/shuffle";

export default function GameBoard(props) {
  const [imagesData, setImagesData] = useState(shuffle(props.currentImages));
  const [isShowingModal, show, hide] = useModal(resetGame);
  const [wrongClick, setWrongClick] = useState(false);

  const wasClicked = (flowerName) => {
    const data = imagesData.find((image) => image.name === flowerName);
    return !!data.wasClicked;
  };

  // returns an updated imagesData with wasClicked set for correct flower
  const setWasClickedTrue = (flowerName) => {
    const updatedData = imagesData.map((image) => {
      if (image.name === flowerName) {
        return {
          ...image,
          wasClicked: true,
        };
      }
      return image;
    });
    setImagesData(shuffle(updatedData));
  };

  const resetAllClicks = () => {
    const updatedData = imagesData.map((image) => ({
      ...image,
      wasClicked: false,
    }));
    setImagesData(shuffle(updatedData));
  };

  const didPlayerWin = () => {
    const didWin = imagesData.every((image) => image.wasClicked);
    return didWin;
  };

  useEffect(() => {
    resetGame();
    setImagesData(shuffle(props.currentImages));
  }, [props.currentImages]);

  useEffect(() => setTimeout(() => setWrongClick(false), 500), [wrongClick]);

  function resetGame() {
    props.resetScore();
    resetAllClicks();
  }

  const handleClick = (flowerName) => {
    if (wasClicked(flowerName)) {
      setWrongClick(true);
      resetAllClicks();
      props.setCurrentScore(0);
    } else {
      setWasClickedTrue(flowerName);
      props.setCurrentScore((prevScore) => prevScore + 1);
    }
  };

  useEffect(() => {
    if (didPlayerWin()) {
      show();
    }
  }, [imagesData]);

  return (
    <div className={`gameboard-wrapper ${wrongClick ? "danger" : ""}`}>
      <Modal isShowing={isShowingModal} hide={hide} />
      <div className="gameboard">
        {imagesData.map((image) => (
            <MemoryCard
              key={image.name}
              data={image}
              handleClick={handleClick}
              showNames={props.showNames}
              isGrayscale={props.isGrayscale}
            />
          ))}
      </div>
    </div>
  );
}
