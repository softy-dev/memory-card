import Card from './Card';

export default function CardsWrapper({ data, handleClick }) {
  return (
    <div className="cards-wrapper">
      {data.map((character) => (
        <article
          key={character.id}
          onClick={() => handleClick(character.id)}
        >
          <Card
            title={character.name}
            image={character.image}
          />
        </article>
      ))}
    </div>
  );
}
