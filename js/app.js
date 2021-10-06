// // variables
let game;
// // let guess;
const startButton = document.querySelector('#btn__reset');
// // const keyboard = document.querySelector('#qwerty');

// event listener to start game
startButton.addEventListener('click', () => {
	game = new Game();
	game.startGame();
});

// const showLetter = document.querySelectorAll('#phrase ul li');
// function showMatchedLetter(letter) {
// 	for ( let i = 0; i < showLetter.length; i++ ) {
// 		if ( showLetter.textContent === letter ) {
// 			console.log(showLetter[])
// 		}
// 	}
// }

// game.activePhrase.showMatchedLetter('a');




// event listener to capture keystroke value
// keyboard.addEventListener('click', (e) => {
// 	if (e.target && e.target.type === 'submit') {
// 		guess = e.target.textContent;
// 		console.log(guess);
// 	}
// });

