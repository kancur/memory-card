import logo from './logo.svg';
import GameBoard from './components/GameBoard';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [currentImages, setCurrentImages] = useState({});

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
      <Header score={{ maxScore, currentScore }} />
      <GameBoard setCurrentScore={setCurrentScore} resetScore={resetScore}/>
    </Fragment>
  );
}



export default App;
