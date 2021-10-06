class Game {
	constructor(){
		this.missed = 0;
		this.phrases = this.createPhrase();
		this.activePhrase = null;
	}

	/**
	 * Creates phrases for use in game
	 * @return {array} An array of phrases that could be used in the game
	 */
	createPhrase() {
		const phraseArr = [
			{phrase: 'they cannot stop you from ordering a steak and a glass of water'},
			{phrase: 'mo salah running down the wing'},
			{phrase: 'better safe than sorry'},
			{phrase: 'hot dog we have a weiner'},
			{phrase: 'a fifth phrase that is not clever'}
		];

		return phraseArr;
	}

	/**
	 * Selects random phrase from phrases property
	 * @return {Object} Phrase object chosen to be used
	 */
	getRandomPhrase() {
		const selectedPhrase = this.createPhrase()[Math.floor(Math.random() * this.phrases.length)];
		return selectedPhrase;
	}
	
	/**
	 * Begins game by selecting a random phrase and displaying it to user
	 */

	startGame() {
	 	const overlay = document.querySelector('#overlay');
	 	overlay.style.display = 'none';
	 	this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
	 	this.activePhrase.addPhraseToDisplay(); 	
	}

	/**
	 * Checks for winning move
	 * @return {boolean} True if game has been won, false if game wasn't won 
	 */
	checkForWin() {
		const displayLetters = document.querySelectorAll('#phrase ul li');
		const showing = [];
		const hidden = [];
		for( let i = 0; i < displayLetters.length; i++ ) {
			if (displayLetters[i].className.startsWith('hide')) {
				hidden.push(displayLetters[i]);
			} else {
				showing.push(displayLetters[i]);
			}
		}

		if ( hidden.length === 0 ) {
			console.log(hidden.length);
			console.log(showing.length);
			return true;
		} else {
			console.log(hidden.length);
			console.log(showing.length);
			return false;
		}
	}

	/**
	 * Increases the value of the missed property
	 * Removes a life from the scoreboard
	 * Checks if a player has remaining lives and ends the game if player is out
	 */
	removeLife() {
		let hearts = document.querySelectorAll('li.tries img');
		let heartsCounter = 0;
		
		for ( let i = 0; i < hearts.length; i++ ) {
			hearts[this.missed].src = 'images/lostHeart.png';
			this.missed += 1;
			break;
		}

		if (this.missed === 5) {
			this.gameOver(false);
		}
	}

	/**
	 * Displays game over message
	 * @param {boolean} gameWon - Whether the user won the game
	 */
	gameOver() {
		if (this.checkForWin() === true) {
			const overlay = document.querySelector('#overlay');
			overlay.className = 'win';
	 		overlay.style.display = 'block';
		} else {
			const overlay = document.querySelector('#overlay');
			overlay.className = 'lose';
		 	overlay.style.display = 'block';
	 	}
	}
}