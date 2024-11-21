import { useState, useEffect } from 'react';
import getData from '../utils/fetch';
import shuffle from '../utils/random';
import Card from './Card';

export default function Main() {
  const [status, setStatus] = useState('Loading');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters = await getData();
        setData(characters);
        setStatus('Loaded');
      } catch {
        setStatus('Error');
      }
    };

    fetchData();
  }, []);

  function handleClick() {
    const newData = [...data];
    shuffle(newData);
    setData(newData);
  }

  if (status === 'Error') {
    return (
      <div className="App">
        <p>Error fetching data. Please try again.</p>
      </div>
    );
  }

  return (
    <main>
      <div className="cards-wrapper">
        {data.map((character) => (
          <article
            key={character.id}
            onClick={handleClick}
          >
            <Card
              title={character.name}
              image={character.image}
            />
          </article>
        ))}
      </div>
    </main>
  );
}
