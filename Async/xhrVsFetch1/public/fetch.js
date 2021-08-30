const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
}

const updateDisplay = (verse) => {
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  let url = verse + '.txt';

  fetch(url)
    .then((myResponse) => myResponse.text())
    .then((myText) => poemDisplay.textContent = myText);

  // if one line:
  // fetch(url).then((myResponse) => myResponse.text()).then((myText) => poemDisplay.textContent = myText);
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
