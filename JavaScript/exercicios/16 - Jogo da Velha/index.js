const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.square');

  const clickSquare = (event) => {
    const square = event.currentTarget;
    if (!square.innerText) {
      square.innerText = previousSymbol === 'X' ? 'O' : 'X';
      previousSymbol = square.innerText;
      square.classList.remove('hover');
      square.classList.add('markedSquare');
      checkWin(parseInt(square.dataset.index, 10), square.innetText);
    }
  };

  const checkWin = (clickedIndex) => {
    // const symbol = previousSymbol === 'X' ? 'O' : 'X';
    const possibleWins = winPatterns.filter((pattern) =>
      pattern.includes(clickedIndex)
    );
    possibleWins.forEach((pattern) => {
      const firstSquare = squares[pattern[0]];
      const secondSquare = squares[pattern[1]];
      const thirdSquare = squares[pattern[2]];

      if (
        firstSquare.innerText === secondSquare.innerText &&
        secondSquare.innerText === thirdSquare.innerText
      ) {
        const keyframes = [
          {},
          { transform: 'scale(1.05) rotate(-10deg)' },
          { transform: 'scale(1) rotate(0deg)' },
          { backgroundColor: 'rgba(25, 255, 140, 0.515)' },
        ];
        const timing = {
          duration: 1000,
          iterations: 1,
          easing: 'ease-in',
          fill: 'forwards',
        };

        const animation1 = new KeyframeEffect(firstSquare, keyframes, timing);
        const animation2 = new KeyframeEffect(secondSquare, keyframes, timing);
        const animation3 = new KeyframeEffect(thirdSquare, keyframes, timing);
        const elementAnimation1 = new Animation(animation1);
        const elementAnimation2 = new Animation(animation2);
        const elementAnimation3 = new Animation(animation3);
        elementAnimation1.play();
        elementAnimation2.play();
        elementAnimation3.play();

        squares.forEach((square) => {
          square.removeEventListener('click', clickSquare);
          square.classList.remove('hover');
          square.classList.add('markedSquare');
        });
      }
    });
  };
  let previousSymbol = 'O';

  squares.forEach((square) => {
    square.addEventListener('click', clickSquare);
  });

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', () => {
    squares.forEach((square) => {
      square.innerText = '';
      square.getAnimations().forEach((animation) => animation.cancel());
      square.style.backgroundColor = 'rgba(255, 255, 255, 0.478)';
      square.addEventListener('click', clickSquare);
      square.classList.add('hover');
      square.classList.remove('markedSquare');
    });
  });
});
