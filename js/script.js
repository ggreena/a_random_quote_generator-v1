/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array - 5 different quotes with: {quote, source, year, citation, tags}
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
 * return random number length of quoets array
 * return random quote using random number
***/



function getRandomQuote(){
  randomnumber = ((Math.floor(Math.random() * quotes.length)) );
  return quotes[randomnumber];
};


/***
 * `printQuote` function
 * concatenate all present objects in each random quote
 * use if/else statement to determine if class is present
 * use <p> and <span>
 * added step for "tags"
 * also added format in style.css to include ", " before the tag
 * assign html string to innerHTML of quote-box
 * console.log (randomQuote) to test
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

/***
 * `background` function
 * randomize background color with each new quote
 * randomize each variable in rgb(x,y,z) 
 * combine to assign new color to background-color of style.css
 *  * help from: https://www.geeksforgeeks.org/ , https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
***/

function background(){
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  var randomColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = randomColor;

};
background();
;

/***
 * setInterval(func, delay)
 * refresh quote and background color every 10 seconds
***/

// setInterval(printQuote, 10000)
// setInterval(background, 10000)

/***
 * click event listener for the print quote button
 * click event listener for new background color
 * assign quote-box inner HTML to print quote function
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('quote-box').innerHTML = printQuote(); 

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", background, false);