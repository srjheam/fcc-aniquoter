function Quote(props) {
  return (
    <div>
      <span>“</span>
      <p>{props.quote}</p>
      <p>
        ― <em>{props.character}</em><br />
        from {props.anime}
      </p>
      <span>”</span>
    </div>
  );
}

export default Quote;