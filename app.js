
// Need to switch Start and Reset button functions

const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

const startButton = document.getElementsByClassName('btn__reset')[0];
const startOverlay = document.getElementsByClassName('start');
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
    var ul = document.getElementById('phrase');
    var li = document.createElement('LI');
    ul.appendChild(li);
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
  }
  // This fires an error even wen scoreboard has no Child Nodes

  // Increase Missed Value and remove Heart
  if ( match === null ) {
    missed++;
    if (scoreboard.firstChild.hasChildNodes) {scoreboard.removeChild(scoreboard.firstElementChild); }
  return match;
  }
}   

 //list for the onscreen keyboard to be clicked
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

// //need to actually run the function!!! 
// const win = ( letters.length === correct.length );
// const lose = ( missed > 4 )

//check if the game has been won or lost
const checkWin = () => {
    if ( letters.length === correct.length ) {
      overlay.style.display = 'flex';
      overlay.classList.remove('start');
      overlay.classList.add('win');
      title.textContent = 'Congratulations!'
    } else if ( missed > 4 ) {
        overlay.style.display = 'flex'
        overlay.classList.remove('start');
        overlay.classList.add('lose');
        title.textContent = 'Better Luck Next Time!'
    }
  }

checkWin();

//listen for the start game button to be pressed
// resetButton.addEventListener('click', e => {

// });