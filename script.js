// Gift box reveal animation and games grid show
document.addEventListener('DOMContentLoaded', function() {
  const giftBox = document.getElementById('giftBox');
  const gamesGrid = document.getElementById('gamesGrid');
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popup-text');
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  let chosenGame = '';

  function setupGameCardListeners() {
    const boxes = document.querySelectorAll('.game-box');
    boxes.forEach(box => {
      box.addEventListener('click', () => {
        chosenGame = box.parentElement.dataset.game;
        popupText.textContent = `Start ${chosenGame}?`;
        popup.style.display = 'flex';
      });
    });
  }

  if (giftBox && gamesGrid) {
    giftBox.addEventListener('click', function() {
      giftBox.classList.add('open');
      setTimeout(() => {
        gamesGrid.classList.remove('hidden');
        giftBox.style.display = 'none';
        setupGameCardListeners(); // Bind listeners after grid is visible
      }, 700);
    });
  }

  noBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  yesBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    // TODO: Load the game here
    const gameLinks = {
      'Emoji Guessing': 'emoji.html',
      'Memory Card': 'memory.html',
      'Tic Tac Toe': 'tic.html',
      'Flappy Bird': 'flappy.html'
    };
    if (gameLinks[chosenGame]) {
      window.location.href = gameLinks[chosenGame];
    } else {
      alert(`Let's launch ${chosenGame}!`);
    }
  });
});
