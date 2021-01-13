var readlineSync = require("readline-sync")
var score = 0

var nameOfUser = readlineSync.question("Hey there, Bonjour! May I know your name please? ")

console.log("\n Oh! Hi "+nameOfUser+", How are you doing?\n\nAre you ready to get my intro?\n I know you are.\n\n Then just give wrong answers. \n\nThere are only three questions to trouble you. :-) ")

var answer1 = readlineSync.question("\n\n1. What is my name? ")
if(answer1 === "Simran")
{
  score = score + 1;
  console.log("Nice ! Current score: "+score)
}
else
{
  score = score - 1;
  console.log("It's Simran. Hi there. Current score: "+score)
}

console.log("---------------------------------------------------")
var answer2 = readlineSync.question("\n\n2. What is name of school I went to? ")
if(answer2 === "kv")
{
  score = score + 1;
  console.log("Are you researching about me these days? Current score: "+score)
}
else
{
  score = score - 1;
  console.log("It's KV. Current score: "+score)
}

console.log("----------------------------------------------")
var answer3 = readlineSync.question("\n\n3. Can you spell it? ")
if(answer3 ==="IT")
{
  score = score + 1;
  console.log("Smart you are. Great! Current score: "+score)
}
else
{
  score = score - 1;
  console.log("You just had to write 'it' or 'IT'. Current score: "+score)
}

console.log("-------------------------------------------------------")

console.log("Your final score is "+score+"/3.")
