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
  quote: "'A long time ago I asked myself, 'Do I want to be right, or do I want to be kind?'. I opted for kind.'" ,
  source: "Jane Lynch",
  year: "",
  citation: "",
  tags: "Inpsirational"
  },
  { quote: "'I can resist everything except temptation.'" ,
  source: "Oscar Wilde",
  year: "1892",
  citation: "Lady Windermere's Fan",
  tags: "History"
  }, 
  { quote: "'Born this way'" ,
  source: "Lady Gaga",
  year: "",
  citation: "",
  tags: "Pop Culture"
}, 
{ quote: "'If you are neutral in situations of injustice, you have chosen the side of the oppressor.'" ,
  source: "Desmond Tutu",
  year: "1984",
  citation: "Unexpected News",
  tags: "Civil Rights"
}, 
{ quote: " 'From each according to his ability, to each according to his needs'" ,
  source: "Karl Marx",
  year: "1875",
  citation: "Critique of the Gotha Programme",
  tags: "Politics"
}, 
];



/***
 * `getRandomQuote` function
***/



function getRandomQuote(){
  randomnumber = ((Math.floor(Math.random() * quotes.length)) );
  return quotes[randomnumber];
};

// console.log(getRandomQuote());
// console.log(Math.random() * quotes.length);
/***
 * `printQuote` function
***/


function printQuote(){
  let randomQuote = getRandomQuote();
  let message = "<p class = quotes >" + randomQuote.quote + "</p>"
  + "<p class = source > " + randomQuote.source;  
  if(randomQuote.year === "" ){
  } else {
    message += "<span class = year > " + randomQuote.year + "</span>";
  };
  if(randomQuote.citation === "" ){
  } else {
    message += "<span class = citation > " + randomQuote.citation + "</span>";
  }; 
  if(randomQuote.tags === "" ){
  } else {
    message += "<span class = tags > " + randomQuote.tags + "</span>";
  }; 
  message += "</p>";
  document.getElementById('quote-box').innerHTML = message;
  console.log(randomQuote);
  
  return message;
};

function background(){
  let colors = ["pink","blue","red","green","yellow"];
  let randomnumber = ((Math.floor(Math.random() * colors.length)));
  return document.body.style.background = colors[randomnumber];
};
;
// console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('quote-box').innerHTML = printQuote(); 
document.getElementById('load-quote').addEventListener("click", printQuote, false);