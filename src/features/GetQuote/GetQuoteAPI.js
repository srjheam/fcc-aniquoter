export const getRandom = () =>
  fetch('https://animechan.vercel.app/api/random')
    .then(
      (result) => result.json(),
      (error) => alert(error)
    );
