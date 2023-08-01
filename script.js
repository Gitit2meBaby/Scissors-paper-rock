// play mad tunes
const musicButton = document.querySelector('#tunes-btn');
musicButton.addEventListener('click', playMusic);

// Play music function
function playMusic() {
  const music = new Audio('title.mp3');
  music.play();
}

// get some scoring in this dog
let userScore = 0;
let computerScore = 0;
let gamesPlayed = 0

function updateScores() {
  const userScoreDisplay = document.querySelector("#userScore")
  const computerScoreDisplay = document.querySelector("#computerScore")

  userScoreDisplay.textContent = userScore
  computerScoreDisplay.textContent = computerScore
}

// function resetScores() {
//   userScore = 0;
//   computerScore = 0;
//   updateScores();
// }

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
      // document.querySelector('.result').innerHTML = "It's a draw";
      document.querySelector('.draw-image').style.display = 'flex';
      playAudio(drawSound);
      gamesPlayed++;
    } else if (userChoice === '1' && computerChoice === 0) {
      // document.querySelector('.result').innerHTML = 'You Win!';
      document.querySelector('.win-image').style.display = 'flex';
      playAudio(winSound);
      userScore++
      gamesPlayed++
    } else if (userChoice === '1' && computerChoice === 2) {
      // document.querySelector('.result').innerHTML = 'You Lose!';
      document.querySelector('.lost-image').style.display = 'flex';
      playAudio(lossSound);
      computerScore++
      gamesPlayed++
    } else if (userChoice === '2' && computerChoice === 0) {
      // document.querySelector('.result').innerHTML = 'You Lose!';
      document.querySelector('.lost-image').style.display = 'flex';
      playAudio(lossSound);
      computerScore++
      gamesPlayed++
    } else if (userChoice === '2' && computerChoice === 1) {
      // document.querySelector('.result').innerHTML = 'You Win!';
      document.querySelector('.win-image').style.display = 'flex';
      playAudio(winSound);
      userScore++
      gamesPlayed++
    } else if (userChoice === '0' && computerChoice === 1) {
      // document.querySelector('.result').innerHTML = 'You Lose!';
      document.querySelector('.lost-image').style.display = 'flex';
      playAudio(lossSound);
      computerScore++
      gamesPlayed++
    } else if (userChoice === '0' && computerChoice === 2) {
      // document.querySelector('.result').innerHTML = 'You Win!';
      document.querySelector('.win-image').style.display = 'flex';
      playAudio(winSound);
      userScore++
      gamesPlayed++
    }

    updateScores()
    console.log(gamesPlayed)

    // Clear the choice display
    setTimeout(() => {
      document.querySelector('.user-choice').innerHTML = '';
      document.querySelector('.computer-choice').innerHTML = '';
      document.querySelector('.lost-image').style.display = 'none';
      document.querySelector('.win-image').style.display = 'none';
      document.querySelector('.draw-image').style.display = 'none';
    }, 3000);

    isEndGame()

  }, 500); // Adjust the delay (in milliseconds) as per your preference



  function isEndGame() {
    const endGameContainer = document.querySelector('#gameOverContainer');
    const youLose = document.querySelector("#youLose");
    const youWin = document.querySelector("#youWin");
    const draw = document.querySelector("#draw");
    const gameboard = document.querySelector(".gameboard");
    const playAgainBtn = document.querySelector("#playAgain")

    if (gamesPlayed === 5) {
      gameboard.style.display = 'none';
      endGameContainer.style.display = 'flex';
      if (computerScore > userScore) {
        youLose.style.display = 'flex';
      } else if (computerScore == userScore) {
        draw.style.display = 'flex'
      } else {
        youWin.style.display = 'flex';
      }
    }
    playAgainBtn.addEventListener('click', () => {
      gameboard.style.display = 'flex';
      endGameContainer.style.display = 'none';
      userScore = 0
      computerScore = 0
      gamesPlayed = 0
      updateScores()
      startGame(event)
    })
  }

}
// Play an audio track
function playAudio(audio) {
  audio.play();
}


// limit it to 5 games, display the score and a winner
console.log(userScore)
console.log(computerScore)
console.log(gamesPlayed)
