import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './QuoteShare.scss';

function QuoteShare(props) {
  const NEW_LINE = '%0a'
  const TEXT = `“${props.quote}”${NEW_LINE}― ${props.character}, from ${props.anime}${NEW_LINE}${NEW_LINE}`
  const URL = 'https://srjheam.github.io/fcc-random-quote-machine';
  
  return (
    <div className='QuoteShare'>
      <a
        className='btn'
        href={`https://twitter.com/intent/tweet?text=${TEXT}&url=${URL}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        <FontAwesomeIcon icon={brands('twitter')} size='xl' />
      </a>
      <a
        className='btn'
        href={`https://telegram.me/share/url?url=${URL}&text=${TEXT}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        <FontAwesomeIcon icon={solid('paper-plane')} size='xl' />
      </a>
      <a
        className='btn'
        href={`https://api.whatsapp.com/send?text=${TEXT}${URL}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        <FontAwesomeIcon icon={brands('whatsapp')} size='2xl' />
      </a>
    </div>
  );
}

export default QuoteShare;