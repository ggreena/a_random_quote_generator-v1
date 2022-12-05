/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [ {
  quote: "'A long time ago I asked myself, Do I want to be right, or do I want to be kind?. I opted for kind.'" 
  name: "Jane Lynch"
  Date: 
  Source:
  },
  { quote: "'History isn't something you look back at and say it was inevitable. It happens because people make decisions that are sometimes very impulsive and of the moment, but those moments are cumulative realities.'" 
  name: "Marsha P. Johnson"
  Date: 
  Source:
  }, 
  { quote: "'Born this way'" 
  name: "Lady Gaga"
  Date: 
  Source:
}, 
{ quote: "'If you are neutral in situations of injustice, you have chosen the side of the oppressor.'" 
  name: "Desmond Tutu"
  Date: "1984"
  Source: "Unexpected News"
}, 
{ quote: " 'From each according to his ability, to each according to his needs'" 
  name: "Karl Marx"
  Date: "1875"
  Source: "Critique of the Gotha Programme"
}, 

];



/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  randomnumber = ((math.Random * quotes.length) - 1);
  return quotes[randomnumber];
};

console.log('test');
/***
 * `printQuote` function
***/

function printQuote(){};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);