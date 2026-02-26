const textareaEl = document.querySelector(".textarea");
const numberOfCharactersEl = document.querySelector(
  ".stat__number--characters"
);
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

function inputHandler() {
  const numberOfCharacters = textareaEl.value.length;

  let numberOfWords = textareaEl.value.split(" ").length;
  const twitterNumber = 280 - numberOfCharacters;
  const facebookNumber = 2200 - numberOfCharacters;

  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }

  if (textareaEl.value.includes("<script>")) {
    alert("wrong input");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  if (twitterNumber < 0) {
    twitterNumberEl.classList.add("stat__number__limit");
  } else {
    twitterNumberEl.classList.remove("stat__number__limit");
  }

  if (facebookNumber < 0) {
    facebookNumberEl.classList.add("stat__number__limit");
  } else {
    facebookNumberEl.classList.remove("stat__number__limit");
  }

  numberOfCharactersEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterNumber;
  facebookNumberEl.textContent = facebookNumber;
  wordsNumberEl.textContent = numberOfWords;
}

textareaEl.addEventListener("input", inputHandler);
