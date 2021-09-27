import '../styles/header.css'
import SettingsInputs from './SettingsInputs'
import ScoreBoard from './ScoreBoard'

export default function Header(props) {
  return (
    <header>
      <SettingsInputs
        setImageCount={props.setImageCount}
        setShowNames={props.setShowNames}
        showNames={props.showNames}
        setIsGrayscale={props.setIsGrayscale}
        isGrayscale={props.isGrayscale}
      />
      <div>
        <h1>Flower Memory Game</h1>
        <p>Click on all images but don't click on the same image twice!</p>
      </div>
      <ScoreBoard score={props.score} />
    </header>
  )
}