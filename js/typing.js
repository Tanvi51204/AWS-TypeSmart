// EXTRA FILE
// OLD LOGIC THAT WAS USED IN TYPING AREA

const words = 'Amazon Web Services (AWS) offers a comprehensive suite of cloud computing services, enabling businesses to build and deploy scalable, resilient, and secure applications. With AWS, organizations can access a wide range of services including compute, storage, databases, machine learning, analytics, and more. Services like Amazon EC2 provide resizable compute capacity in the cloud, while Amazon S3 offers highly durable object storage. Managed database services like Amazon RDS and Amazon DynamoDB simplify database management tasks, and AWS Lambda allows developers to run code without provisioning or managing servers. With AWS, businesses can innovate faster, reduce infrastructure costs, and scale their applications globally with ease.'.split(' ');
const wordsCount = words.length;
const gameTime = 30 * 1000; // milliseconds
window.timer = null;
window.gameStart = null;
window.pauseTime = 0;

function addClass(el,name) {
  el.className += ' '+name;
}

function removeClass(el,name) {
  el.className = el.className.replace(name,'');
}

function randomWord() {
  const randomIndex = Math.ceil(Math.random() * wordsCount);
  return words[randomIndex - 1];
}

function formatWord(word) {
    // each word a div and each letter diff class
    return    `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function newGame() {
  document.getElementById('words').innerHTML = '';
  for (let i = 0; i < 200; i++) {
    document.getElementById('words').innerHTML += formatWord(randomWord());
  }

  addClass(document.querySelector('.word'), 'current');
  addClass(document.querySelector('.letter'), 'current');

  document.getElementById('info').innerHTML = (gameTime / 1000) + '';
  window.timer = null;
}

function getWpm() {
  const words = [...document.querySelectorAll('.word')];
  const lastTypedWord = document.querySelector('.word.current');
  const lastTypedWordIndex = words.indexOf(lastTypedWord) + 1;
  const typedWords = words.slice(0, lastTypedWordIndex);
  const correctWords = typedWords.filter(word => {
    const letters = [...word.children];
    const incorrectLetters = letters.filter(letter => letter.className.includes('incorrect'));
    const correctLetters = letters.filter(letter => letter.className.includes('correct'));
    return incorrectLetters.length === 0 && correctLetters.length === letters.length;
  });
  return correctWords.length / gameTime * 60000;
}

function gameOver() {
  clearInterval(window.timer);
  addClass(document.getElementById('game'), 'over');
  const result = getWpm();
  document.getElementById('info').innerHTML = `WPM: ${result}`;
}

document.getElementById('game').addEventListener('keyup', ev => {
  const key = ev.key;
  const currentWord = document.querySelector('.word.current');
  const currentLetter = document.querySelector('.letter.current');

  // What user has typed.
  const expected = currentLetter?.innerHTML || ' ';
  const isLetter = key.length === 1 && key !== ' ';
  const isSpace = key === ' ';
  const isBackspace = key === 'Backspace';
  const isFirstLetter = currentLetter === currentWord.firstChild;
  const lastChild = currentWord.lastChild;


  if (document.querySelector('#game.over')) {
    return;
  }

  console.log({key,expected});

  if (!window.timer && (isLetter || isSpace)) {
    window.timer = setInterval(() => {
      if (!window.gameStart) {
        window.gameStart = (new Date()).getTime();
      }
      const currentTime = (new Date()).getTime();
      const msPassed = currentTime - window.gameStart;
      const sPassed = Math.round(msPassed / 1000);
      const sLeft = Math.round((gameTime / 1000) - sPassed);
      if (sLeft <= 0) {
        gameOver();
        return;
      }
      document.getElementById('info').innerHTML = sLeft + '';
    }, 1000);
  }

  
  // When user has clicked a letter.
  if (isLetter) {
    if (currentLetter) {
      addClass(currentLetter, key === expected ? 'correct' : 'incorrect');
      removeClass(currentLetter, 'current');
      if (currentLetter.nextSibling) {
        addClass(currentLetter.nextSibling, 'current');
      }
    } else { // key pressed on empty space
      const incorrectLetter = document.createElement('span');
      incorrectLetter.innerHTML = key;
      incorrectLetter.className = 'letter incorrect extra';
      currentWord.appendChild(incorrectLetter);
    }
  }

  // When user has clicked a space.
  if (isSpace) {
    if (expected !== ' ') {
      const lettersToInvalidate = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
      lettersToInvalidate.forEach(letter => {
        addClass(letter, 'incorrect');
      });
    }
    removeClass(currentWord, 'current');
    addClass(currentWord.nextSibling, 'current');
    if (currentLetter) {
      removeClass(currentLetter, 'current');
    }
    addClass(currentWord.nextSibling.firstChild, 'current');
  }

  if (isBackspace) {
    if (currentLetter && isFirstLetter) {
      // make prev word current, last letter current
      removeClass(currentWord, 'current');
      addClass(currentWord.previousSibling, 'current');
      removeClass(currentLetter, 'current');
      if(!currentWord.previousSibling.lastChild.classList.contains('extra')) {
        addClass(currentWord.previousSibling.lastChild, 'current');
        removeClass(currentWord.previousSibling.lastChild, 'incorrect');
        removeClass(currentWord.previousSibling.lastChild, 'correct');
      } else {
        currentWord.previousSibling.lastChild.remove();
      }
     
    }
    if (currentLetter && !isFirstLetter) {
      // move back one letter, invalidate letter
      removeClass(currentLetter, 'current');
      addClass(currentLetter.previousSibling, 'current');
      removeClass(currentLetter.previousSibling, 'incorrect');
      removeClass(currentLetter.previousSibling, 'correct');
    }
    if (!currentLetter && !lastChild.classList.contains('extra')) {
      addClass(currentWord.lastChild, 'current');
      removeClass(currentWord.lastChild, 'incorrect');
      removeClass(currentWord.lastChild, 'correct');
    } 
    if(!currentLetter && lastChild.classList.contains('extra')) {
        lastChild.remove();
    }
  }

  // move lines / words
  if (currentWord.getBoundingClientRect().top > 300) {
    const words = document.getElementById('words');
    const margin = parseInt(words.style.marginTop || '0px');
    words.style.marginTop = (margin - 35) + 'px';
  }

  // move cursor
  const nextLetter = document.querySelector('.letter.current');
  const nextWord = document.querySelector('.word.current');
  const cursor = document.getElementById('cursor');
  cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 + 'px';
  cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
});

document.getElementById('newGameBtn').addEventListener('click', () => {
    gameOver();
    newGame();
    location.reload();
});

newGame();