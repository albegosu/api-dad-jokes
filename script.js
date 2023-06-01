const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// USING ASYNC/AWAIT
let generateJoke = async() => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const response = await fetch('https://icanhazdadjoke.com/', config);

  const data = await response.json()

  jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener('click', generateJoke);

//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }