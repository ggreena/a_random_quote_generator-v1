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
  quote: "'A long time ago I asked myself, Do I want to be right, or do I want to be kind?. I opted for kind.'" ,
  name: "Jane Lynch",
  year: "",
  citation: "",
  },
  { quote: "'History isn't something you look back at and say it was inevitable. It happens because people make decisions that are sometimes very impulsive and of the moment, but those moments are cumulative realities.'" ,
  name: "Marsha P. Johnson",
  year: "",
  citation: "",
  }, 
  { quote: "'Born this way'" ,
  name: "Lady Gaga",
  year: "",
  citation: "",
}, 
{ quote: "'If you are neutral in situations of injustice, you have chosen the side of the oppressor.'" ,
  name: "Desmond Tutu",
  year: "1984",
  citation: "Unexpected News"
}, 
{ quote: " 'From each according to his ability, to each according to his needs'" ,
  name: "Karl Marx",
  year: "1875",
  citation: "Critique of the Gotha Programme",
}, 
];



/***
 * `getRandomQuote` function
***/



function getRandomQuote(){
  randomnumber = ((Math.floor(Math.random() * quotes.length)) );
  return quotes[randomnumber];
};

console.log(getRandomQuote());
// console.log(Math.random() * quotes.length);
/***
 * `printQuote` function
***/


function printQuote(){
  let randomQuote = getRandomQuote();
  let message = <p class = "quote" > randomQuote.quote </p>,  
  <p class = "source" > randomQuote.source </p>;  
  if(randomQuote.year === "" ){
  } else {
    message += <span class="year"> randomQuote.year </span>
  };
  if(randomQuote.citation === "" ){
  } else {
    message += <span class="citation"> randomQuote.citation </span>
  }; "</p>";
};

console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('quote-box').innerHTML = yourStringHere; 
document.getElementById('load-quote').addEventListener("click", printQuote, false);