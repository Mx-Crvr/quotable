const buttons = document.querySelectorAll('button');
const author = document.getElementById('author');
const quote = document.getElementById('quote');




async function updateQuote(url) {
    // Fetch a random quote from the Quotable API
    const response = await fetch(`https://api.quotable.io/random?=tags${url}`);
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      author.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }


  function callFunction() {
    console.log(this.id)
    updateQuote(this)
    
  }

  for (const button of buttons) {
    button.classList.add = 'active';
    button.addEventListener('click', (callFunction))
    };

   