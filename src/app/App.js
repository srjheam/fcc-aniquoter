import { useEffect, useState } from 'react';
import Quote from '../features/quote/Quote';
import GetQuote from '../features/GetQuote/GetQuote';
import QuoteShare from '../features/QuoteShare/QuoteShare';
import { getRandom } from '../features/GetQuote/GetQuoteAPI';
import './App.css';

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
    <div className="App">
      <Quote quote={quote} character={character} anime={anime} />
      <div>
        <GetQuote onGet={splitAPIResponse} />
        <QuoteShare quote={quote} character={character} anime={anime} />
      </div>
    </div>
  );
}

export default App;
