// play mad tunes
const musicButton = document.querySelector('.tunes');
musicButton.addEventListener('click', playMusic);

// Play music function
function playMusic() {
  const music = new Audio('title.mp3');
  music.play();
}


// Get user input choice
const rock = document.querySelector('.rock');
rock.value = 0;

// document.querySelector('user-choice').innerHTML ='rock';
rock.addEventListener('click', startGame);

const paper = document.querySelector('.paper');
paper.value = 1;
paper.addEventListener('click', startGame);

const scissors = document.querySelector('.scissors');
scissors.value = 2;
scissors.addEventListener('click', startGame);

const userChoice = document.querySelector('.user-choice')
const computerChoice = document.querySelector('.computer-choice')

// Audio elements
const winSound = new Audio('win.wav');
const lossSound = new Audio('lost.wav');
const drawSound = new Audio('draw.wav');

// Start the game
function startGame(event) {
    const userChoice = event.target.value;
    let choiceDisplay;
  
    switch (userChoice) {
      case '0':
        choiceDisplay = 'rock..';
        break;
      case '1':
        choiceDisplay = 'paper..';
        break;
      case '2':
        choiceDisplay = 'scissors..';
        break;
      default:
        choiceDisplay = '';
        break;
    }
  
    document.querySelector('.user-choice').innerHTML = choiceDisplay;
  // Play the initial audio
  const initialAudio = new Audio('janken.mp3');
  initialAudio.play();

  initialAudio.onended = () => {
    // After the initial audio finishes, continue the game
    continueGame(userChoice);
  };
}

// Continue the game after the initial audio finishes
function continueGame(userChoice) {
  const computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      document.querySelector('.computer-choice').innerHTML = 'rock!';
      break;
    case 1:
      document.querySelector('.computer-choice').innerHTML = 'paper!';
      break;
    case 2:
      document.querySelector('.computer-choice').innerHTML = 'scissors!';
      break;
  }

  setTimeout(() => {
    // Compare userChoice and computerChoice
    if (parseInt(userChoice) === computerChoice) {
      document.querySelector('.result').innerHTML = "It's a draw";
      document.querySelector('.draw-image').style.display = 'flex';
      playAudio(drawSound);
    } else if (userChoice === '1' && computerChoice === 0) {
      document.querySelector('.result').innerHTML = 'You Win!';
      document.querySelector('.win-image').style.display = 'flex';
      playAudio(winSound);
    } else if (userChoice === '1' && computerChoice === 2) {
        document.querySelector('.result').innerHTML = 'You Lose!';
        document.querySelector('.lost-image').style.display = 'flex';
        playAudio(lossSound);
    } else if (userChoice === '2' && computerChoice === 0) {
      document.querySelector('.result').innerHTML = 'You Lose!';
      document.querySelector('.lost-image').style.display = 'flex';
      playAudio(lossSound);
    } else if (userChoice === '2' && computerChoice === 1) {
      document.querySelector('.result').innerHTML = 'You Win!';
      document.querySelector('.win-image').style.display = 'flex';
      playAudio(winSound);
    } else if (userChoice === '0' && computerChoice === 1) {
        document.querySelector('.result').innerHTML = 'You Lose!';
        document.querySelector('.lost-image').style.display = 'flex';
        playAudio(lossSound);
    } else if (userChoice === '0' && computerChoice === 2) {
      document.querySelector('.result').innerHTML = 'You Win!';
      document.querySelector('.win-image').style.display = 'flex';
      playAudio(winSound);
   
    }
    // Clear the choice display
    setTimeout(() => {
        document.querySelector('.user-choice').innerHTML = '';
        document.querySelector('.computer-choice').innerHTML = '';
        document.querySelector('.lost-image').style.display = 'none';
        document.querySelector('.win-image').style.display = 'none';
        document.querySelector('.draw-image').style.display = 'none';
      }, 3000);
  }, 500); // Adjust the delay (in milliseconds) as per your preference
}

// Play an audio track
function playAudio(audio) {
  audio.play();
}
