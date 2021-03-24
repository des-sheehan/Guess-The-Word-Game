
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.getElementsByClassName('btn__reset')[0];
const startOverlay = document.getElementsByClassName('start');
const missed = 0;

const phrases = [
    'BACK TO THE FUTURE',
    'INDIANA JONES',
    'JAWS',
    'JURASSIC PARK',
    'STAR WARS',
    'RAMBO',
    'SUPERMAN',
    'TERMINATOR',
    'DIE HARD'
];

//random whole number generator
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

//select a random array number
const randomArrayNumber = getRandomInt(0, phrases.length);

//Start Button Event Listener
    resetButton.addEventListener('click', () => {
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
  });

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

// Going to need to find a way of selecting the qwerty class to match them with letters
// // not sure if I even need this now
qwerty.getElementsByTagName('button')[0].textContent



//check if a letter is in the phrase game
const checkLetter = (qwertyButton) => {
  const letters = document.getElementsByClassName('letter');
  const match = null;

  for ( i = 0; i < letters.length; i++) {
    if (letters[i].textContent === qwertyButton.textContent) {
      letter[i].classList.add('show')
      match = letters[i].textContent;
    } 
  }
  return match;
  console.log(match);
}   

//check if the game has been won or lost
// const checkWin = () => {

// }

//listen for the start game button to be pressed
// startButton.addEventListener('click', e => {

// });

 //list for the onscreen keyboard to be clicked
 qwerty.addEventListener('click', e => {
  let button = e.target;
  if (button.tagName === 'BUTTON') {
      button.classList.add('chosen');
      button.disabled = true;
  } else {
      button.disabled = false;
  }

  const letterFound = checkLetter(button);
});

