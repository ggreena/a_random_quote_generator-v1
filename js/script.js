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

let quotes = [
 "'A long time ago I asked myself, Do I want to be right, or do I want to be kind?. I opted for kind.' Jane Lynch",
 "'History isn't something you look back at and say it was inevitable. It happens because people make decisions that are sometimes very impulsive and of the moment, but those moments are cumulative realities.' Marsha P. Johnson",
 "'Born this way' - Lady Gaga",
 "'If you are neutral in situations of injustice, you have chosen the side of the oppressor.' Desmond Tutu, Unexpected News 1984"
 " 'From each according to his ability, to each according to his needs' Karl Marx, 1875 Critique of the Gotha Programme"


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  randomnumber = ((math.Random* quotes.length) - 1);
  return quotes[randomnumber];
};


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);