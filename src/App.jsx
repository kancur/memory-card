import logo from './logo.svg';
import GameBoard from './components/GameBoard';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import Modal from './components/Modal';
import shuffle from './helpers/shuffle';
import getRandomElements from './helpers/getRandomElements';
import images from './images/images';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [imageCount, setImageCount] = useState(8);
  const [currentImages, setCurrentImages] = useState(getRandomElements(images, 8));
  const [showNames, setShowNames] = useState(true);
  const [isGrayscale, setIsGrayscale] = useState(false);

  useEffect(() => {
    setCurrentImages(getRandomElements(images, imageCount))
  }, [imageCount])

  const resetScore = () => {
    setMaxScore(0);
    setCurrentScore(0);
  }

  useEffect(() => {
    if (currentScore > maxScore) {
      setMaxScore(currentScore)
    }
  }, [currentScore])

  return (
    <Fragment>
      <Header 
        score={{ maxScore, currentScore }}
        setImageCount={setImageCount} 
        setShowNames={setShowNames}
        showNames={showNames}
        setIsGrayscale={setIsGrayscale}
      />
      <GameBoard
        setCurrentScore={setCurrentScore}
        resetScore={resetScore}
        currentImages={currentImages}
        showNames={showNames} 
        isGrayscale={isGrayscale}
      />
    </Fragment>
  );
}



export default App;
