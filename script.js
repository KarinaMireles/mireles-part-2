let name = prompt("Welcome to GC mini golf! What is your name?");
let numHoles = parseInt(prompt(`Hi, ${name}! Would you like to play 3 or 6 holes?`));
let totalPar = 0;
let coursePar = numHoles * 3;

for (let i = 1; i <= numHoles; i++) {
  let putts = parseInt(prompt(`How many putts for hole ${i}? (par: 3)`));
  totalPar += putts;
}

let scoreDifference = totalPar - coursePar;
if (scoreDifference > 0) {
  console.log(`Nice try, ${name}... Your total par was: +${scoreDifference}.`);
} else if (totalPar < 0) {
  console.log(`Great job, ${name}! Your total par was: ${scoreDifference}.`);
} else {
  console.log(`Good game, ${name}. Your total par was: ${scoreDifference}.`);
}
