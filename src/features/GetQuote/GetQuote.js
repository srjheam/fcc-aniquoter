import { useState } from 'react';
import { getRandom } from './GetQuoteAPI';

function GetQuote(props) {
  const [isFetching, setIsFetching] = useState(false);

  const handleOnClick = async () => {
    setIsFetching(true);

    const randomQuote = await getRandom();
    props.onGet(randomQuote);

    setIsFetching(false);
  };

  return (
    <button className='GetQuote' onClick={handleOnClick}>New Quote</button>
  );
}

export default GetQuote;