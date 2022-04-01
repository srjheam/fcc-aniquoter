import { useEffect, useState } from 'react';
import Quote from '../features/quote/Quote';
import GetQuote from '../features/GetQuote/GetQuote';
import QuoteShare from '../features/QuoteShare/QuoteShare';
import { getRandom } from '../features/GetQuote/GetQuoteAPI';
import './App.scss';

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
    const fetchQuote = async () => splitAPIResponse(await getRandom());
    fetchQuote();
  }, []);

  return (
    <div className='App'>
      <div className='App-wrapper'>
        <Quote quote={quote} character={character} anime={anime} />
        <div className='App-bottom' style={{ pointerEvents: !quote && "none" }}>
          <GetQuote onGet={splitAPIResponse} />
          <QuoteShare quote={quote} character={character} anime={anime} />
        </div>
      </div>
    </div>
  );
}

export default App;
