import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/main.scss';

export const App = () => {
  const [joke, setJoke] = useState('');

  const generateJoke = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const response = await axios.get('https://icanhazdadjoke.com', config);
    setJoke(response.data.joke);
  };

  useEffect(() => {
    generateJoke();
  }, []);

  const handleGetAnotherJoke = () => {
    generateJoke();
  };

  return (
    <div className="container">
      <img src="./assets/laughing.svg" alt="Laughing" />
      <h3>Don't Laugh Challenge</h3>
      <div className="joke">{joke}</div>
      <button className="btn" onClick={handleGetAnotherJoke}>
        Get Another Joke
      </button>
    </div>
  );
};
