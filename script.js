const api_url = "https://api.quotable.io/random";

let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("quote-author")

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    quoteText.innerHTML=data.content;
    quoteAuthor.innerHTML=data.author;

}

getQuote(api_url)


function tweet(){

    window.open("https://twitter.com/intent/tweet?text=" + quoteText.innerHTML + "--- by " + quoteAuthor.innerHTML,"Tweet Window", "width=600, height=300")

}



    





