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

  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'text';
  request.onload = () => {
    poemDisplay.textContent = request.response;
  }
  request.send();
}

updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
