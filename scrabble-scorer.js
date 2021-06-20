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
  return userWord;
}
//console.log(initialPrompt());

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
     scorerFunction:simpleScore};

let vowelBonusScoreMethod={name:"Bonus Vowels",
     description: "Vowels are 3 pts. Consonants are 1 pt.",
     scorerFunction:vowelBonusScore};

let scrabbleScoreMethod={name:"Scrabble",
     description: "the traditional scrabble scoring method",
     scorerFunction:scrabbleScore};


const scoringAlgorithms = [simpleScoreMethod,vowelBonusScoreMethod,scrabbleScoreMethod];

let scrabbleScore=0;

function scorerPrompt() {
      

console.log(`Which scoring algorithm would you like to use?

0-${scoringAlgorithms[0].name}:${scoringAlgorithms[0].description}
1-${scoringAlgorithms[1].name}:${scoringAlgorithms[1].description}
2-${scoringAlgorithms[2].name}:${scoringAlgorithms[2].description}`);

  scoringChoice=input.question("Enter 0, 1, or 2: ");
     
//if (scoringChoice===0){simpleScore('userWord');} else if (scoringChoice===1){vowelBonusScore('userword');} else if (scoringChoice===2){oldScrabbleScorer('userword');}

if (scoringChoice===0){scrabbleScore=simpleScore('userword');} else if (scoringChoice===1){scrabbleScore=vowelBonusScore('userword');} else if (scoringChoice===2){scrabbleScore=scrabbleScoreMethod('userword');} 


   console.log(`Score for '${userword}':${scoringAlgorithms[scoringChoice].scorerFunction(userWord)}');


}

//console.log(scorerPrompt());
function transform() {

let newPointStructure={};

for (let key in oldPointStructure){
   newPointStructure[oldPointStructure[key]] = key;
}

return newPointStructure;
} 

let newPointStructure=transform(oldPointStructure);

newPointStructure["a"]=newPointStructure["A,E,I,O,U,L,N,R,S,T"];
delete newPointStructure["A,E,I,O,U,L,N,R,S,T"];
newPointStructure["a"]=1;
newPointStructure["e"]=1;
newPointStructure["i"]=1;
newPointStructure["o"]=1;
newPointStructure["u"]=1;
newPointStructure["l"]=1;
newPointStructure["n"]=1;
newPointStructure["r"]=1;
newPointStructure["s"]=1;
newPointStructure["t"]=1;
newPointStructure["d"]=newPointStructure["D,G"];
delete newPointStructure["D,G"];
newPointStructure["d"]=2;
newPointStructure["g"]=2;
newPointStructure["b"]=newPointStructure["B,C,M,P"];
delete newPointStructure["B,C,M,P"];
newPointStructure["b"]=3;
newPointStructure["c"]=3;
newPointStructure["m"]=3;
newPointStructure["p"]=3;
newPointStructure["f"]=newPointStructure["F,H,V,W,Y"];
delete newPointStructure["F,H,V,W,Y"];
newPointStructure["f"]=4;
newPointStructure["h"]=4;
newPointStructure["v"]=4;
newPointStructure["w"]=4;
newPointStructure["y"]=4;
newPointStructure["k"]=newPointStructure["K"];
delete newPointStructure["K"];
newPointStructure["k"]=5;
newPointStructure["j"]=newPointStructure["J,X"];
delete newPointStructure["J,X"];
newPointStructure["j"]=8;
newPointStructure["x"]=8;
newPointStructure["q"]=newPointStructure["Q,Z"];
delete newPointStructure["Q,Z"];
newPointStructure["q"]=10;
newPointStructure["z"]=10;



function scrabbleScore(){

word=word.toLowerCase();

  let score = 0;
 
  for (let i = 0; i < word.length; i++) {
 
    for (const letterValue in newPointStructure) {
 
     if (newPointStructure[letterValue].includes(word[i])) {
      score += newPointStructure[letterValue];
     }
 
    }
  }
  return score;
 }


function runProgram() {
   initialPrompt();
   scorerPrompt();
   //scorerPrompt();
   scrabbleScore();
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

