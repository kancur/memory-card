import '../styles/scoreboard.css';

export default function ScoreBoard({score ,...props}) {
  return (
    <div className="scoreboard">
      <span>Current score: {score.currentScore}</span>
      <span>Max score: {score.maxScore}</span>
    </div>
  )
}