// step 4 

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const loader = document.getElementById("loader");


let apiQuotes = []; 

// 7 te loading func
function loading(){
  loader.hidden = false;
  quoteContainer.hidden = true;
  // we are going to see the loader nothig else
}

// 8 complete func hide loading
function complete(){
  quoteContainer.hidden = false;
  loader.hidden = true;
}


// show newquote step2 create func 
function newQuote() {
  loading();
    // pick random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // 3 check if author fielfd is blank & replace it with 'unknown'
      if(!quote.author){
    quoteAuthor.textContent = 'Unknown'
   } else{  
    quoteAuthor.textContent = quote.author
   }
  //  4check code length to deyermine styling

   if(quote.text.length > 120){
    quoteText.classList.add("long-quote");
   }else{
    quoteText.classList.remove("long-quote");
   }

  //  set the quote , hide loader
   quoteText.textContent = quote.text
   complete();
  //  start te loading fun & end te complete fun call kita
   
}

// step 1 get quotes From api
async function getquotes() {
  loading();
    const apiurl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiurl);
        apiQuotes = await response.json();
        console.log(apiQuotes)
        // if you want random quote from api then step 2
        newQuote();
    }
    catch (error) {
        // catch  Error here
        console.log("got some error" , error)
        
    }
}
// tweet quote 5
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
    window.open(twitterUrl, "_blank");
  }
  // 6
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);



getquotes()























































