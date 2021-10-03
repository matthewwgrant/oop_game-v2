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
			`they cannot stop you from ordering a steak and a glass of water`,
			`mo salah running down the wing`,
			`better safe than sorrry`,
			`hot dog we have a weiner`,
			`a fifth phrase that is not clever`
		];
		return phraseArr;
	}
	
}