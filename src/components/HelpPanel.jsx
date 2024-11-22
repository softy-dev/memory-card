export default function HelpPanel({ toggleHelp }) {
  return (
    <div className="help-wrapper">
      <h2>{"Game's Instructions"}</h2>
      <ul>
        <li>
          <span className="point bold">-</span> Each time you select a card,
          their order is shuffled.
        </li>
        <li>
          <span className="point bold">-</span> You score points by not choosing
          the same cards more than once.
        </li>
        <li>
          <span className="point bold">-</span> If you fail, your score is
          reset.
        </li>
        <li>
          <span className="point bold">-</span> The game ends when you reach a
          score of <span className="golden">12</span>.
        </li>
      </ul>
      <div>
        <button
          type="button"
          onClick={toggleHelp}
        >
          {"Got it. I'm ready!"}
        </button>
      </div>
    </div>
  );
}
