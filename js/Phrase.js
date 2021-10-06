class Phrase {
	constructor(phrase){
		this.phrase = phrase;
	}

	/**
	 * Displays phrase on game board
	 */
	addPhraseToDisplay() {
		const ul = document.querySelector('#phrase ul');
		const getPhrase = this.phrase;
		const letters = getPhrase.split('');

		for ( let i = 0; i < letters.length; i++ ) {
			const regex = /^[a-z]/;
			if (  regex.test(letters[i]) ) {
				const addLetter = `<li class="hide letter ${letters[i]}">${letters[i]}</li>`
				ul.insertAdjacentHTML('beforeend', addLetter);
			} else {
				const addSpace = `<li class="space"> </li>`;
				ul.insertAdjacentHTML('beforeend', addSpace);
			}
		}
	}

	/*
	 * Checks if passed letter is in the phrase
	 * @param (string) letter - Letter to check
	 */
	checkLetter(letter) {
		const board = game.activePhrase.phrase.split('');
		if ( board.indexOf(letter) !== -1 ) {
			return true;
		} else {
			return false;
		}
	}

	/*
	 * Displays passed letter on screen after match is found
	 * @param (string) letter - Letter to display
	 */
	showMatchedLetter(letter) {
		const showLetter = document.querySelectorAll('#phrase ul li');
		for ( let i = 0; i < showLetter.length; i++ ) {
			if ( showLetter[i].textContent === letter ) {
				showLetter[i].className = `show letter ${showLetter[i]}`
			}
		}
	}
}