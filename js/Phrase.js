class Phrase {
	constructor(phrase){
		this.phrase = phrase;
	}

	/**
	 * Displays phrase on game board
	 */
	addPhraseToDisplay() {
		const ul = document.querySelector('#phrase ul');
		const getPhrase = game.getRandomPhrase().phrase;
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

	checkLetter() {

	}

	// showMatchedLetter() {

	// }
}