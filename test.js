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
  