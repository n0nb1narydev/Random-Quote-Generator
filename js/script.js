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
quotes = [
  {
    quote: 'To all the little girls who are watching this, never doubt that you are valuable and powerful, and deserving of every chance and opportunity in the world to pursue and achieve your own dreams.',
    source: 'Hillary Clinton',
    profession: 'Former First Lady of the United States',
    citation: '',
    year: ''
  },
  {
    quote: 'I raise up my voice—not so that I can shout, but so that those without a voice can be heard. … We cannot all succeed when half of us are held back.',
    source: 'Malala Yousafzai',
    profession:'Pakastani Activist',
    citation: '',
    year: ''
  },
  {
    quote: 'If you want something said, ask a man; if you want something done, ask a woman.',
    source: 'Margaret Thatcher',
    profession:'Former Prime Minister of the UK',
    citation: '',
    year: ''
  },
  {
    quote: 'I\'m tough, ambitious, and I know exactly what I want. If that makes me a bitch, okay.',
    source: 'Madonna',
    profession:'Singer-songwriter',
    citation: '',
    year: ''
  },
  {
    quote: 'Of course I am not worried about intimidating men. The type of man who will be intimidated by me is exactly the type of man I have no interest in.',
    source: 'Chimamanda Ngozi Adichie',
    profession:'Writer',
    citation: '',
    year: ''
  },
  {
    quote: 'Feminism isn\'t about making women stronger. Women are already strong, it\'s about changing the way the world perceives that strength.',
    source: 'G.D. Anderson',
    profession:'Writer',
    citation: '',
    year: ''
  },
  {
    quote: 'Women are always saying, \'We can do anything that men can do.\' But men should be saying, \'We can do anything that women can do.\'',
    source: 'Gloria Steinem',
    profession:'Journalist',
    citation: '',
    year: ''
  },
  {
    quote: 'Women belong in all places where decisions are being made. … It shouldn\'t be that women are the exception.',
    source: 'Ruth Bader Ginsburg',
    profession:'Former Associate Justice',
    citation: '',
    year: ''
  },
  {
    quote: 'There\'s something so special about a woman who dominates in a man\'s world. It takes a certain grace, strength, intelligence, fearlessness, and the nerve to never take no for an answer.',
    source: 'Rihanna',
    profession:'Singer',
    citation: '',
    year: ''
  },
  {
    quote: 'There is no limit to what we, as women, can accomplish.',
    source: 'Michelle Obama',
    profession:'Former First Lady of the United States',
    citation: '',
    year: ''
  },
  {
    quote: 'The more I have spoken about feminism the more I have realized that fighting for women\'s rights has too often become synonymous with man-hating. If there is one thing I know for certain, it is that this has to stop.',
    source: 'Emma Watson',
    profession:'Actress',
    citation: 'September 20, 2014',
    year: 'https://www.unwomen.org/'
  }
]

// Randomly selects a quote from the array and return it
function getRandomQuote(){
  // Generates a random number starting at 0 and going to the end of the quotes array
  const randomNumber = Math.floor( Math.random() * quotes.length );
  // Uses random number to get item from the array
  const randomQuote = quotes[randomNumber];
  
  return randomQuote
}

// Returns a random hex value -- Found at https://css-tricks.com/snippets/javascript/random-hex-color/
function getRandomHex(){
  const randomNumber = Math.floor(Math.random()*16777215).toString(16);
  const hexValue = `#${randomNumber}`;
  
  return hexValue;
}

// Changes the background to the hex color that is passed into it
function changeBackground(hexColor){
  document.body.style.backgroundColor = hexColor;
}


function printQuote(){
  // Calls the change background with the returned hex value from the getRandomHex function
  changeBackground(getRandomHex());

  // Calls the get random quote function and prints quote to page using template provided
  const randomQuote = getRandomQuote();

  // Creating the HTML that will be changing each time this function is called
  var displayQuote = `<p class='quote'>${randomQuote.quote}</p>`;
  displayQuote += `<p class='source'><strong>${randomQuote.source}</strong>`;
  displayQuote += `<span class='profession'> ${randomQuote.profession}</span>`;
  if(randomQuote.citation) {
    displayQuote += ` <span class='citation'>${randomQuote.citation}</span>`;
  }
  if(randomQuote.year) {
    displayQuote += ` <span class='year'>${randomQuote.year}</span>`;
  }
  displayQuote += `</p>`;

  // Changes the HTML to the string above
  document.getElementById('quote-box').innerHTML = displayQuote; 
}

// Calls the print quote function automatically every 15 seconds (https://stackoverflow.com/questions/18070659/run-javascript-function-at-regular-time-interval)
function autoGenerate(){
  setInterval(printQuote, 15000);
}

autoGenerate();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);