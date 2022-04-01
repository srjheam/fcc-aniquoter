import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './Quote.scss';

function Quote(props) {
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