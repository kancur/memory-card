import '../styles/header.css'
import DifficultyPicker from './DifficultyPicker'
import ScoreBoard from './ScoreBoard'

export default function Header(props) {
  return (
    <header>
      <DifficultyPicker />
      <div>
        <h1>Flower Memory Game</h1>
        <p>Click on all images but don't click on the same image twice!</p>
      </div>
      <ScoreBoard score={props.score} />
    </header>
  )
}