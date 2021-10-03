/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // const logPhrase = (phrase) => {
 // 	console.log(`Phrase - phrase: `, phrase.phrase);
 // };

const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
// game.phrases.forEach((phrase, index) => {
// 	console.log(`Phrase  ${index} - phrase: ${phrase.phrase}`);
// });

phrase.addPhraseToDisplay();