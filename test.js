//check if a letter is in the phrase game
const checkLetter = button => {
    for ( i = 0; i < letters.length; i++) {
      if (letters[i].textContent === button) {
        letter[i].className = 'show';
        console.log(letter[i].textContent);
      } else {
        letter[i].className = 'null'
      }
    }
  }

  //list for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    let button = e.target;
    if (button.className === 'keyrow') {
        button.classList.add('chosen');
        button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
  
// Going to need to find a way of selecting the qwerty class to match them with letters
// // not sure if I even need this now
qwerty.getElementsByTagName('button')[0].textContent

// lower case phrases
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

// captialized first phrases
const phrases = [
    'Back To The Future',
    'Indiana Jones',
    'Jaws',
    'Jurassic Park',
    'Star Wars',
    'Rambo',
    'Superman',
    'Terminator',
    'Die Hard'
];

//check if the game has been won or lost
const checkWin = () => {
  const title = overlay.querySelector('.title');
  
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