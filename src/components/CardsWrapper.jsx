import Card from './Card';

export default function CardsWrapper({ data, handleClick }) {
  return (
    <ul className="cards-wrapper">
      {data.map((character) => (
        <li
          key={character.id}
          onClick={() => handleClick(character.id)}
        >
          <button
            className="card"
            type="button"
          >
            <Card
              title={character.name}
              image={character.image}
            />
          </button>
        </li>
      ))}
    </ul>
  );
}
