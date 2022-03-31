function QuoteShare(props) {
  const NEW_LINE = '%0a'
  const TEXT = `“${props.quote}”${NEW_LINE}― ${props.character}, from ${props.anime}${NEW_LINE}${NEW_LINE}`
  const URL = 'https://srjheam.github.io/fcc-random-quote-machine';

  return (
    <div>
      <a
        href={`https://twitter.com/intent/tweet?text=${TEXT}&url=${URL}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        Twitter
      </a>
      <a
        href={`https://telegram.me/share/url?url=${URL}&text=${TEXT}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        Telegram
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${TEXT}${URL}`}
        target='_blank'
        rel='noreferrer noopener'
      >
        WhatsApp
      </a>
    </div>
  );
}

export default QuoteShare;