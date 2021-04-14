
// Need to switch Start and Reset button functions

const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');

const startButton = document.querySelector('#overlay a');
const scoreboard = document.querySelector('#scoreboard ol')
const hearts = scoreboard.getElementsByTagName('IMG');
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

// run function on phrases
const phraseArray = getRandomPhraseAsArray(phrases);

// adds the letters of a string to the display
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
  }
  return match;
}   

 //listen for the onscreen keyboard to be clicked
 qwerty.addEventListener('click', e => {
  var button = e.target;
  if (button.tagName === 'BUTTON') {
      button.classList.add('chosen');
      button.disabled = true;
  
  const letterChosen = checkLetter(button);
  if ( letterChosen === null ) {
    missed++;
      // for the hearts i could push/pop/whatever the items src with liveHeart.png and lostHeart.png.
      // this would make it much easier to bring them back.
  for (i = 4; i < NaN; i-- ) {
      hearts[i].src = "images/lostHeart.png";
    }

  }
    checkWin();
  }
});

// remove heart element
    // if (scoreboard.firstChild.hasChildNodes) {
    //   scoreboard.removeChild(scoreboard.firstElementChild); 
    // }

// for the hearts i could push/pop/whatever the items src with liveHeart.png and lostHeart.png.
// this would make it much easier to bring them back.
for (i = 0; i < hearts.length; i++ ) {
  hearts[i].src = "images/lostHeart.png";
  }


// i could maybe let the condition for winning be a variable 'win'
// then when adding the classname, use the variable.textContent.
// this way I could shorten all this repeating code.


//check if the game has been won or lost
const checkWin = () => {  
  var win = correct.length === letters.length;
  var lose = (missed > 4);

  if ( win ) {
      title.textContent = 'Congratulations!'
      overlay.style.display = 'flex';
      overlay.classList.remove('start');
      overlay.classList.add('win');
      playAgain();
  } else if ( lose ) {
      title.textContent = 'Better Luck Next Time!'
      overlay.style.display = 'flex'
      overlay.classList.remove('start');
      overlay.classList.add('lose');
      playAgain();
      }
  }

// Adds a reset (play again) button
// on click it reloads the page.

// const playAgain = () => {
//   overlay.removeChild(startButton);
//   let resetButton = document.createElement('BUTTON');
//   overlay.appendChild(resetButton);
//   resetButton.textContent = 'Play Again';
//   resetButton.classList.add('btn__reset');
//   resetButton.addEventListener('click', e => {
//     window.location.reload();
//   }
// )};


// Adds a reset (play again) button
const playAgain = () => {
  //removes start button and makes a new play again button
  overlay.removeChild(startButton);
  let resetButton = document.createElement('BUTTON');
  overlay.appendChild(resetButton);
  resetButton.textContent = 'Play Again';
  resetButton.classList.add('btn__reset');
  
  resetButton.addEventListener('click', e => {
    // hide the overlay & set missed to 0.
    overlay.style.display = 'none';
    missed = 0;
    // loop through hearts to return 5 items
    for (i = 0; i < hearts.length; i++) {
      let newHeart = document.createElement('LI');
      newHeart.src = 'images/liveHeart.png';
      newHeart.classList.add = 'tries';
      scoreboard.appendChild(newHeart);
      
    } 
    // remove existing phrase 
    phraseRemove();
    //run add Phrase function
    addPhraseToDisplay(phraseArray);
    // loop through keyboard to remove chosen class and disabled status.
    qwertyReset()

   
  }  
)};

// function to loop through qwerty keyboard and remove chosen class and disabled status.
const qwertyReset = () => {
    for (i = 0; i < qwerty.getElementsByTagName('button').length; i++) {
    qwerty.getElementsByTagName('button')[i].classList.remove("chosen");
    qwerty.getElementsByTagName('button')[i].disabled = false;
  }
}

//function to remove the existing phrase
const phraseRemove = () => {for (i = 0; i < phrase.getElementsByTagName('LI').length; i++) {
  var li = phrase.getElementsByTagName('LI')[0];
  phrase.removeChild(li);
  }
}