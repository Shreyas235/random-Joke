const joke = document.getElementById("joke");
const button = document.getElementById("btn");
const jokeContainer = fetch("https://v2.jokeapi.dev/joke/Any?type=single");

let getjoke = () => {
  jokeContainer
    .then((res) => {
      const data = res.json();
      console.log(data);
      return data;
    })
    .then((res) => {
      console.log(res.joke);
      joke.textContent = `${res.joke}`;
    });
};
button.addEventListener("click", getjoke());
getjoke();
