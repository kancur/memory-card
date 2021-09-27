import MemoryCard from "./MemoryCard";
import images from '../images/images'
import '../styles/gameBoard.css'
import { useEffect, useState } from "react";
import Modal from "./Modal";
import useModal from "./useModal";

export default function GameBoard(props) {
  const [imagesData, setImagesData] = useState(shuffle(images))
  const [isShowingModal, show, hide] = useModal(resetGame);
  const [isRed, setIsRed] = useState(false);

  useEffect(() => setTimeout(() => setIsRed(false), 300),[isRed])

  function resetGame() {
    props.resetScore()
    resetAllClicks();
  }

  const handleClick = (flowerName) => {
    if (wasClicked(flowerName)) {
      setIsRed(true);
      resetAllClicks()
      props.setCurrentScore(0);
    } else {
      setWasClickedTrue(flowerName)
      props.setCurrentScore((prevScore) => prevScore + 1)
    }
  }

  useEffect(() => {
    if(didPlayerWin()){
      show()
    }
  }, [imagesData])

  const didPlayerWin = () => {
    const didWin = imagesData.every((image) => image.wasClicked)
    return didWin
  }

  // returns an updated imagesData with wasClicked set for correct flower
  const setWasClickedTrue = (flowerName) => {
    const updatedData = imagesData.map((image) => {
      if (image.name === flowerName) {
        return (
          {
            ...image,
            wasClicked: true
          }
        )
      }
      return image
    })
    setImagesData(shuffle(updatedData))
  }

  const wasClicked = (flowerName) => {
    const data = (imagesData.find((image) => (image.name === flowerName)))
    return !!data.wasClicked
  }

  const resetAllClicks = () => {
    const updatedData = imagesData.map((image) => {
      return ({
        ...image,
        wasClicked: false,
      })
    })
    setImagesData(shuffle(updatedData));
  }

  // fisher/yates shuffle algorithm
  function shuffle(array) {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray
  }

  return (
    <div>
      <Modal isShowing={isShowingModal} hide={hide} />
      <div className={`gameboard ${isRed ? "red-background" : ""}`}>
        {imagesData.map((image, index) => <MemoryCard key={image.name} data={image} handleClick={handleClick} />
        )}
      </div>
    </div>
  )
}