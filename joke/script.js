const setupEl = document.querySelector(".setup");
const punchlineEl = document.querySelector(".punchline");
const getJokeBtn = document.getElementById("getJokeBtn");
const nextJokeBtn = document.getElementById("nextJokeBtn");

async function getJoke() {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    if (!res.ok) throw new Error("API error");

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
}

function displayJoke(joke) {
  if (!joke) {
    setupEl.textContent = "⚠️ Couldn’t fetch a joke, try again!";
    punchlineEl.textContent = "";
    return;
  }

  // JokeAPI can return either "single" or "twopart"
  if (joke.type === "single") {
    setupEl.textContent = joke.joke;
    punchlineEl.textContent = "";
  } else if (joke.type === "twopart") {
    setupEl.textContent = joke.setup;
    punchlineEl.textContent = joke.delivery;
  }
}

getJokeBtn.addEventListener("click", async () => {
  setupEl.textContent = "⏳ Loading joke...";
  punchlineEl.textContent = "";

  const joke = await getJoke();
  displayJoke(joke);

  getJokeBtn.disabled = true;
  nextJokeBtn.disabled = false;
});

nextJokeBtn.addEventListener("click", async () => {
  setupEl.textContent = "⏳ Loading joke...";
  punchlineEl.textContent = "";

  const joke = await getJoke();
  displayJoke(joke);
});
