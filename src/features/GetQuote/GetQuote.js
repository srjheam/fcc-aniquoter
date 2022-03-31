import { useState } from 'react';
import { getRandom } from './GetQuoteAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './GetQuote.scss';

function GetQuote(props) {
  const [isFetching, setIsFetching] = useState(false);

  const handleOnClick = async () => {
    setIsFetching(true);

    const randomQuote = await getRandom();
    await new Promise(r => setTimeout(r, 300)); // 'Sleep' for 300ms
    props.onGet(randomQuote);

    setIsFetching(false);
  };

  return (
    <button className='GetQuote btn' onClick={handleOnClick}>
      {isFetching ? <FontAwesomeIcon icon={solid('circle-notch')} className='fa-spin' /> : 'New Quote'}
    </button>
  );
}

export default GetQuote;