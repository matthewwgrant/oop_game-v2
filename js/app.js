// variables
let game;
let guess;
let button;
const startButton = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

// event listener to start game
startButton.addEventListener('click', () => {
	game = new Game();
	game.startGame();
});


// event listener to capture keystroke value
keyboard.addEventListener('click', (e) => {
	if (e.target && e.target.type === 'submit') {
		button = e.target;
		button.disabled = true;
		guess = e.target.textContent;
		game.handleInteraction();
	}
});

document.addEventListener('keyup', (e) => {
	const key = e.code.split('y').pop().toLowerCase();
	const onScreenKeys = document.querySelectorAll('.keyrow button');

	for ( let i = 0; i < onScreenKeys.length; i++ ) {
		if ( key  === onScreenKeys[i].textContent ) {
			button = onScreenKeys[i];
			button.disabled = true;
			guess = key;
			game.handleInteraction();
		}
	}
	
		
});

