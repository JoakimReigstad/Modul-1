// function stopKiller1() {
//   clearTimeout(timerKiller1);
//   killerHunt();
// }

// function stopKiller2() {
//   clearTimeout(timerKiller2);
//   killerHunt();
// }

// function stopKiller3() {
//   clearTimeout(timerKiller3);
//   killerHunt();
// }
killerHunt();

function stopKiller1() {
  clearTimeout(timerKiller1);
  mirror = 'img/mirror1.png';
  updateScore();
  updateView();
  faster();
  killerHunt();
}

function stopKiller2() {
  clearTimeout(timerKiller2);
  door = 'img/door1.png';
  updateScore();
  updateView();
  faster();
  killerHunt();
}

function stopKiller3() {
  clearTimeout(timerKiller3);
  vindu = 'img/vindu1.png';
  updateScore();
  updateView();
  faster();
  killerHunt();
}

function randomKiller() {
  randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
}

function killerHunt() {
  randomKiller();
  if (randomNumber == 0) {
    timerKiller1 = setTimeout(startKiller1, milliSek);
  } else if (randomNumber == 1) {
    timerKiller2 = setTimeout(startKiller2, milliSek);
  } else if (randomNumber == 2) {
    timerKiller3 = setTimeout(startKiller3, milliSek);
  }
}

function startKiller1() {
  mirror = 'img/mirror2.png';
  updateView();
  timerKiller1 = setTimeout(dangerKiller1, milliSek);
}

function dangerKiller1() {
  mirror = 'img/mirror3.png';
  updateView();
  timerKiller1 = setTimeout(gameOver, milliSek);
}

function startKiller2() {
  door = 'img/door2.png';
  updateView();
  timerKiller2 = setTimeout(dangerKiller2, milliSek);
}

function dangerKiller2() {
  door = 'img/door3.png';
  updateView();
  timerKiller2 = setTimeout(gameOver, milliSek);
}

function startKiller3() {
  vindu = 'img/vindu2.png';
  updateView();
  timerKiller3 = setTimeout(dangerKiller3, milliSek);
}

function dangerKiller3() {
  vindu = 'img/vindu3.png';
  updateView();
  timerKiller3 = setTimeout(gameOver, milliSek);
}

function gameOver() {
  app.innerHTML = /*html*/ `
    <div class="endScreen"><img src="img/GameOver.png" /></div>
    <audio autoplay id="sound" src="sound/horrorsound.mp3"></audio>
  `;
}

function faster() {
  if (milliSek > 800) {
    milliSek -= 200;
  }
}

function updateScore() {
  score++;
}
