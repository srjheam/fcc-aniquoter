import { useEffect, useState } from 'react';
import Quote from '../features/quote/Quote';
import GetQuote from '../features/GetQuote/GetQuote';
import QuoteShare from '../features/QuoteShare/QuoteShare';
import SocialLinks from '../features/SocialLinks/SocialLinks';
import { getRandom } from '../features/GetQuote/GetQuoteAPI';
import './App.scss';

const RandomInRange = (min, max) =>
  min + Math.floor(Math.random() * ((max - min) + 1));

function App() {
  const splitAPIResponse = (json) => {
    setQuote(json.quote);
    setCharacter(json.character);
    setAnime(json.anime);
  };

  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');
  const [anime, setAnime] = useState('');
  useEffect(() => {
    const fetchQuote = async () => handleOnGet(await getRandom());
    fetchQuote();
    // eslint-disable-next-line
  }, []);

  const handleOnGet = (response) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', `hsl(${RandomInRange(0, 360)}, 80%, 30%)`);

    splitAPIResponse(response);
  };

  return (
    <div className='App'>
      <div className='App-wrapper'>
        <Quote quote={quote} character={character} anime={anime} />
        <div className='App-bottom' style={{ pointerEvents: !quote && "none" }}>
          <GetQuote onGet={handleOnGet} />
          <QuoteShare quote={quote} character={character} anime={anime} />
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
