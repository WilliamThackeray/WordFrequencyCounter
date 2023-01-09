$(document).ready(function(){
  console.log('doc ready')
});

function isEmptyOrSpaces(str){
  return str === null || str.match(/^ *$/) !== null;
}

// Adding Words to the Word Container
const input = document.querySelector('#word-input');
const container = document.querySelector('#word-container');
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const word = input.value;

    if (isEmptyOrSpaces(word)) return

    const wordEl = document.createElement('div');
    wordEl.textContent = word;
    wordEl.className = 'word'
    container.appendChild(wordEl);
    
    wordEl.addEventListener('click', () => {
      container.removeChild(wordEl);
    });

    input.value = '';
  }
});

// Counting Words
const scan = document.querySelector('#scan-button')
const words = document.getElementsByClassName('word')
const scanText = document.getElementById('comment');
const results = document.getElementById('results')

scan.addEventListener('click', (event) => {
  results.innerHTML = '' // clear results box before adding more.

  let wordz = []
  for (let word of words) {
    wordz.push(word.textContent)
  }

  let counter = {}
  let text = scanText.value.toLowerCase().split(/\W+/)
  
  for (let word of text) {
    for (let w of wordz) {
      if (word == w) {
        counter[word] ? counter[word] += 1 : counter[word] = 1;
      }
    }
  }
  for (let word in counter) {
    const resEl = document.createElement('div');
    resEl.textContent = `${word}: ${counter[word]}`;
    resEl.className = 'word'
    results.appendChild(resEl)
  }
})

// Clear Button
const clearBtn = document.querySelector('#clear-button')
clearBtn.addEventListener('click', (event) => {
  container.innerHTML = ''
})
