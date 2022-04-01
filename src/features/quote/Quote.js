import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Quote.scss';

function Quote(props) {
  if (!props.quote) {
    return (
      <div className='Quote placeholder'>
        <FontAwesomeIcon icon={solid('quote-left')} className='quotemark quotemark-left placeholder-item' />
        <div className='quote'>
          <div className='placeholder-item' style={{ width: "80%" }}></div>
          <div className='placeholder-item' style={{ width: "85%" }}></div>
          <div className='placeholder-item' style={{ width: "75%" }}></div>
        </div>
        <FontAwesomeIcon icon={solid('quote-right')} className='quotemark quotemark-right placeholder-item' />
        <div className='quote-authorship'>
          <div className='placeholder-item' style={{ width: "30%" }}></div>
          <div className='placeholder-item' style={{ width: "40%" }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className='Quote'>
      <FontAwesomeIcon icon={solid('quote-left')} className='quotemark quotemark-left' />
      <p className='quote'>{props.quote}</p>
      <FontAwesomeIcon icon={solid('quote-right')} className='quotemark quotemark-right' />
      <p className='quote-authorship'>
        ― <em>{props.character}</em><br />
        from {props.anime}
      </p>
    </div>
  );
}

export default Quote;