// Quiz about marvel superheros
//Creation - Dec 7

var readLineSync = require("readline-sync");
console.log("Hey buddy ! Welcome to Marvel Quiz");

var username = readLineSync.question("Please Enter your name: ");
console.log(" ")
console.log("HOLA! "+username);
console.log(" ")
console.log("Let's check, how much you know me well");

var question = [ 
{
  question: " Q1: Who saved the world in end game (yes/no) a.TonyStark b.BlackWidow",
  answer: "a"
},

{
 question: "Q2: Who is Tony's AI assist? A. Jarvis, b. Alexa ",
 answer: "a"
 
},
 
 {
  question: "Q3: Who is tony stark father? : A.scientist B.Entrepreneur ",
  answer: "a"
}
]

var score =0;

var scoreList= [
{
  name:"siva",
  score:9


},

{
  name: "Balaji",
  score: 8
},
{
  name: "karthi",
  score: 7 

},
{
  name:"don",
  score: 6

}

] 



function quiz (question,answer )
{
  var userinput = readLineSync.question(question);

  if(userinput.toUpperCase == answer.toUpperCase)
  {
    console.log("Wow! you got the answer");
    score = score+3;
  }
  else
  {
    console.log("Opps! not right")
    score = score - 3; 
  }

} 

for (i=0;i<question.length;i++)
{
  quiz(question[i].question,question[i].answer);
  console.log("Your Score : "+score);
   console.log("--------------------");
   console.log("");

}

console.log ("Thanks for participating !")

if(score>scoreList[0].score)
   { 
     console.log("You made a bench mark")

      scoreList.unshift( {name: shaan, score: +score }  )    
   } 

   else {

var position = 0;
for(var i=0;i<scoreList.length;i++)
{
   if(score>scoreList[i].score)
   { 
      position = 0+1;
      console.log("You position is " + position );
     scoreList.splice(scoreList[i],0,{name: "shaan",score: +score});

   } 
}


}
