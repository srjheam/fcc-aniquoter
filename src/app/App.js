import { useState } from 'react';
import Quote from '../features/quote/Quote';
import './App.css';

function App() {
  const [quote, setQuote] = useState({ statement: 'Example', author: 'Sample Ie.' });

  return (
    <div className="App">
      <Quote statement={quote.statement} author={quote.author} />
    </div>
  );
}

export default App;
