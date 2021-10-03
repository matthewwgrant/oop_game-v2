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
			{phrase: 'better safe than sorrry'},
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
		return this.createPhrase()[Math.floor(Math.random() * this.phrases.length)];
	}
	
}