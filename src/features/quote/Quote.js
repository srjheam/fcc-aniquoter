function Quote(props) {
  return (
    <div>
      <span>“</span>
      <p>{props.statement}</p>
      <span>{props.author}</span>
      <span>”</span>
    </div>
  );
}

export default Quote;