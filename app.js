
// Need to switch Start and Reset button functions

const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');

const startButton = document.querySelector('#overlay a');
const scoreboard = document.querySelector('#scoreboard ol')
const title = overlay.querySelector('.title');

var letters = document.getElementsByClassName('letter');
var correct = document.getElementsByClassName('show')
var missed = 0;

const phrases = [
  'back to the future',
  'indiana jones',
  'jaws',
  'jurassic park',
  'star wars',
  'rambo',
  'superman',
  'terminator',
  'die hard'
];

//random whole number generator
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

//select a random array number
const randomArrayNumber = getRandomInt(0, phrases.length);

// set overkay to start
  

//Start Button Event Listener to hide Overlay
    startButton.addEventListener('click', () => {
      overlay.style.display = 'none';
  });

// Change Phrase to Letters
const getRandomPhraseAsArray = (arr) => {
  const randomArray = arr[randomArrayNumber];
  const letterArray = randomArray.split('');
  return letterArray;
} 

//run function on phrases
const phraseArray = getRandomPhraseAsArray(phrases);

// // adds the letters of a string to the display
const addPhraseToDisplay = arr => {
  for (i = 0; i < phraseArray.length; i++) {
    var li = document.createElement('LI');
    phrase.appendChild(li);
    li.append(phraseArray[i]) 
    //adds non-empty strings to the letter class, else to the space class
    if ( phraseArray[i] !== ' ') {
      li.className = 'letter';
    } else {
    li.className = 'space';
    }
  } 
}

//run add Phrase function
addPhraseToDisplay(phraseArray);

//check if a letter is in the phrase game
const checkLetter = (qwertyButton) => {
  var match = null;

  for ( i = 0; i < letters.length; i++) {
    if (letters[i].textContent === qwertyButton.textContent) {
      letters[i].classList.add('show')
      match = letters[i].textContent;
    } 
    checkWin();
  }
  // This fires an error even wen scoreboard has no Child Nodes

// This needs to be refined, a value for null is achieved by not even clicking a letter.
// clicking anywhere give no match and = null = missed++

  // Increase Missed Value and remove Heart
  if ( match === null ) {
    missed++;
    if (scoreboard.firstChild.hasChildNodes) {scoreboard.removeChild(scoreboard.firstElementChild); }
  return match;
  }
}   

 //listen for the onscreen keyboard to be clicked
 qwerty.addEventListener('click', e => {
  var button = e.target;
  if (button.tagName === 'BUTTON') {
      button.classList.add('chosen');
      button.disabled = true;
  } else {
      button.disabled = false;
  }
  const letterFound = checkLetter(button);
});

// want to stop buttons being pressed when game is over (if overlay doesn't hide them)
// i could maybe let the condition for winning be a variable 'win'
// then when adding the classname, use the variable.textContent.
// this way I could shorten all this repeating code.

//check if the game has been won or lost
const checkWin = () => {  
  var win = correct.length === letters.length;
  var lose = missed >= 4;

  if ( win ) {
      overlay.style.display = 'flex';
      overlay.classList.remove('start');
      overlay.classList.add('win');
      title.textContent = 'Congratulations!'
      playAgain();
  } else if ( lose ) {
    overlay.style.display = 'flex'
    overlay.classList.remove('start');
    overlay.classList.add('lose');
    title.textContent = 'Better Luck Next Time!'
    playAgain();
      }
  }

const playAgain = () => {
  overlay.removeChild(startButton);
  let resetButton = document.createElement('BUTTON');
  overlay.appendChild(resetButton);
  resetButton.textContent = 'Play Again';
  resetButton.classList.add('btn__reset');
  resetButton.addEventListener('click', e => {
    window.location.reload();
  }
)};