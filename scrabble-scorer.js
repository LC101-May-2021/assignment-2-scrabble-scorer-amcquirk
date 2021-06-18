// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85


const input = require("readline-sync");
let userWord="";

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
}

function oldScrabbleScorer(word) {

word=word.toUpperCase();

	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   userWord=input.question("\n\nLet's play some scrabble!\n\nEnter a word:");
   //console.log(oldScrabbleScorer(userWord));
  
}
console.log(initialPrompt());

function simpleScore(word) {
return word.length;
}
//console.log(simpleScore('tree'));

function vowelBonusScore(word) {
  let score = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      score += 3
    } else {
      score += 1
    }
  }
  return score;
}

//console.log(vowelBonusScore('trees'));


let simpleScoreMethod={name:"Simple Score",
     description: "Each letter is worth 1 point",
     scorerFunction: "simpleScore()"};

let vowelBonusScoreMethod={name:"Bonus Vowels",
     description: "Vowels are 3 pts. Consonants are 1 pt.",
     scorerFunction: "vowelBonusScore()"};

let oldScrabbleScorerMethod={name:"Scrabble",
     description: "the traditional scrabble scoring method",
     scorerFunction: "oldScrabbleScorer()"};


const scoringAlgorithms = [simpleScoreMethod,vowelBonusScoreMethod,oldScrabbleScorerMethod];

let scrabbleScore=0;

function scorerPrompt() {
      

console.log(`Which scoring algorithm would you like to use?

0-${scoringAlgorithms[0].name}:${scoringAlgorithms[0].description}
1-${scoringAlgorithms[1].name}:${scoringAlgorithms[1].description}
2-${scoringAlgorithms[2].name}:${scoringAlgorithms[2].description}`);

  scoringChoice=input.question("Enter 0, 1, or 2: ");
     
if (scoringChoice===0){simpleScore('userWord');} else if (scoringChoice===1){vowelBonusScore('userword');} else if (scoringChoice===2){oldScrabbleScorer('userword');}

if (scoringChoice===0){scrabbleScore=simpleScore('userword');} else if (scoringChoice===1){scrabbleScore=vowelBonusScore('userword');} else if (scoringChoice===2){scrabbleScore=oldScrabbleScorerMethod('userword');} 


   console.log(`Score for '${userWord}': ${scrabbleScore}`);


}

console.log(scorerPrompt());
function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   //oldScrabbleScorer(input.question);
   //scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

