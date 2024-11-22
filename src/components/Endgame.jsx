import enchantress from '../assets/enchantress.gif';

export default function EndGame({ resetGame }) {
  return (
    <div className="endgame-wrapper">
      <h2>{'Game finished!'}</h2>
      <p className="golden">{`"I love winning!"`}</p>
      <p>— Enchantress</p>
      <img
        src={enchantress}
        alt="Character Enchantress commemorating her victory."
      ></img>
      <div>
        <button
          className="action-btn"
          type="button"
          onClick={resetGame}
        >
          {'Play Again'}
        </button>
      </div>
    </div>
  );
}
