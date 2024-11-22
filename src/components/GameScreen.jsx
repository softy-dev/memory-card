import { useState, useEffect } from 'react';
import getData from '../utils/fetch';
import shuffle from '../utils/shuffleArray';
import logo from '../assets/dota2.png';
import CardsWrapper from './CardsWrapper';
import ScoreTracker from './ScoreTracker';

export default function Main() {
  const [status, setStatus] = useState('Loading');
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCharacters, setClickedCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters = await getData();
        shuffle(characters);
        setData(characters);

        setTimeout(() => {
          setStatus('Loaded');
        }, '500');
      } catch {
        setStatus('Error');
      }
    };

    fetchData();
  }, []);

  function handleClick(id) {
    const newData = [...data];
    shuffle(newData);

    if (clickedCharacters.includes(id)) {
      setScore(0);
      setClickedCharacters([]);
    } else {
      const newCharacter = [...clickedCharacters, id];
      const newScore = score + 1;
      setScore(newScore);
      setClickedCharacters(newCharacter);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }
    }

    setData(newData);
  }

  if (status === 'Error') {
    return (
      <div className="Error">
        <p>Error fetching data. Please try again.</p>
      </div>
    );
  }

  return (
    <>
      <header>
        <div className="logo-wrapper">
          <img
            src={logo}
            alt="DoTA 2 game"
            height="100"
            width="100"
          ></img>
          <h1>DOTA 2 Memory Cards</h1>
        </div>
        {status === 'Loaded' && (
          <ScoreTracker
            bestScore={bestScore}
            score={score}
          />
        )}
      </header>
      <main>
        {status === 'Loaded' && (
          <CardsWrapper
            data={data}
            handleClick={handleClick}
          />
        )}
      </main>
    </>
  );
}
