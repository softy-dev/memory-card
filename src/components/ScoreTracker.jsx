export default function ScoreTracker({ bestScore, score }) {
  return (
    <div className="score-wrapper">
      <p>
        <span className="bold">Best Score:</span>
        <span className="golden"> {bestScore}</span>
      </p>
      <p>
        <span className="bold">Score:</span> {score}/12
      </p>
    </div>
  );
}
