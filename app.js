const buttons = document.querySelectorAll('button');
const author = document.getElementById('author');
const quote = document.getElementById('quote');
const nextBtn = document.getElementById('next-btn');
const quoteWrapper = document.getElementById('quote-wrapper')

  for (const button of buttons) {
  
    button.addEventListener('click', function () {
      buttons.forEach(button => {
        button.classList.remove('active');
        button.disabled = false;
        quoteWrapper.style.display = 'flex';
      });
      button.classList.add('active');
      button.setAttribute('disabled', '')
  
      async function updateQuote() {
        let tag = `?tags=${button.id}`;
        const response = await fetch(`https://api.quotable.io/random${tag}`);
        console.log(response)
        const data = await response.json();
        if (response.ok) {
          quote.textContent = data.content;
          author.textContent = data.author;
        } else {
          quote.textContent = "An error occured";
          console.log(data);
        }
  
      }
      updateQuote()
    }) 
  
  };


// function resetBtn() {
//   for (const button of buttons) {
//     button.style.backgroundColor = '#90C26E'
//   }
// }







 

   